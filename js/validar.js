export default function validarFormulario(name, lastName, country) {

    const $alertName = document.getElementById('alerta-nombre');
    const $alertNameInvalid = document.getElementById('alerta-nombre2');
    const $alertLastName = document.getElementById('alerta-apellido');
    const $alertLastNameInvalid = document.getElementById('alerta-apellido2');
    const $alertCountry = document.getElementById('alerta-pais');
    const $alertCountryInvalid = document.getElementById('alerta-pais2');

    /*
        TODO Para Validar el NOMBRE
    */
   

    if (name.value === '') {

        $alertName.classList.remove('d-none');


    }else if (!typeof name === 'string') {

        $alertNameInvalid.classList.remove('d-none');
        
    }else if (lastName.value === '') {

        $alertLastName.classList.remove('d-none');

    }else if (!typeof lastName.value === 'string') {

        $alertLastNameInvalid.classList.remove('d-none');

    }else if (country.value === '') {

        $alertCountry.classList.remove('d-none');

    } else if (!typeof country === 'string') {

        $alertCountryInvalid.classList.remove('d-none');


    }

    /* 
        TODO Para validar el APELLIDO
    */

   


    /* 
        TODO Para validar el PAIS
    */

  





}