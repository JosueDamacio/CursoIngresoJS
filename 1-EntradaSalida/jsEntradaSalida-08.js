/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	let uno = (document.getElementById("txtIdNumeroDividendo").value);
	let dos = (document.getElementById("txtIdNumeroDivisor").value);
	let Mod;

	uno = parseInt(uno);
	dos = parseInt(dos);

	Mod = uno % dos;

	alert("la divicion es " + Mod);
}
