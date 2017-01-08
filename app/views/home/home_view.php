
<html  lang="pt-br">
	<head>
	  <meta charset="utf-8">
	  <meta http-equiv="content-type" content="text/html; charset=UTF-8">
	  <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no"> 
	  <meta name="description" content="Sistema de saque e deposito para teste">
	  <meta name="author" content="Alef Lourenço">
	  
	  <title>Saque e deposito | S2.it - Teste </title>
	    
	  <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
	  <link href="http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,700italic,400,300,700" rel="stylesheet" type="text/css">
	  <link rel="stylesheet" href="../assets/bootstrap/css/bootstrap.min.css" type="text/css">
	  <link rel="stylesheet" href="../assets/Home/css/home.css" type="text/css">

	</head> 
	<body id="site" class="">

		<header>
			 <div class="container">
			 <div class="col-sm-5 saudacao">
			 	Seja bem vindo 

			 </div>
				<div class="col-sm-2">
					
					<div class="logo"></div>

				</div>
				<div class="col-sm-5 siteOf">
					
				<a class="link" href="http://s2it.com.br/" target="_blank">Conheça nosso site </a>

				</div>


			</div>
		</header>

		<div class="col-sm-3 lateral">

				<div class="title"> Faça sua simulação</div>

				<div class="msg"></div>
			<div class="linha">

				<input class="tipo" name="tipo" type="radio" value="saque" > 
				<span class="label" data-vl='tipo'> Saque</span>
			</div>
			
			<div class="linha">

				<input class="tipo2 checado" name="tipo" type="radio" value="deposito" checked="">
				<span class="label" data-vl='tipo2'> Deposíto</span>
			</div>
			
			<br/>
			<input type="text" class="valor" name="valor" placeholder="Valor" value="" maxlength="11" />


			<div class="btnEnviar"> Depositar </div>


		</div>

		<div class="conteudo col-sm-9">
			
			<div class="letraMaior semValor visible"> Nenhum Valor adicionado </div>
			<div class="offVisible ct-List">
				<div class="letraMaior titleLista">
					Sua Listagem de Saldo e Débito
				</div>

				<div class="faixaTotal ">

					<span> Seu saldo é de R$</span> 
					<input type="text"  name="" id='total' disabled="" value=""  /> 

				</div>


				<div class="table-responsive">

					<table class="table">
					<thead>
						<tr>
							<th> Tipo</th>
							<th> Valor</th>
							<th> Ações</th>
						</tr>
					</thead>

					<tbody id='ctTable'>
						
					</tbody>

						
					</table>

				</div>
				
			</div>



			
		</div>




		
		<script src="../assets/Home/js/jq.js" ></script>
		<script src="../assets/Home/js/maskTest.js" ></script>
		<script src="../assets/Home/js/maskMoney.js" ></script>
		<script src="../assets/Home/js/home.js" ></script>
		<script src="../assets/bootstrap/js/bootstrap.min.js" ></script>
    </body>
</html>

