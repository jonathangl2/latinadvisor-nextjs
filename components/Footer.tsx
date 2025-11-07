"use client";
import Link from "next/link";
import Script from "next/script";

export default function Footer() {
  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log("Formulario Newsletter enviado 🚀");
  };

  return (
    <footer id="principal_footer" className="container-fluid">
      <div className="container">
        <div className="row py-5 py-lg-4 d-flex justify-content-center">

          <div className="pb-4 pt-lg-3 pb-lg-0 col-12 col-sm-9 col-lg-4 contact-information order-2 order-lg-0">
            <div className="row">
              <div className="col-12"> 
                <span id='iasBadge' data-account-id='3865'></span>
              </div>
              <div className="col-12 mb-2">
                <p className="contact-information-item"><i className="icon icon-phone"></i> (+57) 301 572 4665 - (+57) 300 604 6321</p>
              </div>
              <div className="col-12 mb-2">
                <p className="contact-information-item"><i className="icon icon-phone"></i> (+61) 423 165 193 </p>
              </div>
              <div className="col-12 mb-2">
                <p className="contact-information-item"><i className="icon icon-mail"></i> Marketing@latinadvisor.com.au</p>
              </div>
              <div className="col-12 mb-3 mb-lg-0">
                <p className="contact-information-item"><i className="icon icon-mail"></i> info@latinadvisor.com.au</p>
              </div>
              {/* <div className="col-12 container-cta-subscribe mt-5 mt-lg-4">
                <div className="row d-flex align-items-center">
                  <div className="col-12 py-2 text-center text-lg-start">
                    <h2>¡Suscríbete al Newsletter!</h2>
                    <p>Recibe nuestros mejores contenidos</p>
                  </div>
                  <div className="col-12 d-flex align-items-center justify-content-center justify-content-lg-start py-2">
                    <button
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop"
                      className="btn-escribenos btn btn-sm btn-round btn-green-1 py-1 me-2"
                    >
                      ¡Suscríbete!
                    </button>
                  </div>
                </div>
              </div> */}
            </div>
          </div>

          <div className="col-12 col-sm-9 col-lg-4 pb-4 pb-lg-0 contact-information order-0 order-lg-1">
            <div className="row d-flex justify-content-center">
              <div className="col-12">
                <Link href="/" className="d-flex justify-content-center">
                  <img
                    src="/assets/images/Logo-color-blanco.svg"
                    alt="Latinadvisor"
                    className="logo-image"
                  />
                </Link>
              </div>
              <div className="col-10 d-flex align-items-center justify-content-center mt-4 mb-5">
                <Link href="/contactanos?utm_web=Web%20contactanos" className="btn btn-round btn-green-1 text-uppercase btn-sm me-2 px-4 py-3 w-100">
                  Contáctanos
                </Link>
              </div>
              <div className="col-12">
                <div className="row">
                  <div className="col-12 d-flex align-items-center justify-content-center mb-3">
                    {[
                      {
                        href: "https://www.facebook.com/LatinAdvisor",
                        icon: "fab fa-border fa-facebook-f",
                      },
                      {
                        href: "https://www.instagram.com/latinadvisor/",
                        icon: "fab fa-border fa-instagram",
                      },
                      {
                        href: "https://www.youtube.com/channel/UCOUy1CagNx5-SL5JOMJxFcw",
                        icon: "fab fa-border fa-youtube",
                      },
                      {
                        href: "https://www.linkedin.com/company/latinadvisor/?viewAsMember=true",
                        icon: "fab fa-border fa-linkedin-in",
                      },
                      {
                        href: "https://www.tiktok.com/@latinadvisor",
                        icon: "fab fa-tiktok",
                      },
                    ].map((s, i) => (
                      <Link key={i} href={s.href} target="_blank" className="contact-information-social me-2">
                        <i className={s.icon} aria-hidden="true"></i>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="col-12 col-sm-9 col-lg-4 locations py-4 ps-lg-5 order-1 order-lg-2">
            <div className="row">
              {[
                {
                  name: "MELBOURNE",
                  address: "Level 4, 152 Elizabeth Street, Melbourne VIC 3000",
                },
                {
                  name: "BRISBANE",
                  address: "310 Edward Street Brisbane City QLD 4000",
                },
                {
                  name: "ADELAIDE",
                  address: "89 Pirie St, Adelaide SA 5000",
                },
                {
                  name: "COLOMBIA - ARGENTINA",
                  address: '',
                }
              ].map((loc, i) => (
                <div className="col-12 locations-item" key={i}>
                  <p className="locations-item-name">
                    <i className="icon icon-marker"></i> {loc.name}
                  </p>
                  <p className="locations-item-adress">
                    <span dangerouslySetInnerHTML={{ __html: loc.address }} />
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="col-12 mt-2 mb-5 mb-lg-0 text-center copyright order-3">
            <p><small>&#169; Copyright {new Date().getFullYear()} Latinadvisor | Credits | Política de privacidad |</small></p>
          </div>

        </div>
      </div>

      {/* Redes flotantes */}
      <div id="fixed-social-media">
        <div className="sm-principal">
          <Link
            className="link-sm"
            href="https://www.tiktok.com/@latinadvisor"
            target="_blank"
          >
            <i className="fa-tiktok-blue" aria-hidden="true"></i>
          </Link>
          <Link
            className="link-sm"
            href="https://www.instagram.com/latinadvisor/"
            target="_blank"
          >
            <i className="fab fa-instagram" aria-hidden="true"></i>
          </Link>
          <Link
            className="link-sm link-sm-yt"
            href="https://www.youtube.com/channel/UCOUy1CagNx5-SL5JOMJxFcw"
            target="_blank"
          >
            <i className="fab fa-youtube" aria-hidden="true"></i>
          </Link>
          <Link
            className="link-sm"
            href="https://www.facebook.com/LatinAdvisor"
            target="_blank"
          >
            <i className="fab fa-facebook-f" aria-hidden="true"></i>
          </Link>
        </div>
        <div className="sm-wp">
          <Link
            id="fixed-whatsapp"
            href="https://api.whatsapp.com/send?phone=573015724665&text=%F0%9F%98%81%20%C2%A1Hola!%20Muchas%20gracias%20por%20cont%C3%A1ctarnos."
            className="d-flex align-items-center justify-content-center"
            target="_blank"
          >
            <i className="fab fa-whatsapp"></i>
          </Link>
        </div>
      </div>

      {/* Modal Newsletter */}
      <div
        className="modal fade modal_containersuscribe"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className="container">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <button
                type="button"
                className="btn-close close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="fa fa-times" aria-hidden="true"></i>
              </button>
              <div className="modal-body">
                <div className="row d-flex justify-content-center">
                  <div className="col-12 col-md-6 d-none d-lg-inline container_modalsuscribe_img px-0">
                    <img
                      src="/assets/images/koala_newsletter.png"
                      alt="Newsletter"
                      className="img-fluid w-100"
                    />
                  </div>

                  <div className="col-12 col-md-6 container-cta-subscribe_modal d-flex align-items-center py-5">
                    <div className="row w-100">
                      <div className="col-12 mb-3 text-center">
                        <h3 className="text-title">¡Suscríbete!</h3>
                        <h5 className="mb-4">A nuestro Newsletter</h5>
                        <p className="mb-4">Recibe nuestros mejores contenidos</p>
                      </div>
                      <div className="col-12 container-escribenos container-newsletter px-5">
                        <form
                          onSubmit={handleSubmit}
                          className="row"
                          id="newsletterForm"
                        >
                          <div className="col-12 px-4">
                            <input
                              type="text"
                              className="form-control"
                              name="nombre_completo"
                              id="nombre_completo"
                              placeholder="Nombre completo*"
                              required
                            />
                          </div>
                          <div className="col-12 px-4">
                            <input
                              type="email"
                              className="form-control"
                              name="correo_electronico"
                              id="correo"
                              placeholder="Correo electrónico *"
                              required
                            />
                          </div>
                          <div className="col-12 mb-4">
                            <div className="custom-control custom-checkbox ps-5 pt-2">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="politica_newsletter"
                                required
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="politica_newsletter"
                              >
                                <Link
                                  href="/assets/documents/Politicas_de_Proteccion_de_Datos_LatinAdvisor.pdf"
                                  target="_blank"
                                  style={{ fontSize: "0.8rem" }}
                                >
                                  He leído y acepto la Política de privacidad de
                                  Latinadvisor.
                                </Link>
                              </label>
                            </div>
                          </div>
                          <div className="col-12 d-inline-flex justify-content-center">
                            <button
                              type="submit"
                              className="ms-3 btn-escribenos btn btn-sm btn-round btn-green-1"
                            >
                              ¡Suscríbete!
                            </button>
                            <div className="loader text-center pt-2 ms-3 d-none">
                              <h4 className="text--xl">
                                <i className="fa fa-spinner fa-spin"></i>
                              </h4>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
