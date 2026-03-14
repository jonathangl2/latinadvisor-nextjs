'use client';

import Link from 'next/link';
import { getAssetUrl } from '@/lib/url';
import { usePathname, useParams } from 'next/navigation';

type Props = {
  migrationProcesses: any[];
};

export default function HeaderClient({ migrationProcesses }: Props) {
  
  const pathname = usePathname();
  const { locale } = useParams();

  const localePath = (path: string) => `/${locale}${path}`;
  const assetPath = (path: string) => getAssetUrl(path);
  
  const languages = [
    {
      code: 'es', label: 'ES', icon: 'fi fi-es'
    },
    {
      code: 'en', label: 'EN', icon: 'fi fi-us'
    }
  ];
  const activeLang = languages.find(l => l.code === locale) ?? languages[0];

  return (
    <header id="principal_header">
      <nav id="principal_navbar" className="navbar navbar_v3 navbar-expand-lg navbar-primary py-0 align-items-lg-stretch">
        
        <Link className="navbar-brand py-0 px-lg-4 d-flex align-items-center" href={localePath("/")}>
          <img 
            src={assetPath("/assets/images/Logo-color.svg")}
            className="logo-image img-fluid" 
            alt="LatinAdvisor Logo"
          />
        </Link>

        {/* NAVBAR DESKTOP */}
        <div className="collapse navbar-collapse d-none d-lg-flex col-lg-9" id="">
          <ul className="navbar-nav ms-auto align-items-lg-stretch principal-menu me-2">
            <li className="nav-item">
              <Link className="nav-link" href={localePath("/")}>Inicio</Link>
            </li>
            <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="destinosDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Destinos
                </a>
                <ul className="dropdown-menu" aria-labelledby="destinosDropdown">
                  {[
                    {
                      url: localePath("/australia"),
                      title: "australia",
                    },
                    // {
                    //   url: localePath("/dubai"),
                    //   title: "dubái",
                    // }
                  ].map((item, i) => (
                    <li key={i}>
                      <Link href={item.url} className="dropdown-item">
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
            </li>
            <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="serviciosDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Servicios
                </a>
                <ul className="dropdown-menu" aria-labelledby="serviciosDropdown">
                  {[
                    {
                      url: localePath("/australia"),
                      title: "ESTUDIAR EN AUSTRALIA",
                    },
                    // {
                    //   url: localePath("/dubai"),
                    //   title: "ESTUDIAR EN DUBÁI",
                    // },
                    {
                      url: localePath("/australia/renovaciondevisa"),
                      title: "RENOVACIÓN DE VISA DE ESTUDIANTE",
                    },
                    {
                      url: localePath("/australia/migration"),
                      title: "PROCESOS MIGRATORIOS",
                    },
                    {
                      url: localePath("/australia/workandholiday"),
                      title: "WORK AND HOLIDAY VISA",
                    }
                  ].map((item, i) => (
                    <li key={i}>
                      <Link href={item.url} className="dropdown-item">
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
            </li>
            {/* <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="procesosDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Procesos migratorios y otras visas
                </a>
                <ul className="dropdown-menu" aria-labelledby="procesosDropdown">
                  { migrationProcesses.map((item:any, i:number) => (
                    <li key={i}>
                      <Link href={localePath("/australia/migration/"+item.slug)} className="dropdown-item">
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
            </li> */}
            <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="recursosDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Recursos
                </a>
                <ul className="dropdown-menu" aria-labelledby="recursosDropdown">
                  {[
                    // {
                    //   url: localePath("/blog"),
                    //   title: "blog",
                    // },
                    // {
                    //   url: localePath("/ebooks-guias"),
                    //   title: "ebooks y guías",
                    // },
                    // {
                    //   url: localePath("/eventos"),
                    //   title: "eventos",
                    // },
                    // {
                    //   url: localePath("/testimonios"),
                    //   title: "testimonios",
                    // },
                    {
                      url: localePath("/podcast"),
                      title: "podcast",
                    },
                    // {
                    //   url: localePath("/promociones"),
                    //   title: "promociones",
                    // }
                  ].map((item, i) => (
                    <li key={i}>
                      <Link href={item.url} className="dropdown-item">
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href={localePath("/conocenos")}>Nosotros</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href={localePath("/contactanos")}>Contáctanos</Link>
            </li>
          </ul>
          <ul className="navbar-nav ms-3 me-4 align-items-lg-stretch principal-menu ps-3 border-start h-100">
            
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle d-flex align-items-center gap-2"
                href="#"
                id="langDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className={activeLang.icon}></span>
                {activeLang.label}
              </a>

              <ul className="dropdown-menu dropdown-menu-end dropdown-lang" aria-labelledby="langDropdown">
                {languages.map(lang => (
                  <li key={lang.code}>
                    <Link
                      href={`/${lang.code}`}
                      className={`dropdown-item d-flex align-items-center gap-2 ${
                        lang.code === locale ? 'active fw-bold' : ''
                      }`}
                    >
                      <span className={lang.icon}></span>
                      {lang.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            
          </ul>
        </div>

        {/* NAVBAR RESPONSIVE */}
        <button className="navbar-toggler d-block d-lg-none me-4" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="offcanvas offcanvas-end d-lg-none" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menú</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav mx-auto align-items-lg-stretch principal-menu">
              <li className="nav-item">
                <Link className="nav-link" href={localePath("/")}>Inicio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href={localePath("/australia")}>Australia</Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" href={localePath("/dubai")}>Dubái</Link>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link" href={localePath("/conocenos")}>Nosotros</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href={localePath("/contactanos")}>Contáctanos</Link>
              </li>
            </ul>
          </div>
        </div>

      </nav>
    </header>
  )
}