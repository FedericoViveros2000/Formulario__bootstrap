import validarFormulario from "./validar.js";

const $btnSubmit = document.getElementById('btn__enviar');
const $name = document.getElementById('name').value;
const $lastName = document.getElementById('lastName').value;
const $country = document.getElementById('country').value;

/* 
    TODO Alertas de validaciones
*/



$btnSubmit.addEventListener('click', e=>{

    e.preventDefault();

   
    validarFormulario($name, $lastName, $country);

})


