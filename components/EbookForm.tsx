'use client';

import { useEffect, useRef } from 'react';

interface EbookFormProps {
  ebookTitle: string;
  ebookPdfUrl?: string;
}

export default function EbookForm({ ebookTitle, ebookPdfUrl }: EbookFormProps) {
  const formInitializedRef = useRef(false);
  
  useEffect(() => {
    // Esperar a que funciones esté disponible
    const checkInterval = setInterval(() => {
      if (window.funciones && window.jQuery) {
        clearInterval(checkInterval);
        
        // Evitar inicialización múltiple
        if (formInitializedRef.current) return;
        formInitializedRef.current = true;

        // 1. Inicializar país
        if (window.funciones.getCountry) {
          window.funciones.getCountry();
        }

        // 2. Inicializar teléfono
        let celular: any = null;
        if (window.funciones.intlTelInput) {
          celular = window.funciones.intlTelInput('#celular');
        }

        // 3. Configurar envío del formulario
        const $ = window.jQuery;
        
        const handleSubmit = (event: any) => {
          event.preventDefault();

          const data = [
            { name: 'nombre', value: $('#nombre').val() || null },
            { name: 'apellido', value: $('#apellido').val() || null },
            { name: 'correo_electronico', value: $('#correo').val() || null },
            { name: 'celular', value: $('#celular').val() || null },
            { name: 'nacionalidad', value: $('#nacionalidad').val() || null },
            { name: 'ebook_descargado', value: $('#ebook_descargado').val() || null },
            { name: 'politica_de_privacidad', value: $('#politica').is(':checked') ? 'aceptada' : null }
          ];

          const action = $('#ebooksGuiasForm').attr('action');
          const celular_final = celular?.getNumber() || $('#celular').val();

          const reMapData = data.map((item) => {
            if (item.name === 'celular') {
              item.value = celular_final;
            }
            return item;
          });

          const validateNulls = reMapData.some(item => item.value == null);
          $('#ebooksGuiasForm .loader').removeClass('d-none');

          if (!validateNulls) {
            $.ajax({
              url: action,
              type: "POST",
              dataType: 'json',
              data: reMapData,
              success: function(result:any) {
                $('input, textarea, select').val('');

                // Descargar PDF si existe
                if (ebookPdfUrl) {
                  const downloadLink = document.createElement('a');
                  downloadLink.href = ebookPdfUrl;
                  downloadLink.download = ebookPdfUrl.split('/').pop() || 'ebook.pdf';
                  document.body.appendChild(downloadLink);
                  downloadLink.click();
                  setTimeout(() => {
                    document.body.removeChild(downloadLink);
                  }, 100);
                }

                // Redireccionar
                setTimeout(() => {
                  window.location.href = '/gracias';
                }, 2000);
              },
              error: function(xhr:any, resp: any, text: any) {
                $('#ebooksGuiasForm .loader').addClass('d-none');
                console.error('Error en formulario:', xhr, resp, text);
              }
            });
          } else {
            $('#ebooksGuiasForm .loader').addClass('d-none');
            alert('Por favor completa todos los campos obligatorios');
          }
        };

        // Attach event listener
        $('#ebooksGuiasForm').off('submit').on('submit', handleSubmit);
      }
    }, 300);

    // Cleanup
    return () => {
      clearInterval(checkInterval);
      if (window.jQuery) {
        window.jQuery('#ebooksGuiasForm').off('submit');
      }
    };
  }, [ebookTitle, ebookPdfUrl]);

  return (
    <div className="card card-form-ebooks">
      <div className="card-header">
        <div className="row">
          <div className="col-12 text-center px-lg-0 py-4">
            <h3 className="text-uppercase">Quiero mi ebook</h3>
          </div>
        </div>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-12 mt-0 my-sm-4 px-4">
            <form 
              action="https://formspree.io/f/moqzgzre" 
              method="post" 
              id="ebooksGuiasForm" 
              className="row"
            >
              <div className="col-12">
                <input 
                  type="text" 
                  className="form-control" 
                  name="nombre" 
                  id="nombre" 
                  placeholder="Nombres *" 
                  required 
                />
              </div>
              <div className="col-12">
                <input 
                  type="text" 
                  className="form-control" 
                  name="apellido" 
                  id="apellido" 
                  placeholder="Apellidos *" 
                  required 
                />
              </div>
              <div className="col-12">
                <input 
                  type="email" 
                  className="form-control" 
                  name="correo_electronico" 
                  id="correo" 
                  placeholder="Correo*" 
                  required 
                />
              </div>
              <div className="col-12">
                <input 
                  type="tel" 
                  className="form-control" 
                  name="celular" 
                  id="celular" 
                  placeholder="Celular *" 
                  required 
                />
              </div>
              <div className="col-12">
                <select 
                  className="form-control" 
                  name="nacionalidad" 
                  id="nacionalidad" 
                  required
                >
                  <option value="" disabled selected>Nacionalidad</option>
                  {/* Se llena dinámicamente con funciones.getCountry() */}
                </select>
              </div>

              <input 
                type="hidden" 
                name="ebook_descargado" 
                id="ebook_descargado" 
                value={ebookTitle} 
              />

              <div className="col-12 mb-3">
                <div className="custom-control custom-checkbox ps-5 pt-2">
                  <input 
                    type="checkbox" 
                    className="custom-control-input" 
                    name="politica_de_privacidad" 
                    value="aceptada" 
                    id="politica" 
                    required 
                  />
                  <label className="custom-control-label" htmlFor="politica">
                    <a 
                      href="/assets/documents/Politicas_de_Proteccion_de_Datos_LatinAdvisor.pdf" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{ fontSize: "0.8rem" }}
                    >
                      He leído y acepto la Política de privacidad de Latinadvisor, 
                      incluyendo las finalidades de tratamiento de mis datos.
                    </a>
                  </label>
                </div>
              </div>
              <div className="col-12 d-inline-flex justify-content-center">
                <button 
                  type="submit" 
                  className="ms-3 btn btn-sm btn-round btn-blue-grey-2 text-uppercase"
                >
                  Descargar ahora
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
  );
}