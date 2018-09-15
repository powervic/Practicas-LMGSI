$('#color').on('change', function() {
    $('h1').css({
        'color': $(this).val()
    });
});

$('#tipotexto').on('keyup', function() {
    $('#texto').text($(this).val());
});

$('[name="fondo"]').on("change", function(e) {
	var nombreImagen = $(this).val();
    $('#fondo').css({
        "background-image": "url(img/" + nombreImagen + ".jpg)"
    });
});