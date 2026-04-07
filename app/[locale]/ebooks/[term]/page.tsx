import { notFound } from "next/navigation";
import Image from "next/image";
import BannerInterno from "@/components/BannerInterno";
import { Metadata } from "next";
import FormEmbed from "@/components/FormEmbed";
import { getDictionary, locales, type Locale } from '@/lib/i18n';

// ========== DATA FETCHING ==========

async function getAllEbooksFromStrapi() {
  try {

    const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337';
    const url = `${API_URL}/api/ebooks?populate=*`;
    
    const res = await fetch(url, { 
      next: { revalidate: 3600 }, // Cache por 1 hora
    });

    if (!res.ok) return [];

    const data = await res.json();
    return data.data || [];

  } catch (err) {
    console.error("❌ Error fetching all ebooks:", err);
    return [];
  }
}

async function getEbookFromStrapi(slug: string, locale: string) {
  try {
    
    const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337';
    const url = `${API_URL}/api/ebooks?filters[slug][$eq]=${slug}&locale=${locale}&populate=*`;

    const res = await fetch(url, { 
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      console.error("❌ Response not OK:", res.status);
      return null;
    }

    const data = await res.json();
    return data.data?.[0] || null;

  } catch (err) {
    console.error("❌ Error fetching ebook:", err);
    return null;
  }
}

// ========== STATIC PARAMS ==========

export async function generateStaticParams() {
  try {
    // Obtener todos los ebooks de Strapi
    const ebooks = await getAllEbooksFromStrapi();
    
    // Generar combinaciones: cada ebook × cada idioma
    const params = [];
    for (const locale of locales) {
      for (const ebook of ebooks) {
        params.push({
          locale: locale,
          term: ebook.slug,
        });
      }
    }
    
    console.log(`✅ Generated ${params.length} static params for ebooks`);
    return params;
    
  } catch (err) {
    console.error("❌ Error generating params:", err);
    return [];
  }
}

// ========== METADATA ==========

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ locale: Locale; term: string }> 
}): Promise<Metadata> {
  const { locale, term } = await params;
  const ebook = await getEbookFromStrapi(term, locale);
  
  if (!ebook) {
    return {
      title: "Ebook not found | LatinAdvisor",
    };
  }
  
  return {
    title: `${ebook.title} | Ebooks | LatinAdvisor`,
    description: ebook.content?.replace(/<[^>]*>/g, "").substring(0, 160) || "",
  };
}

// ========== PAGE COMPONENT ==========

export default async function EbookPage({ 
  params 
}: { 
  params: Promise<{ locale: Locale; term: string }> 
}) {
  const { locale, term } = await params;
  const dict = await getDictionary(locale);
  
  const ebook = await getEbookFromStrapi(term, locale);

  if (!ebook) {
    notFound();
  }

  // Extraer URLs de imágenes
  const bannerImageUrl = ebook.image_banner?.url || '';
  const featuredImageUrl = ebook.image_featured?.url || '';

  return (
    <>
      <BannerInterno
        imageSrc={bannerImageUrl}
        title="EBOOKS Y GUÍAS"
        className="internal_page"
      />

      <section 
        id="container-ebooksGuias-form" 
        className="container-ebooksGuias container-escribenos bg-grey-light-1 container-fluid py-5"
      >
        <div className="row">
          <div className="col-12">
            <div className="container">
              <div className="row">
                <div className="col-12 container-ebooksGuias-form py-lg-5">
                  <div className="row d-flex align-items-lg-start justify-content-between">
                    
                    {/* Formulario */}
                    <div className="col-12 col-lg-6 text-center text-lg-start order-2 order-lg-1 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
                      {ebook.formSrc && ebook.formName && ebook.formId && ebook.formHeight ? (
                        <FormEmbed
                          formSrc={ebook.formSrc}
                          formName={ebook.formName}
                          formId={ebook.formId}
                          formHeight={ebook.formHeight}
                          title={ebook.title}
                          titleCard={dict.forms.ebooks?.title || "Quiero mi ebook"}
                          subtitleCard={dict.forms.ebooks?.subtitle || ""}
                          descriptionCard={dict.forms.ebooks?.description || ""}
                        />
                      ) : (
                        <div className="card card-form-ebooks">
                          <div className="card-header">
                            <div className="row">
                              <div className="col-12 text-center px-lg-0 py-4">
                                <h2>Quiero mi ebook</h2>
                              </div>
                            </div>
                          </div>
                          <div className="card-body">
                            <div className="row">
                              <div className="col-12 mt-0 my-sm-4 px-lg-5">
                                <form action="https://formspree.io/f/moqzgzre" method="post" id="ebooksGuiasForm" className="row">
                                  <div className="col-12">
                                    <input type="text" className="form-control" name="nombre" id="nombre" placeholder="Nombres *" defaultValue="" required />
                                  </div>
                                  <div className="col-12">
                                    <input type="text" className="form-control" name="apellido" id="apellido" placeholder="Apellidos *" defaultValue="" required />
                                  </div>
                                  <div className="col-12">
                                    <input type="email" className="form-control" name="correo_electronico" id="correo" placeholder="Correo*" defaultValue="" required />
                                  </div>
                                  <div className="col-12">
                                    <input type="tel" className="form-control" name="celular" id="celular" placeholder="Celular *" defaultValue="" required />
                                  </div>
                                  <div className="col-12">
                                    <select className="form-control" name="nacionalidad" id="nacionalidad" required>
                                      <option disabled selected>Nacionalidad</option>
                                    </select>
                                  </div>
                                  
                                  <input type="hidden" name="ebook_descargado" id="ebook_descargado" value={ebook.title} />
                                  
                                  <div className="col-12 mb-3">
                                    <div className="custom-control custom-checkbox ps-5 pt-2">
                                      <input type="checkbox" className="custom-control-input" name="politica_de_privacidad" value="aceptada" id="politica" required />
                                      <label className="custom-control-label" htmlFor="politica">
                                        <a href="/assets/documents/Politicas_de_Proteccion_de_Datos_LatinAdvisor.pdf" target="_blank" style={{ fontSize: "0.8rem" }}>
                                          He leído y acepto la Política de privacidad de Latinadvisor, incluyendo las finalidades de tratamiento de mis datos.
                                        </a>
                                      </label>
                                    </div>
                                  </div>
                                  <div className="col-12 d-inline-flex justify-content-center">
                                    <button type="submit" className="ms-3 btn btn-sm btn-round btn-blue-grey-2 text-uppercase">Enviar</button>
                                    <div className="loader text-center pt-2 ms-3 d-none">
                                      <h4 className="text--xl"><i className="fa fa-spinner fa-spin"></i></h4>
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Contenido del ebook */}
                    <div className="col-12 container-ebooksGuias-descriptionForm col-lg-5 pt-4 pt-lg-5 pb-5 mb-4 ps-lg-0 pe-lg-5 order-1 order-lg-2">
                      {featuredImageUrl && (
                        <div className="mb-4 text-center">
                          <Image
                            src={featuredImageUrl}
                            alt={ebook.title}
                            width={400}
                            height={500}
                            className="img-fluid"
                          />
                        </div>
                      )}
                      
                      {ebook.content && (
                        <div dangerouslySetInnerHTML={{ __html: ebook.content }} />
                      )}
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}