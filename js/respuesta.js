import validarFormulario from "./validar.js";

const $btnSubmit = document.getElementById('btn__enviar');
const $name = document.getElementById('name');
const $lastName = document.getElementById('lastName');
const $country = document.getElementById('country');

const $alertName = document.getElementById('alerta-nombre');

const $alertLastName = document.getElementById('alerta-apellido');

const $alertCountry = document.getElementById('alerta-pais');


/* 
    TODO Alertas de validaciones
*/



$btnSubmit.addEventListener('click', e => {

    e.preventDefault();

    if ($name.value === '' && $lastName.value === '' && $country.value === '') {

        $alertName.classList.remove('d-none');


        $alertLastName.classList.remove('d-none');

        $alertCountry.classList.remove('d-none');

    } else if ($name.value === '' && $lastName.value === '') {

        $alertName.classList.remove('d-none');


        $alertLastName.classList.remove('d-none');

    } else if ($name.value === '' && $country.value === '') {

        $alertName.classList.remove('d-none');

        $alertCountry.classList.remove('d-none');


    } else if ($lastName.value === '' && $country.value === '') {

        $alertLastName.classList.remove('d-none');

        $alertCountry.classList.remove('d-none');

    } else {

        validarFormulario($name.value, $lastName.value, $country.value);

    }



})