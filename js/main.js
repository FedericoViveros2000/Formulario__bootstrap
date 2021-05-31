const $emailInput = document.getElementById('email');

const $alertaVacio = document.getElementById('alerta-vacio');
const $alertaInvalid = document.getElementById('alerta-invalido');
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

        validarCorreo($emailInput.value);

    }

    /* 
    
    TODO Para validar que exista una contrasenha */

    if($password.value === ''){

        $alertaPass.classList.remove('d-none');
    }

})

function validarCorreo (correo) {
    
    let expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

    let esValido = expReg.test(correo);
    
    if (esValido == true) {
        
        location.href = './respuesta.html';
        
    }else{
        
        $alertaInvalid.classList.remove('d-none');


    }

  

}


