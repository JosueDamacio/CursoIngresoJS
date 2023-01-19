/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let ValorInicial;
	let descuento;


	ValorInicial = parseFloat (document.getElementById("txtIdImporte").value);

	descuento = (ValorInicial-(ValorInicial * 25 /100));

	document.getElementById("txtIdResultado").value = descuento;
    
	alert("es lo mismo que el ejercicio anterior, pero bueno, su producto con 25% de descuento vale: " + aumento);
 
    //luego de ver la clase me di cuenta que defini solo 2 variables en vez de 3.. LOL//

}
