export default function validarCorreo (correo) {
    
    let expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

    let esValido = expReg.test(correo);
    
    if (esValido == false) {
        $alertaInvalid.classList.remove('d-none');
    }else{
        location.href = './respuesta.html';

    }

  

}