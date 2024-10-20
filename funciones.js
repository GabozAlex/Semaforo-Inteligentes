let estado_foto=[
	"Imagenes/bombillo_apagado.png","Imagenes/bombillo_rojo.png","Imagenes/bombillo_amarillo.png","Imagenes/bombillo_verde.png" ]
let estados_semaforo=["APAGADO","INTERMITENTE","ENCENDIDO"]

let on_intermitente=false
let off_intermitente=false

let on_semaforo =false
let off_semaforo =false

let intervalo_intermitente
let intervalo_semaforo

let intervalo_norte_paso
let intervalo_norte_reduzco
let intervalo_norte_stop

let intervalo_este_paso
let intervalo_este_reduzco
let intervalo_este_stop

let intervalo_sur_paso
let intervalo_sur_reduzco
let intervalo_sur_stop

let intervalo_oeste_paso
let intervalo_oeste_reduzco
let intervalo_oeste_stop

function inicializar(){
	document.getElementById("norte").src=estado_foto[0]
	document.getElementById("este").src=estado_foto[0]
	document.getElementById("sur").src=estado_foto[0]
	document.getElementById("oeste").src=estado_foto[0]
}

function norte_paso(){
	document.getElementById("norte").src=estado_foto[3]

	este_stop()
	sur_stop()
	oeste_stop()
}
function norte_reduzca(){
	document.getElementById("norte").src=estado_foto[2]
}
function norte_stop(){
	document.getElementById("norte").src=estado_foto[1]
}

function este_paso(){
	document.getElementById("este").src=estado_foto[3]

	norte_stop()
	sur_stop()
	oeste_stop()
}
function este_reduzca(){
	document.getElementById("este").src=estado_foto[2]
}
function este_stop(){
	document.getElementById("este").src=estado_foto[1]
}

function sur_paso(){
	document.getElementById("sur").src=estado_foto[3]

	norte_stop()
	este_stop()
	oeste_stop()
}
function sur_reduzca(){
	document.getElementById("sur").src=estado_foto[2]
}
function sur_stop(){
	document.getElementById("sur").src=estado_foto[1]
}

function oeste_paso(){
	document.getElementById("oeste").src=estado_foto[3]

	norte_stop()
	este_stop()
	sur_stop()
}
function oeste_reduzca(){
	document.getElementById("oeste").src=estado_foto[2]
}
function oeste_stop(){
	document.getElementById("oeste").src=estado_foto[1]
}

function recorrido_semaforo(){
	intervalo_norte_paso = setTimeout(norte_paso,1000)
	intervalo_norte_reduzco = setTimeout(norte_reduzca,4000)//3
	intervalo_norte_stop = setTimeout(norte_stop,7000)//3

	intervalo_este_paso = setTimeout(este_paso,7500)//0.5
	intervalo_este_reduzco = setTimeout(este_reduzca,10000)//3
	intervalo_este_stop = setTimeout(este_stop,13000)//3

	intervalo_sur_paso = setTimeout(sur_paso,13500)//0.5
	intervalo_sur_reduzco = setTimeout(sur_reduzca,16000)//3
	intervalo_sur_stop = setTimeout(sur_stop,19000)//3

	intervalo_oeste_paso = setTimeout(oeste_paso,19500)//0.5
	intervalo_oeste_reduzco = setTimeout(oeste_reduzca,22000)//3
	intervalo_oeste_stop =setTimeout(oeste_stop,25000)//3
}

function intermitente(){
	if(on_intermitente==false){
		on_intermitente=true
		document.getElementById("norte").src=estado_foto[2]
		document.getElementById("este").src=estado_foto[2]
		document.getElementById("sur").src=estado_foto[2]
		document.getElementById("oeste").src=estado_foto[2]		
	}else{
		on_intermitente=false
		document.getElementById("norte").src=estado_foto[0]
		document.getElementById("este").src=estado_foto[0]
		document.getElementById("sur").src=estado_foto[0]
		document.getElementById("oeste").src=estado_foto[0]		
	}
}

function detener_intervalos(){
	clearTimeout(intervalo_norte_paso)
	clearTimeout(intervalo_norte_reduzco)
	clearTimeout(intervalo_norte_stop)

	clearTimeout(intervalo_este_paso)
	clearTimeout(intervalo_este_reduzco)
	clearTimeout(intervalo_este_stop)

	clearTimeout(intervalo_sur_paso)
	clearTimeout(intervalo_sur_reduzco)
	clearTimeout(intervalo_sur_stop)

	clearTimeout(intervalo_oeste_paso)
	clearTimeout(intervalo_oeste_reduzco)
	clearTimeout(intervalo_oeste_stop)

	clearInterval(intervalo_intermitente)
	clearInterval(intervalo_semaforo)
}

function encender_semaforo(){
	document.getElementById("texto").textContent = estados_semaforo[2]
	inicializar()
	
	if(on_semaforo == false){
		on_semaforo =true
		detener_intervalos()
		recorrido_semaforo()
		intervalo_semaforo = setInterval(recorrido_semaforo,25500)
	}else{
		detener_intervalos()
		recorrido_semaforo()
		intervalo_semaforo = setInterval(recorrido_semaforo,25500)
	}
}

function encender_intermitente(){
	document.getElementById("texto").textContent = estados_semaforo[1]
	if(on_semaforo == true){
		detener_intervalos()
		intervalo_intermitente = setInterval(intermitente,1000)	
	}else{
		intervalo_intermitente = setInterval(intermitente,1000)
	}
	
}

function apagar_semaforo(){
	document.getElementById("texto").textContent = estados_semaforo[0]
	inicializar()
	detener_intervalos()
}

document.getElementById("intermitente").addEventListener('click', encender_intermitente)
document.getElementById("apagar_semaforo").addEventListener('click', apagar_semaforo)
document.getElementById("encender_semaforo").addEventListener('click', encender_semaforo)