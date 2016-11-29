$('#paises a').on('click', function(e){
	// recupero el nombre del pais pulsado
	var pais_selec = $(this).find('span').html();

	// lo guardo en localStorage
	window.localStorage.setItem('nombre_pais', pais_selec);
});
