/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	
	let nombre
	let edad //aca declaro las varaibles//


	nombre  = document.getElementById("txtIdNombre").value; //con ".value" aclaramos que nos referimos que lo que queremos reemplazar es el valor//
	edad = document.getElementById("txtIdEdad").value; //hago que esas variables sean definidas por lo que el usuario escriba en cada txt//



    alert("te llamás "+nombre+ " y tu edad es "+edad+", cierto?");
//pequeña alerta//


	document.getElementById("txtIdNombre").value = "";
	document.getElementById("txtIdEdad").value = "";
	//retorno valores predeterminados a nada//
	
}

//empece a hacer los ejersicios solo y luego ver la explicación ╰(*°▽°*)╯//