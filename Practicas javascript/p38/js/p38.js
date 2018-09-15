$('#ocultAll').on('click', function(event) {
	$('#ocultarTodo').css({
		'height': '100%', 
		'transition': '1s'
	});
});

$('#ocultarTodo').on('click', function(event) {
	$(this).css({
		'height': '0', 
		'transition': '1s'
	});
});

$('#ocultAmbas').on('click', function(event) {
	$('#tablaOsi').css({
		'display': 'none',
	});
	$('#tablaTcp').css({
		'display': 'none',
	});
	$('[type="checkbox"]').prop("checked", false);
});

$('[type="checkbox"]').on('change',function(event) {
	if ($(this).prop('checked')) {
// 		$(this).val()  = "tablaOsi" || "tablaTcp";
		$('#'+$(this).val()).css({
			'display': 'block'
		});
	}else{
		$('#'+$(this).val()).css({
			'display': 'none'
		});
	}
});

