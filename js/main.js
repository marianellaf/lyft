/*codigo paises*/
var paises = [
	{
		nombre: "Chile",
		prefijo: "+569",
		bandera: "img/cl.png",
		digitos:9
	},
	{
		nombre: "Mexico",
		prefijo: "+529",
		bandera: "img/mex.png",
		digitos:10
	},
	{
		nombre: "Peru",
		prefijo: "+519",
		bandera: "img/pe.png",
		digitos:9
	},
	{
		nombre:"Argentina",
		prefijo:"+549",
		bandera:"img/ar.png",
		digitos:11
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
$('#digitos').attr('maxlength',pais);
