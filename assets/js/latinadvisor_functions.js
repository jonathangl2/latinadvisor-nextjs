// Detecta la URL base automáticamente
const BASE_URL = window.location.origin + (window.location.pathname.includes("latinadvisor-nextjs") ? "/latinadvisor-nextjs" : "");


jQuery(document).ready(function() {

    let scrollDown = jQuery('#principal_banner .scrolling, .scrolling');

    //smooth scroll to the section
    scrollDown.click(function(event) {
        event.preventDefault();
        funciones.smoothScroll(jQuery(this.hash));
    });

    const triggerTabs = document.querySelectorAll('.triggerTabInitial');
    triggerTabs.forEach(trigger => {
        trigger.addEventListener('click', event => {
            event.preventDefault();
            // Obtener el valor del atributo data-tab
            const tabId = trigger.getAttribute('data-tab');
            const tabTrigger = new bootstrap.Tab('#'+tabId)
            tabTrigger.show()
        });
    });
    
    jQuery(this).scroll(function() {
        if (jQuery(window).scrollTop() > 100) {
            jQuery("#principal_navbar").addClass("bg-header");
        }
        if (jQuery(window).scrollTop() < 100) {
            jQuery("#principal_navbar").removeClass("bg-header");
        }
    });



    /* ------ START JAVASCRIPT FOR HOME OWLCAROUSEL ------ */
    jQuery('#carousel-testimonials').owlCarousel({
        loop: true,
        mouseDrag: false,
        dots: false,
        items: 1,
        center: true,
        autoplay: true,
        autoplayTimeout: 10000,
        autoplayHoverPause: true,
        nav: true,
        navText: ['<i class="icon icon-arrow-light-left"></i>', '<i class="icon icon-arrow-light-right"></i>'],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            }
        }
    });
    jQuery('#carousel-our-team').owlCarousel({
        loop: true,
        mouseDrag: false,
        dots: false,
        items: 1,
        center: true,
        autoplay: true,
        autoplayTimeout: 3500,
        autoplayHoverPause: false,
        nav: false,
        navText: ['<span><i class="fas fa-chevron-left"></i></span>', '<span><i class="fas fa-chevron-right"></i></span>'],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            }
        },
        animateIn: 'fadeIn',
        animateOut: 'fadeOut'
    });

    jQuery('.carousel-donde-estudiar').owlCarousel({
        loop: true,
        mouseDrag: false,
        dots: true,
        center: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: false,
        nav: false,
        navText: ['<span><i class="fas fa-chevron-left"></i></span>', '<span><i class="fas fa-chevron-right"></i></span>'],
        responsiveClass: true,
        responsive: {
            0: { items: 1 },
            720: { items: 2, nav: true },
            1024: { items: 3, nav: true }
        },
        animateIn: 'fadeIn',
        animateOut: 'fadeOut'
    });

    // V2 HOME

    jQuery('#carousel-featuredLatinadvisor').owlCarousel({
        loop: true,
        mouseDrag: false,
        dots: false,
        items: 1,
        center: true,
        autoplay: true,
        autoplayTimeout: 8000,
        autoplayHoverPause: true,
        nav: true,
        navText: ['<i class="icon icon-arrow-light-left"></i>', '<i class="icon icon-arrow-light-right"></i>'],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            }
        }
    });

    /* ------ FINISH JAVASCRIPT FOR HOME OWLCAROUSEL ------ */

    // VALIDATION MODAL 

    // NEWSLETTER
    let showModalNewsletter = getCookie("showModalNewsletter");
    let cookieDataNewsletter = getCookie("usuarioRegistradoNewsletter");

    // if (!showModalNewsletter && !cookieDataNewsletter) {
    //     setTimeout(function() {
    //         // jQuery('.modal_containersuscribe').modal('show');
    //         setCookie('showModalNewsletter', 'true', 2);
    //     }, 40000);
    // }

    // OFFER RENEW VISA
    let allowModalOffer = (jQuery("#allowModalOffer"))? jQuery("#allowModalOffer").val() : false;
    let showModalOffer = getCookie("showModalOffer");
    let cookieDataOffer = getCookie("usuarioRegistradoOffer");
    
    if ( (!showModalOffer && !cookieDataOffer ) && allowModalOffer == 'true' ) {
        setTimeout(function() {
            jQuery('.modal_containerRenewVisa').modal('show');
            setCookie('showModalOffer', 'true', 1);
            let celular_cp = funciones.intlTelInput('#celular_cp');
            jQuery("#getAUDForm").on('submit',function(event) {
                event.preventDefault();
                funciones.sendEmailsNewsletter('getAUDForm', '/gracias.html', celular_cp, 'usuarioRegistradoOffer');
            });
        }, 4000);
    }

});

let funciones = {
    smoothScroll: function(target) {
        jQuery('body,html').animate({ 'scrollTop': target.offset().top - 65 },
            900
        );
    },
    smoothScrollMap: function(target) {
        jQuery('body,html').animate({ 'scrollTop': target.offset().top - 140 },
            1000
        );
    },
    smoothScrollTabs: function(target) {
        jQuery('body,html').animate({ 'scrollTop': target.offset().top - 200 },
            1000
        );
    },
    intlTelInput: function(idInputCelular = '#celular') {
        let input = document.querySelector(idInputCelular);
        let iti = intlTelInput(input, {
            // allowDropdown: false,
            autoHideDialCode: false,
            autoPlaceholder: "polite",
            //customPlaceholder:true,
            // dropdownContainer: document.body,
            // excludeCountries: ["us"],
            formatOnDisplay: true,
            // geoIpLookup: function(callback) {
            //     jQuery.get("http://ipinfo.io", function() {}, "jsonp").always(function(resp) {
            //         let countryCode = (resp && resp.country) ? resp.country : "";
            //         callback(countryCode);
            //     });
            // },
            // hiddenInput: "full_number",
            initialCountry: "co",
            // localizedCountries: { 'au': 'Australia' },
            // nationalMode: false,
            // onlyCountries: ['us', 'gb', 'ch', 'ca', 'do'],
            // placeholderNumberType: "MOBILE",
            // preferredCountries: ['cn', 'jp'],
            //separateDialCode: true,
            utilsScript: "assets/js/intl-tel-input/utils.js",
        });
        return iti;
    },
    sendEmails: function() {
        let celular = funciones.intlTelInput();
        jQuery("#escribenosForm").submit(function(event) {
            event.preventDefault();
            let data = jQuery("#escribenosForm").serializeArray();

            let celular_final = celular.getNumber();

            data.forEach(function(item) {
                if (item.name === 'celular') {
                    item.value = celular_final;
                }
            });
            // console.log( data );
            jQuery('#escribenosForm .loader').removeClass('d-none');

            jQuery.ajax({
                url: 'https://formspree.io/xnqzadon', // url where to submit the request
                type: "POST", // type of action POST || GET
                dataType: 'json', // data type
                data: data, // post data || get data
                success: function(result) {
                    //console.log(result);
                    // jQuery('#escribenosForm .response-form').removeClass('d-none');
                    jQuery('input, textarea').val('');
                    setTimeout(function() {
                        window.location.href = "/gracias.html";
                    }, 2000);
                },
                error: function(xhr, resp, text) {
                    jQuery('#escribenosForm .loader').addClass('d-none');
                    console.log(xhr, resp, text);
                }
            });
        });
    },
    sendEmailsLandingPage: function(idForm, redirecTo, urlDoc = null ) {
        
        let celular = funciones.intlTelInput();

        jQuery("#"+idForm).submit(function(event) {
            
            event.preventDefault();
        
            let data = [
                {
                    name: 'nombre',
                    value: ( $('#nombre').val() )? $('#nombre').val(): null
                },
                {
                    name: 'apellido',
                    value: ( $('#apellido').val() )? $('#apellido').val(): null
                },
                {
                    name: 'correo_electronico',
                    value: ( $('#correo').val() )? $('#correo').val(): null
                },
                {
                    name: 'celular',
                    value: ( $('#celular').val() )? $('#celular').val(): null
                },
                {
                    name: 'nacionalidad',
                    value: ( $('#nacionalidad').val() )? $('#nacionalidad').val(): null
                },
                {
                    name: 'ebook_descargado',
                    value: ( $('#ebook_descargado').val() )? $('#ebook_descargado').val(): null
                },
                {
                    name: 'politica_de_privacidad',
                    value: ( $('#politica').val() )? $('#politica').val(): null
                }
            ];
        
            
            let action = jQuery("#"+idForm).attr('action');
        
            let celular_final = celular.getNumber();
        
            let reMapData = data.map( (item) =>{
                if (item.name == 'celular') {
                    item.value = celular_final;
                    return item;
                }else{
                    return item;
                }
            });
            
            let validateNulls = reMapData.some(item => item.value == null);
            jQuery('#'+idForm+' .loader').removeClass('d-none');
            
            if(validateNulls==false){
                jQuery.ajax({
                    url: action, // url where to submit the request
                    type: "POST", // type of action POST || GET
                    dataType: 'json', // data type
                    data: reMapData, // post data || get data
                    success: function(result) {
                        // console.log(result);
                        jQuery('input, textarea').val('');
                        
                        if(urlDoc){
                            const downloadLink = document.createElement('a');
                            downloadLink.href = urlDoc;
                            downloadLink.download = urlDoc.replace('/assets/ebooks-docs/','');
                        
                            // Trigger the download
                            document.body.appendChild(downloadLink);
                            downloadLink.click();
                        
                            // Clean up
                            setTimeout(() => {
                                URL.revokeObjectURL(downloadLink.href);
                                document.body.removeChild(downloadLink);
                            }, 100);
                        }
        
                        setTimeout(function() {
                            window.location.href = redirecTo;
                        }, 2000);
        
                    },
                    error: function(xhr, resp, text) {
                        jQuery('#'+idForm+' .loader').addClass('d-none');
                        console.log(xhr, resp, text);
                    }
                });
            }else{
                jQuery('#'+idForm+' .loader').addClass('d-none');
            }
            /**/
        });
    },
    sendEmailsNewsletter: function(idForm, redirecTo, celularElement = undefined, nameCookie = undefined) {

        let data = jQuery("#"+idForm).serializeArray();
        let action = jQuery("#"+idForm).attr('action');       

        let celular_final = (celularElement)? celularElement?.getNumber() : '';
        let reMapData = data.map( (item) =>{
            if (item.name == 'celular') {
                item.value = celular_final;
                return item;
            }else{
                return item;
            }
        });

        jQuery('#'+idForm+' .loader').removeClass('d-none');
        jQuery.ajax({
            url: action, // url where to submit the request
            type: "POST", // type of action POST || GET
            dataType: 'json', // data type
            data: reMapData, // post data || get data
            success: function(result) {
                
                // console.log(result);

                (nameCookie)?? setCookie(nameCookie, 'true', 30);

                jQuery('input, textarea').val('');
                setTimeout(function() {
                    window.location.href = redirecTo;
                }, 2000);
            },
            error: function(xhr, resp, text) {
                jQuery('#'+idForm+' .loader').addClass('d-none');
                console.log(xhr, resp, text);
            }
        });

    },
    alertMessage: function() {
        jQuery('.response-form').on('closed.bs.alert', function() {
            setTimeout(function() {
                location.reload(true);
            }, 2000);
        });
    },
    getCountry: function() {
        
        jQuery(document).ready(function() {
            let APIREST = "https://restcountries.com/v3.1/all?fields=translations";
            jQuery.getJSON(APIREST).done(function(data) {
                let dataTmp = data.map((item)=>item.translations.spa.common).sort();
                // console.log(dataTmp)
                jQuery.each(dataTmp, function(i, item) {
                    jQuery('#nacionalidad').append('<option value="' + item + '">' + item + '</option>');
                });
            });
        });
        /*
        jQuery(document).ready(function() {
            let APIREST = "https://restcountries.eu/rest/v2/all";
            jQuery.getJSON(APIREST).done(function(data) {
                jQuery.each(data, function(i, item) {
                    jQuery('#nacionalidad').append('<option value="' + item.translations.es + '">' + item.translations.es + '</option>');
                });
            });
        });*/
    },
    showCityWhereStudy: function() {
        jQuery(document).ready(function() {

            //jQuery('.container-donde-estudiar-city').hide();

            // setTimeout(function() {
            //     let hash = jQuery(location).attr('hash');
            //     if (hash) {
            //         toggleCity(hash);
            //     }
            // }, 2000);

            // jQuery(window).on('hashchange', function() {
            //     let changeHash = jQuery(location).attr('hash');
            //     toggleCity(changeHash);
            // });

            // jQuery('.map-au .map-au-city').click(function(event) {
            //     event.preventDefault();
            //     let target = jQuery(this).attr('href');
            //     jQuery(location).attr('hash', target);
            // });

            // jQuery('#response .view-more').click(function(event) {
            //     event.preventDefault();
            //     funciones.smoothScrollMap(jQuery('.map-au'));
            // });

        });

        function toggleCity(id) {
            jQuery('#response .loader').show();
            jQuery('.container-donde-estudiar-city').hide(600);
            funciones.smoothScrollMap(jQuery('#response .loader'));
            setTimeout(function() {
                jQuery('#response ' + id).toggle();
                funciones.smoothScrollMap(jQuery('#response ' + id));
                jQuery('#response .loader').hide(600);
            }, 3000);
        }
    },
    showTabAustralia: function() {
        jQuery(document).ready(function() {
            //V2
            setTimeout(function() {
                let hash = jQuery(location).attr('hash').substr(1);
                funciones.smoothScrollTabs(jQuery('#'+hash));
            }, 1000);
        });
    },
    // ---------------------------

    // V2
    getTeamLatinAdvisorHome: () => {
        
        const htmlTeamCArousel = (data) => {
            return `<div class="item px-5 pt-5 d-flex align-items-center">
                <div class="card card-team">
                    <div class="card-body">
                        <div class="img-bg" style="background-image: url('${BASE_URL}/assets/images/conocenos/team/${data?.img_bg}');">
                            <p>${data.description_team}</p>
                        </div>
                        <div class="img-front" style="background-image: url('${BASE_URL}/assets/images/conocenos/team/${data.img_front}');"></div>
                    </div>
                    <div class="card-footer">
                        <h3>${data.name_team}</h3>
                        <h4>${data.name_position}</h4>
                    </div>
                </div>
            </div>`;
        };

        fetch(`${BASE_URL}/assets/db/la_home.json`).then(response => {
            if (!response.ok) throw new Error('Network response was not ok ' + response.statusText);
            return response.json();
        }).then(({ data }) => {

            const HTMLfinal = data.home.team.map(item => htmlTeamCArousel(item)).join("");
            const contentElement = document.getElementById('carousel-teamLatinadvisor');
            if (!contentElement) {
                console.warn('⚠️ No se encontró #carousel-teamLatinadvisor');
                return;
            }

            contentElement.innerHTML = HTMLfinal;

            jQuery('#carousel-teamLatinadvisor').owlCarousel({
                loop: true,
                mouseDrag: false,
                dots: false,
                items: 1,
                center: false,
                autoplay: false,
                autoplayTimeout: 6000,
                autoplayHoverPause: true,
                nav: false,
                navText: ['<i class="icon icon-arrow-light-left"></i>', '<i class="icon icon-arrow-light-right"></i>'],
                responsiveClass: true,
                responsive: {
                    0: { items: 1 },
                    720: { items: 2, dots: true, nav: true, },
                    1024: { items: 3, dots: true,  nav: true, }
                }
            });
        }).catch(error => {
            console.error('❌ Error en fetch:', error);
        });
    },
    getPostBlog:() => {

        const htmlPostBlog = (data) => {
            return `<div class="col-12 col-md-6 col-lg-4 mb-4">
                <div class="card card-post card-postBlog">
                    <div class="card-body">
                        <img src="${BASE_URL}/assets/images/blog/posts/${data.img}" alt="" class="img-fluid mb-3">
                        <h3 class="mb-3"><strong>${data.title}</strong></h3>
                        <p>${data.descripcion}</p>
                        <a href="blog/${data.link}" class="mt-4 btn btn-sm btn-cta-post">Sigue leyendo <i class="icon icon-arrow-right-green"></i></a>
                    </div>
                </div>
            </div>`;
        }

        document.addEventListener("DOMContentLoaded", function() {
            fetch(`${BASE_URL}/assets/db/la_home.json`).then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            }).then( ({data}) => {

                let HTMLfinal = data.blog.post_previews.slice(0, 3).map((item)=>{
                   return htmlPostBlog(item);
                }).join("");
                // console.log(HTMLfinal)
                const contentElement = document.getElementById('postBlogLatinadvisor');
                contentElement.innerHTML = HTMLfinal;

            }).catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
            });
        });
    },
    getBeneficios: (location) => {

        const htmlBenefit = (data) => {
            return `
            <div class="item d-flex flex-column align-items-center  px-3">
                <div class="card card-benefit border-0 bg-transparent">
                    <div class="card-body d-flex flex-column align-items-center px-4 px-lg-5">
                        <img src="${data.img}" alt="${data.title}" class="img-fluid mb-3 benefit-img" />
                        <h3 class="text-center"><strong>${data.title}</strong></h3>
                        <p>${data.description}</p>
                    </div>
                </div>
            </div>`;
        };

        fetch(`${BASE_URL}/assets/db/la_home.json`).then((response) => response.json()).then(({ data }) => {
            
            const section = data.benefits[location];
            if (!section) return console.warn(`No se encontraron beneficios para: ${location}`);

            const HTMLfinal = section.map((item) => htmlBenefit(item)).join("");
            const contentElement = document.getElementById(`carousel-benefits-${location}`);
            if (!contentElement) return console.warn(`No se encontró el contenedor #carousel-benefits-${location}`);

            contentElement.innerHTML = HTMLfinal;

            jQuery(`#carousel-benefits-${location}`).owlCarousel({
                loop: true,
                mouseDrag: false,
                dots: true,
                items: 1,
                center: false,
                autoplay: false,
                autoplayTimeout: 8000,
                autoplayHoverPause: true,
                nav: false,
                navText: ['<i class="icon icon-arrow-white-left"></i>', '<i class="icon icon-arrow-white-right"></i>'],
                responsiveClass: true,
                responsive: {
                    0: { items: 1 },
                    768: { items: 2, nav: true },
                    1024: { items: 2, nav: true }
                }
            });
        }).catch((error) => console.error('Error cargando beneficios:', error));
    }
};

function setCookie(name, value, daysToLive) {
    // Encode value in order to escape semicolons, commas, and whitespace
    let cookie = name + "=" + encodeURIComponent(value);
    if (typeof daysToLive === "number") {
        /* Sets the max-age attribute so that the cookie expires
        after the specified number of days */1
        cookie += "; max-age=" + (daysToLive * 24 * 60 * 60);
        document.cookie = cookie;
    }
}

function getCookie(name) {
    // Split cookie string and get all individual name=value pairs in an array
    var cookieArr = document.cookie.split(";");
    // Loop through the array elements
    for (var i = 0; i < cookieArr.length; i++) {
        var cookiePair = cookieArr[i].split("=");
        /* Removing whitespace at the beginning of the cookie name
        and compare it with the given string */
        if (name == cookiePair[0].trim()) {
            // Decode the cookie value and return
            return decodeURIComponent(cookiePair[1]);
        }
    }
    // Return null if not found
    return null;
}

window.funciones = funciones;