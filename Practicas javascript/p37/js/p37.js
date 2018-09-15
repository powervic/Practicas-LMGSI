var mostrar = 0;
//Background

$('#color1').click(function(event) {
    $('.principal').css({
        'background-color': '#3e3f25'
    });
});

$('#color2').click(function(event) {
    $('.principal').css({
        'background-color': '#547580'
    });
});

$('#color3').click(function(event) {
    $('.principal').css({
        'background-color': '#814757'
    });
});

//Color de

$('#letra1').on('click', function(event) {
    $('.principal').css({
        'color': '#d7d1a3'
    });
});

$('#letra2').on('click', function(event) {
    $('.principal').css({
        'color': '#95d3e1'
    });
});

$('#letra3').on('click', function(event) {
    $('.principal').css({
        'color': '#f4c8dd'
    });
});

// Imagen

$('#Imagen').on("click", function(e) {
    if (mostrar == 0) {
        $('#neruda').css({
            opacity: 1,
        });
        $('#Imagen').text('Ocultar');
        mostrar = 1;
    } else 
    if (mostrar == 1) {
        $('#neruda').css({
            opacity: 0,
        });
        $('#Imagen').text('Mostrar');
        mostrar = 0;
    }
});