const observer = new MutationObserver(() => {
  if (document.querySelector("#tabsMenuAustralia .nav-linkTab")) {
      observer.disconnect(); // Deja de observar cambios
      triggerListenerTabs();
  }
});

observer.observe(document.body, { childList: true, subtree: true });

jQuery(document).ready(function() {

  // --- START JAVASCRIPT FOR CALCULATOR ---

  jQuery('#offcanvasNavbar').on('hide.bs.dropdown', function (e) {
    if (e.clickEvent) {
      e.preventDefault();
    }
  });

  jQuery('#calculator_migration_form').on('submit', function (e) {
    e.preventDefault();
  })

  jQuery('#calculator_migration_form input.form-check-input, #calculator_migration_form select.form-select').on('change', function (e) {
    calculatePointsMigration();
    showNextQuestions(e.target);
  });

  jQuery('input[name="calc_q1"]').on('change', function (e) {
     let valTarget = jQuery(e.target).attr('data-value');
     if( valTarget == 190 ){
        jQuery('#calc_q12').removeClass('notShowingByVisa');
        jQuery('#calc_q13').addClass('notShowingByVisa');
     }else if( valTarget == 491 ){
      jQuery('#calc_q13').removeClass('notShowingByVisa');
      jQuery('#calc_q12').addClass('notShowingByVisa');
     }else{
      jQuery('#calc_q12, #calc_q13').addClass('notShowingByVisa');
     }
  });
  
  // --- START JAVASCRIPT FOR CALCULATOR ---

  // --- START JAVASCRIPT FOR APPOINTMENT ---

  jQuery('input[name="verificar_tipo_usuario"]').on('change', function (e) {
    
    let valTarget = jQuery(e.target).attr('data-value');

    if( valTarget == 2 ){

      jQuery('#emailUserLatinadvisor').attr('data-validateUser', true);

      jQuery('#js-containerVerificarUsuario label').removeClass('d-none');
      jQuery('#js-containerButtonNextStep').removeClass('d-flex');
      jQuery('#js-containerButtonNextStep').addClass('d-none');
      
      jQuery('#js-containerCalendly .container-event-a').addClass('d-none');
      jQuery('#js-containerCalendly .container-event-b').removeClass('d-none');

    }else if( valTarget == 1 ){ 

      jQuery('#emailUserLatinadvisor').attr('data-validateUser', false);

      jQuery('#js-containerVerificarUsuario label').addClass('d-none');
      jQuery('#js-containerButtonNextStep').removeClass('d-none');
      jQuery('#js-containerButtonNextStep').addClass('d-flex');

      jQuery('#js-containerCalendly .container-event-b').addClass('d-none');
      jQuery('#js-containerCalendly .container-event-a').removeClass('d-none');

    }

  });

  validationConfirmationScheduling();

  // --- END JAVASCRIPT FOR APPOINTMENT ---

});

const triggerListenerTabs = () => {
  const triggerTabList = document.querySelectorAll('#tabsMenuAustralia .nav-linkTab, #tabsMenuDubai .nav-linkTab, #tabsMenuDestination .nav-linkDestination')
  triggerTabList.forEach(triggerEl => {
    const tabTrigger = new bootstrap.Tab(triggerEl)
    triggerEl.addEventListener('click', event => {
      event.preventDefault();
      event.stopPropagation(); // Evita que el evento suba y cierre el dropdown
      tabTrigger.show();
    });
  })

  const accordionList = document.querySelectorAll('.accordion-button.nav-linkTab');
  accordionList.forEach(triggerAcc => {
    triggerAcc.addEventListener('click', event => {
      event.preventDefault();
      event.stopPropagation(); // Evita que el evento suba y cierre el dropdown
      // Encuentra el contenido del acordeón relacionado
      const accordionCollapse = triggerAcc.closest('.accordion-item').querySelector('.accordion-collapse');
      // Obtiene la instancia existente o crea una nueva
      let bsCollapse = bootstrap.Collapse.getInstance(accordionCollapse);
      if (bsCollapse) {
        bsCollapse.toggle(); // Alterna entre abrir y cerrar
      } else {
        new bootstrap.Collapse(accordionCollapse, { toggle: true });
      }
    });
  })

}

const calculatePointsMigration = () => {

  let valuesSelect = jQuery('#calculator_migration_form select.form-select').map((key,item)=>{
    if( jQuery(item).val() != '0' ){
      return Number(jQuery(item).val())
    }
  }); 

  let valuesInputsRadio = jQuery('#calculator_migration_form input.form-check-input:checked').map((key,item)=>{
    return Number(jQuery(item).val());
  }); 

  let argValues = [...valuesSelect, ...valuesInputsRadio];

  if(argValues.length>0){
    argValues = argValues.reduce(function(a, b){
      return a + b;
    });
  }

  jQuery('#js-totalCounterCalculator').html(argValues.toString());

}

const showNextQuestions = (element) => {
  jQuery(element).parents('.container-questions').next().removeClass('hideContainer');
}

const resetCalculator = () => {

  jQuery('#calculator_migration_form select').val(0).change();
  jQuery('#calculator_migration_form input').prop('checked', false)
  jQuery('#calculator_migration_form input').val(0).change();

  setTimeout(() => {
    jQuery('#js-totalCounterCalculator').html('0');
  }, 200);

  jQuery('.container-questions').addClass('hideContainer');

}

// --- 

const onBlurEmailVerification = ($event) => {

  if($($event).val().length>5 && $($event).attr('data-validateuser') == 'true' ){

    jQuery('#js-messageLoadingVerified').addClass('d-none');
    jQuery('#js-messageLoadingVerifying').removeClass('d-none');
    

    jQuery.ajax({
      url: 'https://ed.link/api/v2/my/profile', // url where to submit the request
      type: "GET", // type of action POST || GET
      dataType: 'json', // data type
      data: '', // post data || get data
      success: function(result) {
          // console.log(result);
          jQuery('#js-messageLoadingVerifying').addClass('d-none');
          jQuery('#js-messageLoadingVerified').removeClass('d-none');
          jQuery('#js-containerButtonNextStep').removeClass('d-none');
          jQuery('#js-containerButtonNextStep').addClass('d-flex');
      },
      error: function(xhr, resp, text) {
          console.log(xhr, resp, text);
          jQuery('#js-messageLoadingVerifying').addClass('d-none');
          jQuery('#js-messageLoadingVerified').removeClass('d-none');
          jQuery('#js-containerButtonNextStep').removeClass('d-none');
          jQuery('#js-containerButtonNextStep').addClass('d-flex');
      }
    });

  }else{
    jQuery('#js-messageLoadingVerifying, #js-messageLoadingVerified').addClass('d-none');
  }

}

const nextTab = (currentTab,targetTab) =>{
  $(targetTab).tab("show")
  jQuery(currentTab).addClass('verified');
}

const sendEmailsMigrationStep1Form = (idForm) => {
        
  let celular = funciones.intlTelInput();
  
  jQuery("#"+idForm).submit(function(event) {
      event.preventDefault();

      let data = jQuery("#"+idForm).serializeArray();
      let action = jQuery("#"+idForm).attr('action');
      let celular_final = celular.getNumber();

      data.forEach(function(item) {
          if (item.name === 'celular') {
              item.value = celular_final;
          }
      });

      jQuery('#'+idForm+' .loader').removeClass('d-none');
      jQuery.ajax({
          url: action, // url where to submit the request
          type: "POST", // type of action POST || GET
          dataType: 'json', // data type
          data: data, // post data || get data
          success: function(result) {
              setTimeout(function() {
                jQuery('#pills-verificarUsuario-tab').addClass('verified');
                $('#pills-calendly-tab').tab("show");
              }, 1000);
          },
          error: function(xhr, resp, text) {
              jQuery('#'+idForm+' .loader').addClass('d-none');
          }
      });
  });

}

const validationConfirmationScheduling = () => {

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const confirmationScheduling = urlParams.get('confirmationScheduling')
  // console.log(confirmationScheduling);

  if( confirmationScheduling == 'TRUE' ){
    
    const confirmationEvent = urlParams.get('event_type_name');
    const confirmationEventAssigned = urlParams.get('assigned_to');
    //
    const confirmationName = urlParams.get('invitee_full_name');
    const confirmationDateStart = urlParams.get('event_start_time');
    const confirmationDateEnd = urlParams.get('event_end_time');
    const confirmationEmail = urlParams.get('invitee_email');
    const confirmationObs = urlParams.get('answer_1')
    //
    jQuery('#js-confirmationEvento').html(decodeURIComponent(confirmationEvent));
    jQuery('#js-confirmationProfesional').html(decodeURIComponent(confirmationEventAssigned));
    //
    jQuery('#js-confirmationNombre').html(decodeURIComponent(confirmationName));
    jQuery('#js-confirmationFecha').html(new Date(decodeURIComponent(confirmationDateStart)).toLocaleString()+' - '+ new Date(decodeURIComponent(confirmationDateEnd)).toLocaleString());
    jQuery('#js-confirmationCorreo').html(decodeURIComponent(confirmationEmail));
    jQuery('#js-confirmationObs').html(decodeURIComponent(confirmationObs));
    
    
    jQuery('#pills-verificarUsuario-tab, #pills-calendly-tab').addClass('verified');
    $('#pills-calendlyConfirmation-tab').tab("show");


  }else{
    $('#pills-verificarUsuario-tab').tab("show");
  }

}

// http://latinadvisor.local.portal/migracion-agendar-cita.html?assigned_to=jonathan%20gallego%20londo%C3%B1o&event_type_uuid=a8d46300-a79a-429d-9d01-0317e8d7b8ad&event_type_name=CITA%20MIGRATORIA%20-%20LATINADVISOR%20GRUPO%20B&event_start_time=2023-03-02T13%3A00%3A00-05%3A00&event_end_time=2023-03-02T14%3A00%3A00-05%3A00&invitee_uuid=c26e1290-3afa-4534-8792-421a7dcb4d05&invitee_full_name=Jonathan%20Gallego&invitee_email=jonathan962_%40hotmail.com