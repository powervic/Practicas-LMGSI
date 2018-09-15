
$('#mas').on('click',function(event) {
	var guardaTexto = $('#texto').val();
	$('ul').append('<li>'+guardaTexto+'<button class="menos">quitar</button></li>');
	$('#texto').val(' ')

});

$('body').on('click', '.menos',function(event) {
	$(this).parent().remove();
});
