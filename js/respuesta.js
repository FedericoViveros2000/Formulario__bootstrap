import validarFormulario from "./validar.js";

const $btnSubmit = document.getElementById('btn__enviar');
const $name = document.getElementById('name');
const $lastName = document.getElementById('lastName');
const $country = document.getElementById('country');

/* 
    TODO Alertas de validaciones
*/



$btnSubmit.addEventListener('click', e=>{

    e.preventDefault();

   
    validarFormulario($name, $lastName, $country);

})


