function clickChe() {
	$('.linha .label').on('click',function(){
		var $valor = $(this).attr('data-vl');
	
		$('.'+$valor).trigger("click");

		alterarText($valor);
	})

	$('.linha input').on('click',function(){
		var $valor = $(this).attr('class');
	
		alterarText($valor);

	})


};



function alterarText($valor) {

	var $tipo = $('.linha .tipo');
	var $tipo2 = $('.linha .tipo2');

	if($valor == 'tipo'){
		$('.btnEnviar').html('Saquar');

		$tipo.addClass('checado')
		$tipo2.removeClass('checado');
	}
	else{
		$('.btnEnviar').html('Depositar');
		$tipo2.addClass('checado')
		$tipo.removeClass('checado');
	}
	
}



function clickAdicionar(){

	$('.btnEnviar').on('click', function(){
		addValor();
	})
	
}



function addValor(){

	var tipo = $('.linha .checado').val();

	
	var inputValue = $('.lateral .valor').val();

	

	if(inputValue){
		if( tipo == 'deposito'){
			addLinha( tipo, inputValue);
		}
		else{
			addLinha( tipo, inputValue);
		}


	}else{
		$('.msg').addClass('erro').html('Por favor adicione um Valor').stop(true,true).fadeIn();

		setTimeout(function(){ $('.msg').stop(true,true).fadeOut(); }, 3000);
		setTimeout(function(){ $('.msg').removeClass('erro'); }, 3400);
	}
	

	

}

function addLinha(tipo , valor) {

	$('.valor').val('');
	$('.valor').focus() ;
	var $nameClass =  '';

	var $nameLabel =  '';

		valorOrin =  valor;
		valor = valor.toString();
			
		valor = valor.replace('.','');
		valor = valor.replace('.','');
		valorNovo = valor.replace(',','.');
		
		valorFloaT = parseFloat(valorNovo);

		switch(tipo) {
		    case 'deposito': $nameClass = 'success'; $nameLabel = 'Depósito';
		        break;
		    case 'saque': $nameClass = 'danger'; $nameLabel = 'Saque'; valorNovo = (valorNovo * -1);
		   break;
		   
		}

	$('#ctTable').append('<tr class="'+$nameClass+'"> <td >'+$nameLabel+'</td>  <td class="pSoma" data-pSoma="'+valorNovo+'" >R$'+ valorOrin+'</td><td class="remover">remover</td>/tr>')

	somaTotal();
}

function clickRemove() {
	$(document).on('click', '.remover',function(){
		
		$(this).parent('tr').remove();
		somaTotal();
	})
}

function somaTotal() {
	var $pSoma = $('#ctTable .pSoma');
	$('.ct-List').addClass('visible').removeClass('offVisible');
		$('.semValor').removeClass('visible').addClass('offVisible');
	if($pSoma.length){		

		total = 0.00;
		$pSoma.each(function(){
			var $this = $(this);

			var vlPego = $this.attr('data-pSoma');
			
			
			vlPego = parseFloat(vlPego);

			total = parseFloat(total);

			total = (total + vlPego);
			
			
		});


		

		$('#total').val(total.toFixed(2));
		

		if( total > 0){
			$('.faixaTotal').addClass('positivo').removeClass('negativo');
		}else{
			$('.faixaTotal').addClass('negativo').removeClass('positivo');
		}

		$(function() {
		  var maxLength = '-0.000.000,00'.length;
		  
		  $("#total").maskMoney({
		    allowNegative: true,
		    thousands: '.',
		    decimal: ',',
		    affixesStay: false
		  }).attr('maxlength', maxLength).trigger('mask.maskMoney');
		});
	}
	else{
					
		$('.semValor').addClass('visible').removeClass('offVisible');
		$('.ct-List').removeClass('visible').addClass('offVisible');
	}
}

$( ".valor" ).on( "keydown", function(event) {
      if(event.which == 13){
      	$('.btnEnviar').trigger("click");
      } 
         
    });

// $(".valor").maskMoney({showSymbol:true, symbol:'R$ ', thousands:'', decimal:'.', symbolStay: true});



 $('.valor').mask('000.000.000.000.000,00', {reverse: true});

clickRemove();
somaTotal();
clickAdicionar();
clickChe();
