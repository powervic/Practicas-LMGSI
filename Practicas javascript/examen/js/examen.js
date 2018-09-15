
/* Contadores para los aciertos y fallos*/
var nAciertos=0;
var nFallos=0;

/* Seleccionamos el radio que haya sido clickado*/
$('[type="radio"]').on('click', function(event) {
	/* numPreg guarda el número de la pregunta
	name guarda el número (1, 2, 3 o 4)*/
	var numPreg = $(this).attr('name');
	/* Seleccionamos el p de class="solucionX"
	donde X es el número de la pregunta*/
	$('.solucion'+numPreg).text(' ');
	if ($(this).data('correct') == 'si') {
		$('.solucion'+ numPreg).text('Has acertado.');
		$('.solucion'+ numPreg).css({
			'background-color': 'green',
		});
		nAciertos++;
	}
	else {
		$('.solucion'+numPreg).text('Has fallado.');
		$('.solucion'+numPreg).css({
			'background-color': 'red',
		});
		nFallos++;
	}
	$('.n_acertadas').text(nAciertos);
	$('.n_falladas').text(nFallos);
});

$('button').on('click', function(event) {
	nAciertos=0;
	$('.n_acertadas').text(nAciertos);
	nFallos=0;
	$('.n_falladas').text(nFallos);
	$('.solucion1').text(' ');
	$('.solucion2').text(' ');
	$('.solucion3').text(' ');
	$('.solucion4').text(' ');
	$('[type="radio"]').prop('checked', false);
});
