<?php include('head-logado.php'); ?>
<main class="encontre-concessionaria">

	<div class="container-fluid">
		<div class="row">
			<section class="intro intro-hand">
				<h1>Encontre uma concessionária</h1>
				<p><strong>Tem sempre uma estrela perto de você.</strong> Digite o endereço e clique no botão.Depois, é só localizar no mapa as concessionárias Mercedes-Benz mais próximas.</p>
				<form class="form-inline">
					<input type="text" class="form-control" id="localizacao" placeholder="Localizaçãi atual">
					<button class="btn btn-info">Buscar concessionárias</button>
				</form>
			</section>
		</div>
	</div>

	<div class="container-fluid">
		<div class="row">
			<section class="descricao">
				<iframe src="https://www.google.com/maps/d/embed?mid=1PttaxU7_F5DAkc_oEU0Nuaa02uSpibj3" width="100%" height="400"></iframe>
				<div class="bg-mapa">
					<div class="container">
						<div class="row">
							<div class="col-md-4">
								<div class="localizacao">
									<p class="titulo">Al. Rio  Negro, 585</p>
									<p class="desc1">Alphaville Industrial - Barueri - SP</p>
									<p class="desc">Brasil</p>
								</div>
							</div>
							<div class="col-md-4">
								<div class="localizacao">
									<p class="titulo">Al. Araguaia, 1001</p>
									<p class="desc1">Alphaville Industrial - Barueri - SP</p>
									<p class="desc">Brasil</p>
								</div>
							</div>
							<div class="col-md-4">
								<div class="localizacao">
									<p class="titulo">Al. Copacabana, 235</p>
									<p class="desc1">18 do forte - Barueri - SP</p>
									<p class="desc">Brasil</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	</div>

</main>
<?php include('subfooter.php'); ?>
<?php include('footer.php'); ?>