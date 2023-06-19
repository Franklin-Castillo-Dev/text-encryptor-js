document.querySelector('#buttonEncrypt').addEventListener('click', textEncrypt);
document.querySelector('#buttonDecrypt').addEventListener('click', textDecrypt);
document.querySelector('#buttonCopy').addEventListener('click', copiarPortapapeles);


// Funcion para encriptar texto
function textEncrypt(){

    // Traer input del texto    
    let textInput = document.querySelector('#textInput');
    let textResult = document.querySelector('#textResult');
    textResult.value = "";


    // si el input viene vacio
    if(textInput.value == ""){

        // mostrar imagen
        removeInvisible('.image-container');
        setInvisible('#textResult');

        return;
    }

    // si no hay solo minusculas
    if(!validateString(textInput.value)){
        
        //Mostrar imagen
        removeInvisible('.image-container');
        setInvisible('#textResult');

        //mostrar error
        removeInvisible('.alert-container');        
        return;
    }
    
    // ocultar alerta
    setInvisible('.alert-container');

    // ocultamos imagen
    setInvisible('.image-container');

    // Mostramos input resultado
    removeInvisible('#textResult');

    
    // Mostramos resultado
    textResult.value = Encrypt(textInput.value);

    // Borramos texto del input
    textInput.value = "";    

}

function textDecrypt(){

    // Traer input del texto    
    let textInput = document.querySelector('#textInput');
    let textResult = document.querySelector('#textResult');
    textResult.value = "";

    // si el input viene vacio
    if(textInput.value == ""){
        // mostrar imagen
        removeInvisible('.image-container');    
        setInvisible('#textResult');       

        return;
    }

    // si no hay solo minusculas
    if(!validateString(textInput.value)){
        
        //Mostrar imagen
        removeInvisible('.image-container');
        setInvisible('#textResult');

        //mostrar error
        removeInvisible('.alert-container');        
        return;
    }
    
    // ocultar alerta
    setInvisible('.alert-container');

    // ocultamos imagen
    setInvisible('.image-container');

    // Mostramos input resultado
    removeInvisible('#textResult');

    
    // Mostramos resultado
    textResult.value = Decrypt(textInput.value);

    // Borramos texto del input
    textInput.value = "";

}

// valida que el input venga solo con minusculas
function validateString(textInput){
    var regex = /^[a-z\s]+$/;

  if (regex.test(textInput)) {
    // El string solo contiene letras minúsculas    
    return true;
  } else {    
    return false;
  }  

}


// encripta el texto
function Encrypt(textInput){
    let textoEncriptado = textInput.replace(/e/g, "enter")
                                    .replace(/i/g, "imes")
                                    .replace(/a/g, "ai")
                                    .replace(/o/g, "ober")
                                    .replace(/u/g, "ufat");

    return textoEncriptado;
}

// desencripta el texto
function Decrypt(textInput){
    let textoEncriptado = textInput.replace(/enter/g, "e")
                                    .replace(/imes/g, "i")
                                    .replace(/ai/g, "a")
                                    .replace(/ober/g, "o")
                                    .replace(/ufat/g, "u");

    return textoEncriptado;
}

// hace invisible un elemento por su referencia
function setInvisible(elementReference){
    document.querySelector(elementReference).setAttribute("hidden", "");
}

// remueve el invisible a un elemento por referencia
function removeInvisible(elementReference){
    document.querySelector(elementReference).removeAttribute("hidden");
}

// copia al portapapeles el resultado
function copiarPortapapeles(){    

    let textoACopiar = document.querySelector('#textResult');

    if(textoACopiar.value == ""){
        return;
    }    

    navigator.clipboard.writeText(textoACopiar.value)
    .then(function() {
      alert("Texto copiado al portapapeles");
    })
    .catch(function(error) {
      console.error("Error al copiar el texto: ", error);
    });

}