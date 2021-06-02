export default function validarFormulario(name, lastName, country) {

    /* Variables de las alertas */

    const $alertNameInvalid = document.getElementById('alerta-nombre2');
    const $alertLastNameInvalid = document.getElementById('alerta-apellido2');
    const $alertCountryInvalid = document.getElementById('alerta-pais2');


    let esValido;
    
    /* 
    TODO Expresion regular para solo permitir letras */

    const expReg = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g;
    
    
        /*
            TODO Para Validar que el nombre solo tenga caracteres
        */

    esValido = expReg.test(name);


    if (esValido == false) {

        $alertNameInvalid.classList.remove('d-none');

        esValido = expReg.test(lastName);

        /*
            TODO Para Validar que el apellido solo tenga caracteres
        */

        if (esValido == false) {

            $alertLastNameInvalid.classList.remove('d-none');

            esValido = expReg.test(country);
        /*
            TODO Para Validar que el pais solo tenga caracteres
        */

            if (esValido == false) {

                $alertCountryInvalid.classList.remove('d-none');

            }

        }

    } else {

        /* 
            TODO En caso de que se cumplan todas las condiciones se despliega la ventana modal
        */
        let myModal = document.getElementById('btn__enviar')

        
        myModal.addEventListener('click', function () {


            myModal.setAttribute('data-bs-target', '#modal-show');

            
        })
        
    }



}