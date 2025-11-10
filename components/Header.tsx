'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header id="principal_header">
      <nav id="principal_navbar" className="navbar navbar_v3 fixed-top navbar-expand-lg navbar-primary py-0 align-items-lg-stretch">
        
        <Link className="navbar-brand py-0 px-lg-4 d-flex align-items-center" href="/">
          <img 
            src="/assets/images/Logo-color.svg" 
            className="logo-image img-fluid" 
            alt="LatinAdvisor Logo"
          />
        </Link>

        {/* NAVBAR DESKTOP */}
        <div className="collapse navbar-collapse d-none d-lg-flex col-lg-9" id="">
          <ul className="navbar-nav ms-auto align-items-lg-stretch principal-menu me-4">
            <li className="nav-item">
              <Link className="nav-link" href="/">Home</Link>
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
                      url: "/australia",
                      title: "australia",
                    },
                    {
                      url: "/dubai",
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
                      url: "/australia",
                      title: "ESTUDIAR EN AUSTRALIA",
                    },
                    {
                      url: "/dubai",
                      title: "ESTUDIAR EN DUBÁI",
                    },
                    {
                      url: "/dubai",
                      title: "RENOVACIÓN DE VISA DE ESTUDIANTE",
                    },
                    {
                      url: "/dubai",
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
                      url: "/australia",
                      title: "visitor visa australia",
                    },
                    {
                      url: "/dubai",
                      title: "Postgraduate Visa Australia",
                    },
                    {
                      url: "/dubai",
                      title: "Training Visa Australia",
                    },
                    {
                      url: "/dubai",
                      title: "Sponsor Visa Australia",
                    },
                    {
                      url: "/dubai",
                      title: "Partner Visa Australia",
                    },
                    {
                      url: "/dubai",
                      title: "Skilled Visa - EOI Australia (Visa por puntos)",
                    },
                    {
                      url: "/dubai",
                      title: "Homologaciones de Estudios (Skills assessment)",
                    },
                    {
                      url: "/dubai",
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
                      url: "/blog",
                      title: "blog",
                    },
                    {
                      url: "/ebooks-guias",
                      title: "ebooks y guías",
                    },
                    {
                      url: "/eventos",
                      title: "eventos",
                    },
                    {
                      url: "/testimonios",
                      title: "testimonios",
                    },
                    {
                      url: "/dubpodcastai",
                      title: "podcast",
                    },
                    {
                      url: "/promociones",
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
              <Link className="nav-link" href="/conocenos">Nosotros</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/contactanos">Contáctanos</Link>
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
                <Link className="nav-link" href="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/australia">Australia</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/dubai">Dubái</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/conocenos">Nosotros</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/contactanos">Contáctanos</Link>
              </li>
            </ul>
          </div>
        </div>

      </nav>
    </header>
  )
}