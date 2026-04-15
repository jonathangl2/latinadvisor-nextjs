'use client';

import Link from 'next/link';
import { getAssetUrl } from '@/lib/url';
import { usePathname, useParams } from 'next/navigation';

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
  const { locale } = useParams();

  const localePath = (path: string) => `/${locale}${path}`;
  const assetPath = (path: string) => getAssetUrl(path);
  const activeLang = languages.find(l => l.code === locale) ?? languages[0];

  // ========== FUNCIONES DE MENÚ ==========

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
          
          {languages.map(lang => {
        
            const currentPath = pathname || '/';
            const newPath = currentPath.replace(`/${locale}`, `/${lang.code}`);

            return (
              <li key={lang.code}>
                <Link
                  href={newPath}
                  className={`dropdown-item d-flex align-items-center gap-2 ${
                    lang.code === locale ? 'active fw-bold' : ''
                  }`}
                >
                  <span className={lang.icon}></span>
                  {lang.label}
                </Link>
              </li>
            );
          })}
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

  // ========== RENDER ==========

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

        {/* NAVBAR DESKTOP */}
        <div className="collapse navbar-collapse d-none d-lg-flex col-lg-9">
          <ul className="navbar-nav ms-auto align-items-lg-stretch principal-menu me-2">
            {renderMainMenuItems()}
          </ul>
          
          {renderLanguageSelector()}
        </div>

        {/* NAVBAR RESPONSIVE */}
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