// Funcion SUMAR

$('#suma').on('click', function(event) {
	
	var num1 = parseFloat($('#num1').val());
	var num2 = parseFloat($('#num2').val());
	var resultado = num1 + num2;
	$('#resultado').val(resultado);
});

// Funcion RESTAR
$('#resta').on('click', function(event) {
	
	var num1 = parseFloat($('#num1').val());
	var num2 = parseFloat($('#num2').val());
	var resultado = num1 - num2;
	$('#resultado').val(resultado);
});


//Funcion Multiplicar

$('#multi').on('click', function(event) {
	
	var num1 = parseFloat($('#num1').val());
	var num2 = parseFloat($('#num2').val());
	var resultado = num1 * num2;
	$('#resultado').val(resultado);
});

//Funcion Dividir

$('#divi').on('click', function(event) {
	
	var num1 = parseFloat($('#num1').val());
	var num2 = parseFloat($('#num2').val());
	var resultado = num1 / num2;
	$('#resultado').val(resultado);
});

// Funcion CLEAR

$('#clear').on('click',function(){
	$('.num').val(' '); 
});
