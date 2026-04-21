'use client';

import Link from 'next/link';
import { getAssetUrl } from '@/lib/url';
import { usePathname, useParams, useRouter } from 'next/navigation';
import { useState } from 'react';

type Props = {
  migrationProcesses: any[];
  dict: any;
};

const languages = [
  { code: 'es', label: 'ES', icon: 'fi fi-es' },
  { code: 'en', label: 'EN', icon: 'fi fi-au' }
];

export default function HeaderClient({ migrationProcesses, dict }: Props) {
  const pathname = usePathname();
  const router = useRouter();
  const { locale } = useParams();
  const [isChangingLang, setIsChangingLang] = useState(false);

  const localePath = (path: string) => `/${locale}${path}`;
  const assetPath = (path: string) => getAssetUrl(path);
  const activeLang = languages.find(l => l.code === locale) ?? languages[0];

  // ========== CAMBIAR IDIOMA ==========
  const handleLanguageChange = async (targetLang: string) => {
    if (targetLang === locale || isChangingLang) return;
    
    setIsChangingLang(true);
    
    try {
      const currentPath = pathname || '/';
      
      // Detectar si estamos en /eventos/[slug]
      const eventMatch = currentPath.match(/\/eventos\/([^/]+)/);
      
      if (eventMatch) {
        // Estamos en un evento, intentar cambiar al evento traducido
        const currentSlug = eventMatch[1];
        
        // Construir la nueva URL
        const newEventUrl = `/${targetLang}/eventos/${currentSlug}`;
        
        // Intentar navegar - si existe la página, funcionará; si no, redirigir a eventos
        router.push(newEventUrl);
        
        // Verificar después de un momento si la navegación falló
        setTimeout(() => {
          // Si después de navegar seguimos en la misma URL, significa que falló
          // En ese caso redirigir al listado
          if (window.location.pathname === currentPath) {
            router.push(`/${targetLang}/eventos`);
          }
        }, 1000);
      } else {
        // Ruta normal - solo cambiar el locale
        const newPath = currentPath.replace(`/${locale}`, `/${targetLang}`);
        router.push(newPath);
      }
    } catch (error) {
      console.error('Error changing language:', error);
      router.push(`/${targetLang}/eventos`);
    } finally {
      setIsChangingLang(false);
    }
  };

  // ========== RENDER LANGUAGE SELECTOR ==========
  const renderLanguageSelector = () => (
    <ul className="navbar-nav ms-lg-3 me-lg-4 align-items-lg-stretch principal-menu ps-3 border-lg-start h-100">
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
              <button
                onClick={() => handleLanguageChange(lang.code)}
                className={`dropdown-item d-flex align-items-center gap-2 ${
                  lang.code === locale ? 'active fw-bold' : ''
                }`}
                disabled={isChangingLang}
                type="button"
              >
                <span className={lang.icon}></span>
                {lang.label}
              </button>
            </li>
          ))}
        </ul>
      </li>
    </ul>
  );

  const renderMenuItem = (
    label: string,
    dropdownId: string,
    items: Array<{ url: string; title: string }>
  ) => (
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle"
        href="#"
        id={dropdownId}
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {label}
      </a>
      <ul className="dropdown-menu" aria-labelledby={dropdownId}>
        {items.map((item, i) => (
          <li key={i}>
            <Link href={item.url} className="dropdown-item">
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );

  const renderMainMenuItems = (idSuffix: string = '') => (
    <>
      <li className="nav-item">
        <Link className="nav-link" href={localePath("/")}>
          {dict.nav.home}
        </Link>
      </li>

      {renderMenuItem(
        dict.nav.destinations,
        `destinosDropdown${idSuffix}`,
        [
          { url: localePath("/australia"), title: "Australia" }
        ]
      )}

      {renderMenuItem(
        dict.nav.services,
        `serviciosDropdown${idSuffix}`,
        [
          { url: localePath("/australia"), title: dict.nav.services_dropdown.study_australia },
          { url: localePath("/australia/renovaciondevisa"), title: dict.nav.services_dropdown.renovation_visa },
          { url: localePath("/australia/migration"), title: dict.nav.services_dropdown.migration_visa },
          { url: localePath("/australia/workandholiday"), title: dict.nav.services_dropdown.workandholiday }
        ]
      )}

      {renderMenuItem(
        dict.nav.migration_processes,
        `procesosDropdown${idSuffix}`,
        migrationProcesses.map(item => ({
          url: localePath(`/australia/migration/${item.slug}`),
          title: item.title
        }))
      )}

      {renderMenuItem(
        dict.nav.resources,
        `recursosDropdown${idSuffix}`,
        [
          { url: localePath("/ebooks-guias"), title: dict.nav.resources_dropdown.ebooks },
          { url: localePath("/eventos"), title: dict.nav.resources_dropdown.events },
          { url: localePath("/testimonios"), title: dict.nav.resources_dropdown.testimonials},
          { url: localePath("/podcast"), title: dict.nav.resources_dropdown.podcast },
          { url: localePath("/promociones"), title: dict.nav.resources_dropdown.promotions }
        ]
      )}

      <li className="nav-item">
        <Link className="nav-link" href={localePath("/conocenos")}>
          {dict.nav.about_us}
        </Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" href={localePath("/contactanos")}>
          {dict.nav.contact}
        </Link>
      </li>
    </>
  );

  return (
    <header id="principal_header">
      <nav id="principal_navbar" className="navbar navbar_v3 navbar-expand-lg navbar-primary py-2 py-md-0 align-items-lg-stretch">
        
        <Link className="navbar-brand py-0 d-flex align-items-center" href={localePath("/")}>
          <img 
            src={assetPath("/assets/images/Logo-color.svg")}
            className="logo-image img-fluid" 
            alt="LatinAdvisor Logo"
          />
        </Link>

        <div className="collapse navbar-collapse d-none d-lg-flex col-lg-9">
          <ul className="navbar-nav ms-auto align-items-lg-stretch principal-menu me-2">
            {renderMainMenuItems()}
          </ul>
          
          {renderLanguageSelector()}
        </div>

        <button 
          className="navbar-toggler d-block d-lg-none me-4" 
          type="button" 
          data-bs-toggle="offcanvas" 
          data-bs-target="#offcanvasNavbar" 
          aria-controls="offcanvasNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div 
          className="offcanvas offcanvas-end d-lg-none" 
          id="offcanvasNavbar" 
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menú</h5>
            <button 
              type="button" 
              className="btn-close" 
              data-bs-dismiss="offcanvas" 
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav mx-auto align-items-lg-stretch principal-menu">
              {renderMainMenuItems('Resp')}
            </ul>
            
            {renderLanguageSelector()}
          </div>
        </div>

      </nav>
    </header>
  );
}