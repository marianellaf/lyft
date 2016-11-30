/*codigo paises*/
var paises = [
	{
		nombre: "Chile",
		prefijo: "+569",
		bandera: "img/cl.png",
		digitos:"9"
	},
	{
		nombre: "Mexico",
		prefijo: "+529",
		bandera: "img/mex.png",
		digitos:"10"
	},
	{
		nombre: "Peru",
		prefijo: "+519",
		bandera: "img/pe.png",
		digitos:"9"
	},
	{
		nombre:"Argentina",
		prefijo:"+549",
		bandera:"img/ar.png",
		digitos:"11"
	}
];
// traerme el nombre del pais desde localStorage
var nombre_pais = window.localStorage.getItem("nombre_pais") || "chile";

// recuperar el objeto pais, desde el arreglo de paises
var pais = {};
for (var i=0 ; i<paises.length ; ++i){
	if (paises[i].nombre == nombre_pais) {
		pais = paises[i];
		break;
	}
}

// validacion numeros
$('.pais img').attr('src', pais.bandera);
$('#prefijo').html(pais.prefijo);
$('#digitos').attr('maxlength',pais.digitos);

//codigo de tres digitos
$('#cod').click(function(){
	$('.lav').remove();
	var lab =Math.floor(Math.random() * 899 + 100);
	window.localStorage.setItem('numerorandon', lab);
	$('.rand').append('<span class="lav">LAB - '+lab+'</span>')	

});
$('#validarcod').on('click',function(){
	var vali= window.localStorage.getItem('numerorandon');
	var inputLab= $('#lab1').val() + $('#lab2').val() + $('#lab3').val();
	if(vali == inputLab){
		location.replace('contac.html');

	}
	else if(vali !=inputLab){
		alert('vuelve a Intentarlo');
	}
	
})







//datos y correo
/*function validateForm(){
	 Escribe tú código aquí 
    var nombre = document.getElementById("name").value;
	var apellido = document.getElementById("lastname").value;
	var email = document.getElementById("input-email").value;
	var contrasena = document.getElementById("input-password").value;
    var lista = document.querySelector("select").value;

    if(nombre == null || nombre.length == 0 || /^\s+$/.test(nombre)){
        var span = document.createElement("span");
        var referencia= document.getElementById("name");
        var padre=referencia.parentNode;
        padre.insertBefore(span,referencia);
        var texto = document.createTextNode("Debe ingresar su nombre");
        span.appendChild(texto);
        return span;
    }   else {
       var m = /^[a-zA-Z]*$/;
       if(!nombre.search(m)) {
            console.log("letra")
            m = /[a-z]/g;
        }    
        if(!nombre.search(m)){
            var span = document.createElement("span");
            var referencia= document.getElementById("name");
            var padre=referencia.parentNode;
            padre.insertBefore(span,referencia);
            var texto = document.createTextNode("La primera letra debe empezar con maýuscula");
            span.appendChild(texto);
            return span;
        }
    }

    if(apellido == null || apellido.length == 0 || /^\s+$/.test(apellido)) {
        var span = document.createElement("span");
        var referencia= document.getElementById("lastname");
        var padre=referencia.parentNode;
        padre.insertBefore(span,referencia);
        var texto = document.createTextNode("Debe ingresar su apellido");
        span.appendChild(texto);
        return span;
    } else {
       var n = /^[a-zA-Z]*$/;
       if(!apellido.search(n)) {
            console.log("letra")
            n = /[a-z]/g;
        }    
        if(!apellido.search(n)){
            var span = document.createElement("span");
            var referencia= document.getElementById("lastname");
            var padre=referencia.parentNode;
            padre.insertBefore(span,referencia);
            var texto = document.createTextNode("La primera letra debe empezar con maýuscula");
            span.appendChild(texto);
            return span;
        }
    }

    if(!(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email))) {
        var span = document.createElement("span");
        var referencia= document.getElementById("input-email");
        var padre=referencia.parentNode;
        padre.insertBefore(span,referencia);
        var texto = document.createTextNode("Verifique su email");
        span.appendChild(texto);
        return span;
    } else if( contrasena == null || contrasena.length <= 6 || contrasena == "password" || contrasena == 123456 || contrasena == 098754 || /^\s+$/.test(contrasena) ) {
        var span = document.createElement("span");
        var referencia= document.getElementById("input-password");
        var padre=referencia.parentNode;
        padre.insertBefore(span,referencia);
        var texto = document.createTextNode("Ingresa una contraseña válida");
        span.appendChild(texto);
        return span;
    } */
