let colores = ["red", "yellow", "green", "blue", "gray"]
let estados = ["APAGADO", "INTERMITENTE" , "ENCENDIDO"]

let on_intermitente = false

let intervalo_intermitente
let intervalo_recorrido

let intervalo_norte_paso
let intervalo_norte_reduzca
let intervalo_norte_stop

let intervalo_este_paso
let intervalo_este_reduzca
let intervalo_este_stop

let intervalo_sur_paso
let intervalo_sur_reduzca
let intervalo_sur_stop

let intervalo_oeste_paso
let intervalo_oeste_reduzca
let intervalo_oeste_stop

function inicializar_semaforo(){
	document.getElementById("rojo").style.background = colores[4]
	document.getElementById("amarillo").style.background = colores[4]
	document.getElementById("verde").style.background = colores[4]
	document.getElementById("naranja").style.background = colores[4]
	document.getElementById("azul").style.background = colores[4]

	document.getElementById("rojo1").style.background = colores[4]
	document.getElementById("amarillo1").style.background = colores[4]
	document.getElementById("verde1").style.background = colores[4]
	document.getElementById("naranja1").style.background = colores[4]
	document.getElementById("azul1").style.background = colores[4]

	document.getElementById("rojo2").style.background = colores[4]
	document.getElementById("amarillo2").style.background = colores[4]
	document.getElementById("verde2").style.background = colores[4]
	document.getElementById("naranja2").style.background = colores[4]
	document.getElementById("azul2").style.background = colores[4]

	document.getElementById("rojo3").style.background = colores[4]
	document.getElementById("amarillo3").style.background = colores[4]
	document.getElementById("verde3").style.background = colores[4]
	document.getElementById("naranja3").style.background = colores[4]
	document.getElementById("azul3").style.background = colores[4]
}

function intermitente(){

	if(on_intermitente==false){
		document.getElementById("amarillo").style.background = colores[1]
		document.getElementById("amarillo1").style.background = colores[1]
		document.getElementById("amarillo2").style.background = colores[1]
		document.getElementById("amarillo3").style.background = colores[1]
		document.getElementById("amarillo3").style.background = colores[1]
		on_intermitente=true	
	}else{
		document.getElementById("amarillo").style.background = colores[4]
		document.getElementById("amarillo1").style.background = colores[4]
		document.getElementById("amarillo2").style.background = colores[4]
		document.getElementById("amarillo3").style.background = colores[4]
		document.getElementById("amarillo3").style.background = colores[4]
		on_intermitente=false
	}
	
}

function encender_intermitente(){
	inicializar_semaforo()
	detener_intervalos()

	intervalo_intermitente = setInterval(intermitente,1000)
	document.getElementById('texto').textContent=estados[1]
}

function apagar_semaforo(){
	inicializar_semaforo()
	detener_intervalos()
	document.getElementById('texto').textContent=estados[0]	
}

function norte_paso(){
	document.getElementById("rojo").style.background = colores[4]
	document.getElementById("amarillo").style.background = colores[4]
	document.getElementById("verde").style.background = colores[2]
	document.getElementById("azul").style.background = colores[4]

	este_stop()
	sur_stop()
	oeste_stop()
}

function norte_reduzca(){
	document.getElementById("amarillo").style.background = colores[1]
	document.getElementById("verde").style.background = colores[4]
}

function norte_stop(){
	document.getElementById("rojo").style.background = colores[0]
	document.getElementById("amarillo").style.background = colores[4]
}

function este_paso(){
	document.getElementById("rojo1").style.background = colores[4]
	document.getElementById("amarillo1").style.background = colores[4]
	document.getElementById("verde1").style.background = colores[2]
	document.getElementById("azul1").style.background = colores[4]

	norte_stop()
	sur_stop()
	oeste_stop()
}

function este_reduzca(){
	document.getElementById("amarillo1").style.background = colores[1]
	document.getElementById("verde1").style.background = colores[4]
}

function este_stop(){
	document.getElementById("rojo1").style.background = colores[0]
	document.getElementById("amarillo1").style.background = colores[4]
}

function sur_paso(){
	document.getElementById("rojo2").style.background = colores[4]
	document.getElementById("amarillo2").style.background = colores[4]
	document.getElementById("verde2").style.background = colores[2]
	document.getElementById("azul2").style.background = colores[4]

	norte_stop()
	este_stop()
	oeste_stop()
}

function sur_reduzca(){
	document.getElementById("amarillo2").style.background = colores[1]
	document.getElementById("verde2").style.background = colores[4]
}

function sur_stop(){
	document.getElementById("rojo2").style.background = colores[0]
	document.getElementById("amarillo2").style.background = colores[4]
}

function oeste_paso(){
	document.getElementById("rojo3").style.background = colores[4]
	document.getElementById("amarillo3").style.background = colores[4]
	document.getElementById("verde3").style.background = colores[2]
	document.getElementById("azul3").style.background = colores[4]

	norte_stop()
	este_stop()
	sur_stop()
}

function oeste_reduzca(){
	document.getElementById("amarillo3").style.background = colores[1]
	document.getElementById("verde3").style.background = colores[4]
}

function oeste_stop(){
	document.getElementById("rojo3").style.background = colores[0]
	document.getElementById("amarillo3").style.background = colores[4]
}



function recorrido_semaforo(){
	intervalo_norte_paso =setTimeout(norte_paso,1000)
	intervalo_norte_reduzca =setTimeout(norte_reduzca,4000)
	intervalo_norte_stop =setTimeout(norte_stop,7000)

	intervalo_este_paso =setTimeout(este_paso,10000)
	intervalo_este_reduzca =setTimeout(este_reduzca,13000)
	intervalo_este_stop =setTimeout(este_stop,16000)

	intervalo_sur_paso =setTimeout(sur_paso,19000)
	intervalo_sur_reduzca =setTimeout(sur_reduzca,22000)
	intervalo_sur_stop =setTimeout(sur_stop,25000)

	intervalo_oeste_paso =setTimeout(oeste_paso,28000)
	intervalo_oeste_reduzca =setTimeout(oeste_reduzca,31000)
	intervalo_oeste_stop =setTimeout(oeste_stop,34000)
}

function encender_semaforo(){

	detener_intervalos()
	inicializar_semaforo()
	recorrido_semaforo()

	intervalo_recorrido=setInterval(recorrido_semaforo,33000)

	document.getElementById('texto').textContent=estados[2]
}

function detener_intervalos(){
	clearTimeout(intervalo_norte_paso)
	clearTimeout(intervalo_norte_reduzca)
	clearTimeout(intervalo_norte_stop)

	clearTimeout(intervalo_este_paso)
	clearTimeout(intervalo_este_reduzca)
	clearTimeout(intervalo_este_stop)

	clearTimeout(intervalo_sur_paso)
	clearTimeout(intervalo_sur_reduzca)
	clearTimeout(intervalo_sur_stop)

	clearTimeout(intervalo_oeste_paso)
	clearTimeout(intervalo_oeste_reduzca)
	clearTimeout(intervalo_oeste_stop)

	clearInterval(intervalo_intermitente)
	clearInterval(intervalo_recorrido)

}

document.getElementById("intermitente").addEventListener('click', encender_intermitente)
document.getElementById("apagar_semaforo").addEventListener('click', apagar_semaforo)
document.getElementById("encender_semaforo").addEventListener('click', encender_semaforo)