/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar() {
	let uno;
	let dos;
	let resultado


	uno = document.getElementById("txtIdNumeroUno").value;
	dos = document.getElementById("txtIdNumeroDos").value;

	uno = parseInt(uno);
	dos = parseInt(dos);
	/*lo que hace el parseInt es filtrar el string dentro de
	"txtIdNumber" y tomar en ceunta solo los numeros enteros
	del 1 al 9 (sin decimales, en ese caso deberiamos usar el
		parseFloat)*/

	resultado = uno + dos


		alert("el resultado es "+ resultado);

	document.getElementById("txtIdNumeroUno").value = "";
	document.getElementById("txtIdNumeroDos").value = "";
}

