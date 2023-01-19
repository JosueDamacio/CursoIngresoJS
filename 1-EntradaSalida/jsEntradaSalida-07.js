/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/
function sumar() {
	let uno = (document.getElementById("txtIdNumeroUno").value);
	let dos = (document.getElementById("txtIdNumeroDos").value);
	let sumar;

	uno = parseFloat(uno);
	dos = parseFloat(dos);

	sumar = uno + dos;

	alert("la suma es " + sumar);


}

function restar() {
	let uno = (document.getElementById("txtIdNumeroUno").value);
	let dos = (document.getElementById("txtIdNumeroDos").value);
	let restar;

	uno = parseFloat(uno);
	dos = parseFloat(dos);

	restar = uno - dos;

	alert("la resta es " + restar);

}

function multiplicar() {

	let uno = (document.getElementById("txtIdNumeroUno").value);
	let dos = (document.getElementById("txtIdNumeroDos").value);
	let mult;

	uno = parseFloat(uno);
	dos = parseFloat(dos);

	mult = uno * dos;

	alert("la multiplicación es " + mult);

}

function dividir() {

	let uno = (document.getElementById("txtIdNumeroUno").value);
	let dos = (document.getElementById("txtIdNumeroDos").value);
	let divi;

	uno = parseFloat(uno);
	dos = parseFloat(dos);

	divi = uno / dos;

	alert("la divicion es " + divi);

}

/* no vi la explicación pero lo hice con un parseFloat para
 que admita tambien, por ejemplo 1 /3 o sumar numeros con ","*/
