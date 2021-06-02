export default function validarFormulario(name, lastName, country) {

    const $alertNameInvalid = document.getElementById('alerta-nombre2');
    const $alertLastNameInvalid = document.getElementById('alerta-apellido2');
    const $alertCountryInvalid = document.getElementById('alerta-pais2');

    /*
        TODO Para Validar el NOMBRE
    */
    let esValido;

    const expReg = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g;


    esValido = expReg.test(name);


    if (esValido == false) {

        $alertNameInvalid.classList.remove('d-none');

        esValido = expReg.test(lastName);

        if (esValido == false) {

            $alertLastNameInvalid.classList.remove('d-none');

            esValido = expReg.test(country);


            if (esValido == false) {

                $alertCountryInvalid.classList.remove('d-none');


            }
        }
    } else {

        let myModal = document.getElementById('btn__enviar')

        
        myModal.addEventListener('click', function () {


            myModal.setAttribute('data-bs-target', '#modal-show');

            
        })
        
    }



}