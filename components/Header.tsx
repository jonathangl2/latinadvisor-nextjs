'use client'

import Link from 'next/link'
import Image from 'next/image'
import { getAssetUrl } from '@/lib/url'

export default function Header() {
  return (
    <header id="principal_header">
      <nav id="principal_navbar" className="navbar navbar_v3 navbar-expand-lg navbar-primary py-0 align-items-lg-stretch">
        
        <Link className="navbar-brand py-0 px-lg-4 d-flex align-items-center" href={getAssetUrl("/")}>
          <img 
            src={getAssetUrl("/assets/images/Logo-color.svg")}
            className="logo-image img-fluid" 
            alt="LatinAdvisor Logo"
          />
        </Link>

        {/* NAVBAR DESKTOP */}
        <div className="collapse navbar-collapse d-none d-lg-flex col-lg-9" id="">
          <ul className="navbar-nav ms-auto align-items-lg-stretch principal-menu me-4">
            <li className="nav-item">
              <Link className="nav-link" href={getAssetUrl("/")}>Inicio</Link>
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
                      url: getAssetUrl("/australia"),
                      title: "australia",
                    },
                    {
                      url: getAssetUrl("/dubai"),
                      title: "dubái",
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
                      url: getAssetUrl("/australia"),
                      title: "ESTUDIAR EN AUSTRALIA",
                    },
                    {
                      url: getAssetUrl("/dubai"),
                      title: "ESTUDIAR EN DUBÁI",
                    },
                    {
                      url: getAssetUrl("/australia/renovaciondevisa"),
                      title: "RENOVACIÓN DE VISA DE ESTUDIANTE",
                    },
                    {
                      url: getAssetUrl("/australia"),
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
            <li className="nav-item dropdown">
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
                  {[
                    {
                      url: getAssetUrl("/australia"),
                      title: "visitor visa australia",
                    },
                    {
                      url: getAssetUrl("/australia"),
                      title: "Postgraduate Visa Australia",
                    },
                    {
                      url: getAssetUrl("/australia"),
                      title: "Training Visa Australia",
                    },
                    {
                      url: getAssetUrl("/australia"),
                      title: "Sponsor Visa Australia",
                    },
                    {
                      url: getAssetUrl("/australia"),
                      title: "Partner Visa Australia",
                    },
                    {
                      url: getAssetUrl("/australia"),
                      title: "Skilled Visa - EOI Australia (Visa por puntos)",
                    },
                    {
                      url: getAssetUrl("/australia"),
                      title: "Homologaciones de Estudios (Skills assessment)",
                    },
                    {
                      url: getAssetUrl("/australia"),
                      title: "Apelaciones ante el Tribunal",
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
                    {
                      url: getAssetUrl("/blog"),
                      title: "blog",
                    },
                    {
                      url: getAssetUrl("/ebooks-guias"),
                      title: "ebooks y guías",
                    },
                    {
                      url: getAssetUrl("/eventos"),
                      title: "eventos",
                    },
                    {
                      url: getAssetUrl("/testimonios"),
                      title: "testimonios",
                    },
                    {
                      url: getAssetUrl("/podcast"),
                      title: "podcast",
                    },
                    {
                      url: getAssetUrl("/promociones"),
                      title: "promociones",
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
            <li className="nav-item">
              <Link className="nav-link" href={getAssetUrl("/conocenos")}>Nosotros</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href={getAssetUrl("/contactanos")}>Contáctanos</Link>
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
                <Link className="nav-link" href={getAssetUrl("/")}>Inicio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href={getAssetUrl("/australia")}>Australia</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href={getAssetUrl("/dubai")}>Dubái</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href={getAssetUrl("/conocenos")}>Nosotros</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href={getAssetUrl("/contactanos")}>Contáctanos</Link>
              </li>
            </ul>
          </div>
        </div>

      </nav>
    </header>
  )
}