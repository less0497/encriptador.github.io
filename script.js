

const textEnter = document.querySelector(".textAreaInput");
const textEncriptado = document.querySelector(".inputAnswer");
const copy = document.querySelector(".btncopy")

const dissapImg= document.querySelector(".img")
const dissapText= document.querySelector(".textNingun")
const dissapTex2= document.querySelector(".text")

function onOff(){
    dissapImg.classList.add("inactive")
    dissapText.classList.add("inactive")
    dissapTex2.classList.add("inactive")
    textEncriptado.classList.remove("inactive")
    copy.classList.remove("inactive")
}
function btnEncriptarText(){
    const textAnswer = textEnter.value.toLowerCase();
    if (textAnswer.match(/[^[a-z\s*]/ig)) {
        alert("Ingresar Texto SIN TILDE O CARACTERES ESPECIALES")
    }else{
        textEncriptado.value = textAnswer.replace(/[e|E]/g ,"enter")
        .replace(/[o|O]/g ,"ober")
        .replace(/[i|I]/g ,"imes")
        .replace(/[a|A]/g ,"ai")
        .replace(/[u|U]/g ,"ufat");
    }
    onOff();
}


function btnDesencriptarText(){
    onOff();
    const textAnswer = textEnter.value.toLowerCase();
    if (textAnswer.match(/[^[a-z\s*]/ig)) {
        alert("Ingresar Texto SIN TILDE O CARACTERES ESPECIALES")
    }if(textAnswer.match(/(^$)/ig) ){
        alert("Campo Encriptar vacio")
    }else{
        textEncriptado.value = textAnswer
        .replaceAll("enter","e")
        .replaceAll("ober","o" )
        .replaceAll("imes", "i")
        .replaceAll("ai", "a" )
        .replaceAll("ufat", "u" );
    }
    
}

function btnCopyText(){
    textEncriptado.select()
    navigator.clipboard.writeText(textEncriptado.value)
}









