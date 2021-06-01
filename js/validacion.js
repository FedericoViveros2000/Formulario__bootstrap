export default function validarCorreo (correo) {

    let $alertaInvalid = document.getElementById('alerta-invalido');

    let expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

    let esValido = expReg.test(correo);
    
    if (esValido == true) {
        
        location.href = './respuesta.html';
        
    }else{
        
        $alertaInvalid.classList.remove('d-none');

    }

  

}

