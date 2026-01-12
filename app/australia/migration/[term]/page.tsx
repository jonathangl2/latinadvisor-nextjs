import { notFound } from "next/navigation";
import BannerInterno from "@/components/BannerInterno";
import { getAssetUrl } from "@/lib/url";
import { console } from "inspector";
import fs from "fs";
import path from "path";
import { Metadata } from "next";
import FormEmbed from "@/components/FormEmbed";


export async function generateStaticParams() {
  try {
    const filePath = path.join(process.cwd(), "public", "assets", "db", "la_home.json");
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const json = JSON.parse(fileContent);
    
    const mpVisas = json.data?.migration_processes.au || [];
    
    return mpVisas.map((visa: any) => ({
      term: visa.slug,
    }));
  } catch (err) {
    console.error("❌ Error generando params:", err);
    return [];
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

export async function generateMetadata({ params }: { params: Promise<{ term: string }> }) {
  const { term } = await params;
  const visa = getVisaData(term);
  
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

export default async function MigrationProcessesPage({ params }: { params: Promise<{ term: string }> }) {

  const { term } = await params;
  const visa = getVisaData(term);
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

        <section className="section-australiaMigration container-donde-estudiar container-fluid">
            <div id="response" className="col-12 py-5">
                <div id={visa.slug} className="row d-flex justify-content-center">
                    <div className="col-12 col-lg-10 information py-4">
                        <div className="ciudad-description" dangerouslySetInnerHTML={{ __html: visa.description }}></div>
                        <h2>Skilled Migration Visa</h2>
                        <p>La Visa de Migración Calificada está diseñada para profesionales cuyas habilidades son necesarias para cubrir vacantes en distintas regiones de Australia.</p> 
                        <p>Las ocupaciones y requisitos asociados se actualizan de forma periódica, de acuerdo con las prioridades y cambios en el mercado laboral australiano. </p>
                        <p>Australia ofrece diferentes caminos para profesionales calificados que buscan vivir y trabajar allí de manera permanente. Entre ellos se incluyen: </p>
                        <ol>
                          <li>Subclass 189 – Visa Independiente Calificada - Skilled Independent Visa: Es una visa permanente, no requiere patrocinio (ni de estado ni de empleador).</li>
                          <li>Subclass 190 – Visa Nominada por Estado - Skilled Nominated Visa: Visa permanente, requiere nominación por un estado o territorio.</li>
                          <li>Subclass 491 – Visa Regional Calificada - Skilled Work Regional (Provisional) Visa: Visa provisional de hasta 5 años, con posibilidad de transición a residencia permanente (subclass 191). Dos vías: 
                              <ul>
                                <li>Nombrado por estado.</li>
                                <li>Patrocinio familiar en zona regional.</li>
                                <li>Debes vivir y trabajar en áreas regionales designadas.</li>
                              </ul>
                          </li>
                          <li>Subclass 191 – Permanent Residence (Skilled Regional) Es una visa de residencia permanente creada para quienes han vivido y trabajado en zonas regionales de Australia bajo una visa provisional (491 o 494), y cumple la función de cerrar el ciclo migratorio convirtiéndolo en un estatus permanente.</li>
                        </ol>
                    </div>
                </div>

                
            </div>
        </section>

        <section id="contactForm" className="section-escribenos section-escribenos_contactForm container-escribenos container-fluid">
            <div className="row d-flex justify-content-center">
                <div className="col-11 col-lg-10 mt-4 py-5 py-lg-5 mt-lg-5">
                    <h2 className="section-australia_title text-center text-uppercase mb-lg-4">¿Quieres Aplicar <br />a este tipo de visa?</h2>
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
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </>
  );
}
