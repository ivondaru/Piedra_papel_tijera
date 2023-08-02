//Capturar los elementos del DOM para las opciones piedra, papel y tijera
let botonPiedra = document.querySelector(".piedra")
let botonPapel = document.querySelector(".papel")
let botonTijera = document.querySelector(".tijera")

//Capturar los elementos del DOM para el tablero de opciones elegidos por el usuario-compu
let manoUsuario = document.querySelector(".mano-usuario")
let manoCompu = document.querySelector(".mano-computador")

let puntajeUsuario = document.querySelector(".puntaje-usuario")
let puntajeComputador = document.querySelector(".puntaje-computador")

let labelResultado = document.querySelector(".resultado")

let tablero = document.querySelector(".tablero")

let eleccionesUsuario = ""
let eleccionesCompu = ""

let contUsuario = 0
let contCompu = 0

const swalInicio = () => {
    swal.fire (
        '¿Jugamos?',
        'Gana el primero que alcance los 3 puntos',
        'question'
    )
}
swalInicio();

botonPiedra.onclick = () => {
    manoUsuario.src = "./assets/piedra_user.png"
    labelResultado.textContent = "..."
    tablero.classList.add("jugando")
    setTimeout (() => {
        eleccionesUsuario = "piedra"
        manoUsuario.src = "./assets/piedra_user.png"
        eleccionComputador();
        resultado();
    }, 2000)
}

botonTijera.onclick = () => {
    manoUsuario.src = "./assets/tijera_user.png"
    labelResultado.textContent = "..."
    tablero.classList.add("jugando")
    setTimeout(() => {
        eleccionesUsuario = "tijera"
        manoUsuario.src = "./assets/tijera_user.png"
        eleccionComputador();
        resultado();
        tablero.classList.add("jugando")
    }, 2000)   
}

botonPapel.onclick = () => {
    manoUsuario.src = "./assets/papel_user.png"
    labelResultado.textContent = "..."
    tablero.classList.add("jugando")
    setTimeout(() => {
        eleccionesUsuario = "papel"
        manoUsuario.src = "./assets/papel_user.png"
        eleccionComputador();
        resultado();
        tablero.classList.add("jugando")
    }, 2000)
}

const resultado = () => {
    if(eleccionesUsuario == "tijera" && eleccionesCompu == "papel"){
        labelResultado.textContent = "ganaste"
        contUsuario++
    }else if(eleccionesUsuario == "piedra" && eleccionesCompu == "tijera"){
        labelResultado.textContent = "ganaste"
        contUsuario++
    }else if(eleccionesUsuario == "papel" && eleccionesCompu == "piedra"){
        labelResultado.textContent = "ganaste"
        contUsuario++
    }else if(eleccionesUsuario == eleccionesCompu){
        labelResultado.textContent = "empate"
    }else{
        labelResultado.textContent = "perdiste"
        contCompu++
    }
    puntajeUsuario.textContent = contUsuario
    puntajeComputador.textContent = contCompu
}

const eleccionComputador = () => {
    let opcionAlAzar = Math.floor(Math.random()*3)
    if(opcionAlAzar == 1){
        manoCompu.src = "./assets/piedra_computador.png"
        eleccionesCompu = "piedra"
    }
    else if(opcionAlAzar == 2){
        manoCompu.src = "./assets/papel_computador.png"
        eleccionesCompu = "papel"
    }
    else
    {
        manoCompu.src = "./assets/tijera_computador.png"
        eleccionesCompu = "tijera"
    }
}
const swalGanador = () => {
    swal.fire (
        'Ganador'
    )
}

const ganador = (puntajeUsuario, puntajeComputador) => {
    if(puntajeUsuario >= 3 && puntajeUsuario > puntajeComputador){
        setTimeout(()=>{

        },2000)
        swalGanador()
    }
    else if(puntajeComputador >= 3 && puntajeComputador > puntajeUsuario){
        setTimeout(()=>{

        },2000)
        swalGanador()
    }
}