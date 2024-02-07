let ataqueJugador
let ataqueEnemigo
let resultado
let vidasJugador=3
let vidasEnemigo=3





function iniciarJuego(){
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    let botonFuego= document.getElementById("boton-fuego")
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById("boton-agua")
    botonAgua.addEventListener('click', ataqueAgua)
    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.addEventListener('click', ataqueTierra)

}

function seleccionarMascotaJugador() {

    let jugar=1
    let inputHipodoge =document.getElementById("Hipodoge")
    let inputCapipepo = document.getElementById("Capipepo")
    let inputRatigueya =  document.getElementById("Ratigueya")
    let spanMascotaJugador = document.getElementById("mascota-jugador")
    
    if (inputHipodoge.checked){
        spanMascotaJugador.innerHTML = "Hipodoge"
    }
    else if (inputCapipepo.checked){
        spanMascotaJugador.innerHTML = "Capipepo"
    }
    else if(inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = "Ratigueya"
    }
    else {
        alert("SELECCIONA UN MOKEPÓN")
        jugar=0
    }
    
    if(jugar==1) {
        seleccionarMascotaEnemigo()
        
    }
}

function seleccionarMascotaEnemigo() {
    let mascotaAleatoria = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById("mascota-enemigo")

    if(mascotaAleatoria==1){
        spanMascotaEnemigo.innerHTML="Hipodoge"
    }
    else if(mascotaAleatoria==2){
        spanMascotaEnemigo.innerHTML ="Capipepo"
    }
    else {
        spanMascotaEnemigo.innerHTML = "Ratigueya"
    }

}

function seleccionarAtaqueEnemigo() {
    let ataqueAleatorio=aleatorio(1,3)
    

    if(ataqueAleatorio==1){
        ataqueEnemigo="FUEGO"
    }
    else if(ataqueAleatorio==2){
        ataqueEnemigo="AGUA"
    }
    else {
        ataqueEnemigo ="TIERRA"
    }

    combate()
}

function combate(){

    let spanVidasJugador=document.getElementById("vidas-jugador")
    let spanVidasEnemigo=document.getElementById("vidas-enemigo")

    if(ataqueJugador==ataqueEnemigo){
           resultado="EMPATE"
    }
    else if( (ataqueJugador=="FUEGO" && ataqueEnemigo=="TIERRA") || (ataqueJugador=="AGUA" && ataqueEnemigo=="FUEGO") || (ataqueJugador=="TIERRA" && ataqueEnemigo=="AGUA")){
           resultado="GANASTE"
           vidasEnemigo--
           spanVidasEnemigo.innerHTML=vidasEnemigo
    }
    else {
           resultado="PERDISTE"
           vidasJugador--
           spanVidasJugador.innerHTML=vidasJugador
    }


    crearMensaje()

}



function crearMensaje(){
    let seccionMensajes = document.getElementById("mensajes")
    let parrafo = document.createElement("p")
    parrafo.innerHTML = "Tu mascota atacó con " + ataqueJugador + " , la mascota del enemigo atacó con " + ataqueEnemigo + ", " + resultado

    seccionMensajes.appendChild(parrafo)
}

function ataqueFuego(){
    ataqueJugador="FUEGO"
    seleccionarAtaqueEnemigo()
}
function ataqueAgua(){
    ataqueJugador="AGUA"
    seleccionarAtaqueEnemigo()


}
function ataqueTierra(){
    ataqueJugador="TIERRA"
    seleccionarAtaqueEnemigo()
}

function aleatorio(min,max){
    return Math.floor(Math.random() * (max-min+1) + min)
}



window.addEventListener('load', iniciarJuego)