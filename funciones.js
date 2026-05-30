const estado_foto = [
    "Imagenes/bombillo_apagado.png",
    "Imagenes/bombillo_rojo.png",
    "Imagenes/bombillo_amarillo.png",
    "Imagenes/bombillo_verde.png"
]
const estados_semaforo = ["APAGADO", "INTERMITENTE", "ENCENDIDO"]

let intervalo_intermitente = null
let intervalo_semaforo = null

let timeoutIds = []

function inicializar() {
    ["norte", "este", "sur", "oeste"].forEach(id => {
        document.getElementById(id).src = estado_foto[0]
    })
}

function norte_paso()  { document.getElementById("norte").src = estado_foto[3]; este_stop(); sur_stop(); oeste_stop() }
function norte_reduzca(){ document.getElementById("norte").src = estado_foto[2] }
function norte_stop()   { document.getElementById("norte").src = estado_foto[1] }

function este_paso()    { document.getElementById("este").src = estado_foto[3]; norte_stop(); sur_stop(); oeste_stop() }
function este_reduzca() { document.getElementById("este").src = estado_foto[2] }
function este_stop()    { document.getElementById("este").src = estado_foto[1] }

function sur_paso()     { document.getElementById("sur").src = estado_foto[3]; norte_stop(); este_stop(); oeste_stop() }
function sur_reduzca()  { document.getElementById("sur").src = estado_foto[2] }
function sur_stop()     { document.getElementById("sur").src = estado_foto[1] }

function oeste_paso()   { document.getElementById("oeste").src = estado_foto[3]; norte_stop(); este_stop(); sur_stop() }
function oeste_reduzca(){ document.getElementById("oeste").src = estado_foto[2] }
function oeste_stop()   { document.getElementById("oeste").src = estado_foto[1] }

function detener_tiempos() {
    timeoutIds.forEach(id => clearTimeout(id))
    timeoutIds = []
    clearInterval(intervalo_semaforo)
    clearInterval(intervalo_intermitente)
    intervalo_semaforo = null
    intervalo_intermitente = null
}

function recorrido_semaforo() {
    detener_tiempos()

    timeoutIds.push(setTimeout(norte_paso, 1000))
    timeoutIds.push(setTimeout(norte_reduzca, 4000))
    timeoutIds.push(setTimeout(norte_stop, 7000))

    timeoutIds.push(setTimeout(este_paso, 7500))
    timeoutIds.push(setTimeout(este_reduzca, 10000))
    timeoutIds.push(setTimeout(este_stop, 13000))

    timeoutIds.push(setTimeout(sur_paso, 13500))
    timeoutIds.push(setTimeout(sur_reduzca, 16000))
    timeoutIds.push(setTimeout(sur_stop, 19000))

    timeoutIds.push(setTimeout(oeste_paso, 19500))
    timeoutIds.push(setTimeout(oeste_reduzca, 22000))
    timeoutIds.push(setTimeout(oeste_stop, 25000))
}

function encender_semaforo() {
    document.getElementById("texto").textContent = estados_semaforo[2]
    detener_tiempos()
    inicializar()
    recorrido_semaforo()
    intervalo_semaforo = setInterval(recorrido_semaforo, 25500)
}

function encender_intermitente() {
    document.getElementById("texto").textContent = estados_semaforo[1]
    detener_tiempos()
    inicializar()
    intervalo_intermitente = setInterval(() => {
        const norte = document.getElementById("norte")
        const estaAmarillo = norte.src.includes("bombillo_amarillo")
        const src = estaAmarillo ? estado_foto[0] : estado_foto[2]
        ;["norte", "este", "sur", "oeste"].forEach(id => {
            document.getElementById(id).src = src
        })
    }, 800)
}

function apagar_semaforo() {
    document.getElementById("texto").textContent = estados_semaforo[0]
    detener_tiempos()
    inicializar()
}

document.getElementById("intermitente").addEventListener('click', encender_intermitente)
document.getElementById("apagar_semaforo").addEventListener('click', apagar_semaforo)
document.getElementById("encender_semaforo").addEventListener('click', encender_semaforo)
