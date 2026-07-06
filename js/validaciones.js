export function validarFormulario(formulario,boton) {
    const formularioElemet = document.querySelector(formulario);
    const botonElement = document.querySelector(boton);
    if (formularioElemet.checkValidity()) {
        botonElement.removeAttribute('disabled'); 
        return true;
    } else {
        botonElement.setAttribute('disabled', 'true'); 
        return false;
    }
}