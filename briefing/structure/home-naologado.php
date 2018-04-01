<?php include('head-deslogado.php'); ?>
<main class="home-naologado deslogado">

	<div class="container-fluid">
		<div class="row">
			<section class="bg-hero">
				<div class="container">
					<div class="col-md-8">
						<img src="img/mercedesclub_white.png" class="mx-auto d-block club">
						<p>Tem estrela, tem vantagens de verdade!</p>
					</div>
					<div class="col-md-4 float-right login">
						<form id="login">							
							<h2>Login</h2>
							<p>Preencha o campo abaixo ou clique num dos botões para ter acesso ao programa.</p>
							<input type="text" class="form-control" name="documento" placeholder="CPF ou CNPJ">
							<input type="password" class="form-control" name="senha" placeholder="Senha">
							<button class="btn btn-info btn-block">Entrar</button>
						</form>
						<p class="text-center">OU</p>
						<div class="outros-logins">
							<button class="btn btn-block btn-light fb">Login com Facebook</button>
							<button class="btn btn-block btn-light gplus">Login com Google</button>
						</div>
						<div class="links-ajuda">
							<a href="#">Cadastre-se</a>
							<a href="#">Esqueci minha senha</a>					
						</div>
					</sections>
				</div>
			</div>
		</div>
	</div>

	<div class="container-fluid">
		<div class="row">
			<section class="funcionamento">
				<div class="container">
					<h2>Como funciona</h2>
					<div class="owl-carousel owl-theme" id="funcionamento">
						<div class="item">
							<img src="img/icon01.png" alt="" class="mx-auto d-block">
							<h3 class="h4">Cadastre-se</h3>
							<p>Faça seu login e entre para o programa de fidelidade e recompensas da Mercedes-Benz.</p>
						</div>
						<div class="item">
							<img src="img/icon02.png" alt="" class="mx-auto d-block">
							<h3 class="h4">Junte pontos</h3>
							<p>Faça manutenção ou reparo do seu veículo na nossa Rede de Concessionárias.</p>
						</div>
						<div class="item">
							<img src="img/icon03.png" alt="" class="mx-auto d-block">
							<h3 class="h4">Conquiste estrelas</h3>
							<p>Indique amigos, participe de treinamentos e pesquisas, mostre seu orgulho de rodar com um Mercedes-Benz.</p>
						</div>
						<div class="item">
							<img src="img/icon04.png" alt="" class="mx-auto d-block">
							<h3 class="h4">Vantagens de verdade</h3>
							<p>Juntou pontos, ganhou produtos e serviços Mercedes-Benz. Conquistou estrelas, ganhou benefícios exclusivos.</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	</div>

	<div class="container-fluid">
		<div class="row">
			<section class="noticias">
				<div class="container">
					<h2>Notícias</h2>
					<div class="owl-carousel owl-theme" id="noticias">
						<div class="item">
							<a href="#">
								<img src="img/noticia-01.jpg" alt="" class="">
								<h5>Veículos comerciais lideram as vendas em 2017</h5>
							</a>
						</div>
						<div class="item">
							<a href="#">
								<img src="img/noticia-02.jpg" alt="" class="">
								<h5>115 caminhões de coleta de lixo para o Chile</h5>
							</a>
						</div>
						<div class="item">
							<a href="#">
								<img src="img/noticia-03.jpg" alt="" class="">
								<h5>Mercedes-Benz na Fenatran 2017: veja como foi</h5>
							</a>
						</div>
						<div class="item">
							<a href="#">
								<img src="img/noticia-04.jpg" alt="" class="">
								<h5>TruckPad, o novo aplicativo de carga da Mercedes-Benz</h5>
							</a>
						</div>
					</div>
				</div>
			</section>
		</div>
	</div>

</main>
<?php include('footer.php'); ?>