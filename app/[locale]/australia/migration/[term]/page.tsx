import { notFound } from "next/navigation";
import BannerInterno from "@/components/BannerInterno";
import { getAssetUrl } from "@/lib/url";
import fs from "fs";
import path from "path";
import { Metadata } from "next";
import FormEmbed from "@/components/FormEmbed";
import { JSX } from "react";
import { getDictionary, locales, type Locale } from '@/lib/i18n';


export async function generateStaticParams() {
  try {
    const filePath = path.join(process.cwd(), "public", "assets", "db", "la_home.json");
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const json = JSON.parse(fileContent);
    const mpVisas = json.data?.migration_processes.au || [];
    
    const params = [];
    for (const locale of locales) {
      for (const visa of mpVisas) {
        params.push({
          locale: locale,
          term: visa.slug,
        });
      }
    }
    
    return params;
  } catch (err) {
    console.error("❌ Error generando params:", err);
    return [];
  }
}

async function getVisaFromStrapi(term: string, locale: string) {
  try {

    const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337';
    const url = `${API_URL}/api/migration-processes?filters[slug][$eq]=${term}&locale=${locale}&populate=*`;

    const res = await fetch(url, { 
      next: { revalidate: 60 },
      headers: {
        'Content-Type': 'application/json',
      }
    });

    if (!res.ok) {
      return null;
    }

    const data = await res.json();
    return data.data?.[0] || null;

  } catch (err) {
    return null;
  }
}

function getVisaData(term: string) {
  try {
    const filePath = path.join(process.cwd(), "public", "assets", "db", "la_home.json");
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const json = JSON.parse(fileContent);
    const visa = json.data?.migration_processes.au?.find((c: any) => c.slug === term);
    return visa;
  } catch (err) {
    console.error(`❌ Error cargando visa ${term}:`, err);
    return null;
  }
}

// ========== NORMALIZE ==========

function normalizeVisa(data: any) {
  if (!data) return null;

  // Convertir body plano (start/end-section) a secciones agrupadas
  const sections = groupBlocksIntoSections(data.body || []);

  return {
    slug: data.slug,
    title: data.title,
    custom_title: data.title_custom,
    description: data.description,
    formSrc: data.formSrc,
    formName: data.formName,
    formId: data.formId,
    formHeight: data.formHeight,
    body: sections,
  };
}

// Metadata dinámica
export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ locale: Locale; term: string }> 
}): Promise<Metadata> {
  
  const { locale, term } = await params;
  const dict = await getDictionary(locale);
  
  // Intentar Strapi primero
  const visaFromStrapi = await getVisaFromStrapi(term, locale);
  const visaFromFile = getVisaData(term);
  const visa = visaFromStrapi || visaFromFile;

  if (!visa) {
    return {
      title: "Migration processes not found | LatinAdvisor",
    };
  }
  
  return {
    title: `${visa.title} | Migration | LatinAdvisor`,
    description: visa.description?.replace(/<[^>]*>/g, "").substring(0, 160) || "",
  };
}

type TextFragment = {
  type: "span" | "strong";
  value: string;
};

// ========== HELPERS ==========

function groupBlocksIntoSections(flatBlocks: any[]) {
  const sections: any[] = [];
  let currentSection: any = null;
  let currentBlocks: any[] = [];

  for (const block of flatBlocks) {
    switch (block.__component) {
      case "sections.start-section":
        currentSection = { background: "transparent" };
        currentBlocks = [];
        break;

      case "sections.content-section":
        if (currentSection) {
          currentSection.background = block.background || "transparent";
        }
        break;

      case "sections.end-section":
        if (currentSection) {
          sections.push({
            ...currentSection,
            blocks: [...currentBlocks],
          });
          currentSection = null;
          currentBlocks = [];
        }
        break;

      default:
        if (currentSection) {
          currentBlocks.push(block);
        }
        break;
    }
  }

  if (currentSection && currentBlocks.length > 0) {
    sections.push({
      ...currentSection,
      blocks: [...currentBlocks],
    });
  }

  return sections;
}

function renderText(text: any) {
  // Caso 1: String simple sin HTML
  if (typeof text === "string") {
    // Si contiene HTML (de Strapi Rich Text), renderizar como HTML
    if (text.includes('<')) {
      return <article dangerouslySetInnerHTML={{ __html: text }} />;
    }
    // Texto plano: retornar directamente sin wrapper
    return text;
  }

  // Caso 2: Array de fragmentos (tu formato custom)
  if (Array.isArray(text)) {
    return text.map((part: any, i: number) => {
      // Negrita
      if (part?.type === "strong") {
        return <strong key={i}>{part.value}</strong>;
      }

      // Span con clase o URL
      if (part?.type === "span") {
        return part.url ? (
          <a key={i} href={part.url} target="_blank" rel="noopener noreferrer">
            <span>{part.value}</span>
          </a>
        ) : (
          <span key={i}>{part.value}</span>
        );
      }

      // Texto plano: retornar directamente sin wrapper
      return part?.value || "";
    });
  }

  // Fallback
  return null;
}

function renderBlocks(blocks: any[]) {
  if (!blocks || !Array.isArray(blocks)) return null;

  return blocks.map((block, i) => {
    switch (block.__component) {
      case "content.heading": {
        const Tag = `h${block.level}` as keyof JSX.IntrinsicElements;
        const url = block.url || block.URL;
        
        return url ? (
          <a key={i} href={url} target="_blank" rel="noopener noreferrer">
            <Tag>{renderText(block.text)}</Tag>
          </a>
        ) : (
          <Tag key={i}>{renderText(block.text)}</Tag>
        );
      }

      case "content.paragraph":
        return <p key={i}>{renderText(block.text)}</p>;

      case "content.list": {
        const ListTag = block.ordered ? "ol" : "ul";
        return (
          <ListTag key={i}>
            {block.items?.map((item: any, idx: number) => (
              <li key={idx}>
                {renderText(item.text)}
                {item.children && (
                  <ul className="ps-4">
                    {item.children.map((child: any, cidx: number) => (
                      <li key={cidx}>{renderText(child)}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ListTag>
        );
      }

      default:
        return null;
    }
  });
}

function renderSections(sections: any[], slug: string) {
  if (!sections || !Array.isArray(sections)) return null;

  return sections.map((section, i) => (
    <section 
      key={i} 
      className={`row py-5 bg-${section.background || 'transparent'}`}
    > 
      <div className="col-12">
        <div className="container">
          <div id={`${slug}-${i}`} className="row d-flex justify-content-center">
            <div className="col-12 col-lg-10 information">
              {renderBlocks(section.blocks || [])}
            </div>
          </div>
        </div>
      </div>
    </section>
  ));
}

export default async function MigrationProcessesPage({ params }: { params: Promise<{ locale: Locale; term: string }> }) {

  const { locale, term } = await params;
  const dict = await getDictionary(locale);
  // Validar si el term contiene la palabra "visa"
  const isVisa = term.toLowerCase().includes('visa');

  // Intentar Strapi primero, luego fallback a archivo
  const visaFromStrapi = await getVisaFromStrapi(term, locale);
  const visaFromFile = getVisaData(term);
  
  const rawVisa = visaFromStrapi || visaFromFile;
  const visa = normalizeVisa(rawVisa);
  
  if (!visa) {
    notFound();
  }

  return (
    <>
        <BannerInterno
            imageSrc=''
            title={visa.custom_title || visa.title}
            btnCtaForm={false}
            className="internal_migration internal_migration_subpage"
        />
    
        {visa?.body?.length > 0 && (
          <section className="section-australiaMigration_bodyDynamics container-fluid mb-4">
            {renderSections(visa.body, visa.slug)}
          </section>
        )}

        
        { visa?.formSrc && visa?.formName && visa?.formId && visa?.formHeight && (
          
          <section id="contactForm" className="section-escribenos section-escribenos_contactForm container-escribenos container-fluid">
              <div className="row d-flex justify-content-center">
                  <div className="col-11 col-lg-10 mt-4 py-5 py-lg-5">
                      <h2 className="section-australia_title text-center text-uppercase mb-lg-4" dangerouslySetInnerHTML={{ __html: (isVisa) ? dict.pages.migration.title_form: dict.pages.migration.title_form2 }} />
                  </div>
                  <div className="col-11 col-lg-10 pb-5">
                      <div className="row d-flex justify-content-center">
                          <div className="col-12 col-sm-9 col-lg-6">
                              <FormEmbed
                                  formSrc={visa.formSrc}
                                  formName={visa.formName}
                                  formId={visa.formId}
                                  formHeight={visa.formHeight}
                                  title={visa.title}
                                  titleCard={dict.forms.home.title}
                                  subtitleCard={dict.forms.home.subtitle}
                                  descriptionCard={dict.forms.home.description}
                              />
                          </div>
                      </div>
                  </div>
              </div>
          </section>
        )}
    </>
  );
}
