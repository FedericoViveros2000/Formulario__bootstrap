import  validarCorreo from "./validacion.js";

document.addEventListener('DOMContentLoaded', e =>{

    const $emailInput = document.getElementById('email');
    
    const $alertaVacio = document.getElementById('alerta-vacio');
    const $alertaPass = document.getElementById('alerta-pass');
    
    const $btnSubmit = document.getElementById('submit');
    
    const $password = document.getElementById('pass');
    
    
    
    $btnSubmit.addEventListener('click', e=>{
    
        e.preventDefault();
    
    /* 
    TODO Para la validacion del correo */
    
        if ($emailInput.value === '') {
            
            $alertaVacio.classList.remove('d-none');
            
        }else{
    
            const correo = $emailInput.value;
    
            console.log(correo);
    
            validarCorreo(correo);
    
        }
    
        /* 
        
        TODO Para validar que exista una contrasenha */
        
        if($password.value === ''){
            
            $alertaPass.classList.remove('d-none');
    
        }
    
    })


   


})







