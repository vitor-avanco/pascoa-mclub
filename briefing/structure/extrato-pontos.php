<?php include('head-logado.php'); ?>
<main class="extrato-pontos">

	<div class="container-fluid">
		<div class="row bg-head">
			<div class="menu-tabs">
				<ul class="nav nav-pills">
					<li class="nav-item">
						<a class="nav-link active" href="javascript:;">Extrato de pontos</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="javascript:;">Extrato de estrelas</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="javascript:;">Simulador</a>
					</li>
				</ul>
			</div>
		</div>
	</div>

	<div id="pontos" class="tela">
		<div class="descricao">
			<div class="container-fluid">
				<div class="row">
					<h1 class="text-center">Extrato de pontos</h1>
					<p><strong>Quem conhece a estrada merece descontos especiais em peças e serviços nas concessionárias Mercedes-Benz.</strong> Selecione nos campos abaixo o mês e o ano, consulte seu saldo de pontos do período e aproveite essa vantagem de verdade.</p>
				</div>
				<div class="row">
					<div class="col-md-12">
						<div class="dropdown">
							<button class="btn dropdown-toggle" type="button" id="dropInicio" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								10/2016
							</button>
							<div class="dropdown-menu" aria-labelledby="dropInicio">
								<a class="dropdown-item" href="#">Item 1</a>
								<a class="dropdown-item" href="#">Item 2</a>
							</div>
						</div>

						<div class="dropdown">
							<button class="btn dropdown-toggle" type="button" id="drpFim" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								10/2017
							</button>
							<div class="dropdown-menu" aria-labelledby="drpFim">
								<a class="dropdown-item" href="#">Item 1</a>
								<a class="dropdown-item" href="#">Item 2</a>
							</div>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-md-6">
						<div class="left">
							<p><strong>Seu saldo de pontos é de:</strong></p>
							<p class="pontos">000 pontos</p>
							<p class="desc">Que tal acessar o simulador? Lá você pode ver os descontos de acordo com sua pontuação.</p>
						</div>
					</div>
					<div class="col-md-6">
						<div class="right">
							<p><strong>Pontos a vencer:</strong></p>
							<p class="pontos">000 pontos</p>
							<p class="desc">Faça agora mesmo o resgate! Ainda dá tempo de aproveitar essa vantagem.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		
		<div class="container-fluid">
			<div class="row">
				<section class="bg-caminhoes">
					
				</section>
			</div>
		</div>
	</div>

	<div id="estrelas" class="tela" style="display:none;">
		<div class="descricao">
			<div class="container-fluid">
				<div class="row">
					<h1 class="text-center">Extrato de estrelas</h1>
					<p><strong>Contar estrelas é tudo de bom. A cada gesto, uma conquista.</strong> Selecione nos campos abaixo o mês e o ano, consulte seu saldo de estrelas do período e aproveite os benefícios exclusivos do Mercedes Club.</p>
				</div>
				<div class="row">
					<div class="col-md-12">
						<div class="dropdown">
							<button class="btn dropdown-toggle" type="button" id="dropInicio" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								10/2016
							</button>
							<div class="dropdown-menu" aria-labelledby="dropInicio">
								<a class="dropdown-item" href="#">Item 1</a>
								<a class="dropdown-item" href="#">Item 2</a>
							</div>
						</div>

						<div class="dropdown">
							<button class="btn dropdown-toggle" type="button" id="drpFim" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								10/2017
							</button>
							<div class="dropdown-menu" aria-labelledby="drpFim">
								<a class="dropdown-item" href="#">Item 1</a>
								<a class="dropdown-item" href="#">Item 2</a>
							</div>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-md-6">
						<div class="left">
							<p><strong>Seu saldo de estrelas é de:</strong></p>
							<p class="pontos">000 estrelas</p>
							<p class="desc">Continue conquistando estrelas para brilhar ainda mais no nosso clube.</p>
						</div>
					</div>
					<div class="col-md-6">
						<div class="right">
							<p><strong>Estrelas a vencer:</strong></p>
							<p class="pontos">000 estrelas</p>
							<p class="desc">Resgate já e aproveite os descontos em nossos parceiros.</p>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="container-fluid">
			<div class="row">
				<section class="bg-caminhoes">
					
				</section>
			</div>
		</div>
	</div>

	<div id="simulador" class="tela" style="display:none;">
		<div class="descricao">
			<div class="container-fluid">
				<div class="row">
					<h1 class="text-center">Simulador de pontos</h1>
					<p>Vantagem de verdade é ter desconto em peças. Indique no campo abaixo quantos pontos você quer resgatar e veja o percentual de desconto que você ganha na compra de peças genuínas Mercedes-Benz. <strong>Lembre-se: quanto mais pontos para resgate, maior o desconto.</strong></p>
				</div>
				<div class="row">
					<div class="col-md-12">
						<div class="col-md-3 box">
							<div class="box-calc-pontos">
								<form>
									<input type="text" class="form-control" name="" placeholder="000 pontos">
									<button class="btn btn-info btn-block">Calcular</button>
									<p>Desconto de <span>000%</span> em peças</p>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<div class="container-fluid">
			<div class="row">
				<section class="bg-caminhoes">
					
				</section>
			</div>
		</div>
	</div>


</main>
<?php include('subfooter.php'); ?>
<?php include('footer.php'); ?>