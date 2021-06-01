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
        const expReg = /^\s+$/;

        let esValido;

    esValido = expReg.test(name);


    if (name.value === '') {

        $alertName.classList.remove('d-none');


    }else if (esValido == false) {

        $alertNameInvalid.classList.remove('d-none');
        
    }
    
    esValido = expReg.test(lastName);

    if (lastName.value === '') {

        $alertLastName.classList.remove('d-none');

    }else if (esValido == false) {

        $alertLastNameInvalid.classList.remove('d-none');

    }
    
    esValido = expReg.test(country);

    
    if (country.value === '') {

        $alertCountry.classList.remove('d-none');

    } else if (esValido == false) {

        $alertCountryInvalid.classList.remove('d-none');


    }

    /* 
        TODO Para validar el APELLIDO
    */

   


    /* 
        TODO Para validar el PAIS
    */

  





}