const sectionSeleccionarAtaque= document.getElementById("seleccionar-ataque")
const sectionReiniciar = document.getElementById('reiniciar')
const botonMascotaJugador = document.getElementById('boton-mascota')
const botonFuego= document.getElementById("boton-fuego")
const botonAgua = document.getElementById("boton-agua")
const botonTierra = document.getElementById("boton-tierra")
const botonReiniciar= document.getElementById("boton-reiniciar")

const sectionSeleccionarMascota= document.getElementById("seleccionar-mascota")
const inputHipodoge =document.getElementById("Hipodoge")
const inputCapipepo = document.getElementById("Capipepo")
const inputRatigueya =  document.getElementById("Ratigueya")

const spanMascotaJugador = document.getElementById("mascota-jugador")
const spanMascotaEnemigo = document.getElementById("mascota-enemigo")

const spanVidasJugador=document.getElementById("vidas-jugador")
const spanVidasEnemigo=document.getElementById("vidas-enemigo")

const seccionMensajes = document.getElementById("resultado")
const ataquesDelJugador = document.getElementById("ataques-del-jugador")
const ataquesDelEnemigo = document.getElementById("ataques-del-enemigo")
const contenedorTarjetas = document.getElementById("contenedorTarjetas")



let mokepones = []
let ataqueJugador
let ataqueEnemigo
let opcionDeMokepones
let resultado
let resultadoFinal
let vidasJugador=3
let vidasEnemigo=3


class Mokepon {
    constructor(nombre , foto , vida) {
        this.nombre = nombre;
        this.foto = foto;
        this.vida= vida;
        this.ataques = []

    }
}

let hipodoge = new Mokepon("Hipodoge","img/Hipodoge.png",5);

let capipepo = new Mokepon("Capipepo","img/Capipepo.png", 5);

let ratigueya = new Mokepon("Ratigueya", "img/Ratigueya.png" , 5)


hipodoge.ataques.push(
    {nombre: "💧" , id : "boton-agua"} ,
    {nombre: "💧" , id : "boton-agua"} ,
    {nombre: "💧" , id : "boton-agua"} ,
    {nombre: "🌱" , id : "boton-tierra"} ,
    {nombre: "🔥" , id : "boton-fuego"}
)

capipepo.ataques.push(
    {nombre: "🌱" , id : "boton-tierra"} ,
    {nombre: "🌱" , id : "boton-tierra"} ,
    {nombre: "🌱" , id : "boton-tierra"} ,
    {nombre: "💧" , id : "boton-agua"} ,
    {nombre: "🔥" , id : "boton-fuego"}
)

ratigueya.ataques.push(
    {nombre: "🔥" , id : "boton-fuego"},
    {nombre: "🔥" , id : "boton-fuego"},
    {nombre: "🔥" , id : "boton-fuego"},
    {nombre: "💧" , id : "boton-agua"} ,
    {nombre: "🌱" , id : "boton-tierra"} ,
    
)

mokepones.push(hipodoge,capipepo,ratigueya)



function iniciarJuego(){

    
    sectionSeleccionarAtaque.style.display ='none'
    sectionReiniciar.style.display = 'none'

    mokepones.forEach((Mokepon) => {
        opcionDeMokepones = `
        <input type="radio" name="mascota" id=${Mokepon.nombre}/>
                <label class="tarjeta-de-mokepon" for=${Mokepon.nombre}>
                    <p>${Mokepon.nombre}</p>
                    <img src=${Mokepon.foto} 
                    alt=${Mokepon.nombre}> 
        </label> 
        `
        contenedorTarjetas.innerHTML += opcionDeMokepones

    })
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
    botonFuego.addEventListener('click', ataqueFuego)
    botonAgua.addEventListener('click', ataqueAgua)
    botonTierra.addEventListener('click', ataqueTierra)
    botonReiniciar.addEventListener('click', reiniciarJuego)

}

function seleccionarMascotaJugador() {

    
    sectionSeleccionarMascota.style.display ='none'
    sectionSeleccionarAtaque.style.display ='flex'

    let jugar=true
    
    
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
        reiniciarJuego()
        jugar=false
    }
    
    if(jugar==true) {
        seleccionarMascotaEnemigo()
    }
}

function seleccionarMascotaEnemigo() {
    let mascotaAleatoria = aleatorio(1,3)
    

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
        ataqueEnemigo="🔥"
    }
    else if(ataqueAleatorio==2){
        ataqueEnemigo="💧"
    }
    else {
        ataqueEnemigo ="🌱"
    }

    combate()
}

function combate(){

    
    if(ataqueJugador==ataqueEnemigo){
           resultado="EMPATE"
    }
    else if( (ataqueJugador=="🔥" && ataqueEnemigo=="🌱") || (ataqueJugador=="💧" && ataqueEnemigo=="🔥") || (ataqueJugador=="🌱" && ataqueEnemigo=="💧")){
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
    revisarVidas()

}

function revisarVidas(){
    if(vidasEnemigo==0){
        resultadoFinal="FELICITACIONES! HAS GANADO 🎉"
        crearMensajeFinal()
    }
    else if(vidasJugador==0){
        resultadoFinal="PERDISTE, SIGUE INTENTÁNDOLO 😢"
        crearMensajeFinal()
    }

}



function crearMensaje(){
    

    let nuevoAtaqueDelJugador = document.createElement("p")
    let nuevoAtaqueDelEnemigo = document.createElement("p")

    seccionMensajes.innerHTML=resultado
    nuevoAtaqueDelJugador.innerHTML=ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML=ataqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}
function crearMensajeFinal(){

    
    sectionReiniciar.style.display = 'block'
    seccionMensajes.innerHTML= resultadoFinal
    botonFuego.disabled = true
    botonAgua.disabled = true
    botonTierra.disabled=true


}

function ataqueFuego(){
    ataqueJugador="🔥"
    seleccionarAtaqueEnemigo()
}
function ataqueAgua(){
    ataqueJugador="💧"
    seleccionarAtaqueEnemigo()


}
function ataqueTierra(){
    ataqueJugador="🌱"
    seleccionarAtaqueEnemigo()
}


function reiniciarJuego(){
    location.reload()
}

function aleatorio(min,max){
    return Math.floor(Math.random() * (max-min+1) + min)
}



window.addEventListener('load', iniciarJuego)