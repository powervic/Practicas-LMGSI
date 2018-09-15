var mostrar = 0;

//DOLAR+('OBJETO').MÉTODO(FUNCTION()){COSAS});
$('#boton').click(function(event) {
    if (mostrar==0) {
        $('.titulo').css({
                opacity: 1,
                'background-color': 'black',
                color: 'blue'
        });
        mostrar = 1;
    }
    else 
    	if (mostrar==1) {
        $('.titulo').css({
                opacity: 0,
        });
        mostrar = 1;
    }
});

$('div').click(function(event) {
	$('div').css({
		'background-color': 'pink',
		color: 'gray'
	});
});