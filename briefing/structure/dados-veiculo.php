<?php include('head-deslogado.php'); ?>
<main class="dados-veiculo">

	<div class="container-fluid">
		<div class="row">
			<section class="intro intro-caminhao">
				<h1>Dados do veículo</h1>
				
			</section>
		</div>
	</div>

	<div class="container-fluid">
		<div class="row">
			<section class="descricao">
				<div class="container">
					<form>
						<div class="row">
							<div class="col-md-4">
								<div class="dropdown">
									<button class="btn dropdown-toggle" type="button" id="drpCategoria" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
										Categoria do veículo
									</button>
									<div class="dropdown-menu" aria-labelledby="drpCategoria">
										<a class="dropdown-item" href="#">Item 1</a>
										<a class="dropdown-item" href="#">Item 2</a>
									</div>
								</div>
							</div>
							<div class="col-md-4">
								<div class="dropdown">
									<button class="btn dropdown-toggle" type="button" id="drpModelo" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
										Modelo
									</button>
									<div class="dropdown-menu" aria-labelledby="drpModelo">
										<a class="dropdown-item" href="#">Item 1</a>
										<a class="dropdown-item" href="#">Item 2</a>
									</div>
								</div>
							</div>
							<div class="col-md-4">
								<div class="dropdown">
									<button class="btn dropdown-toggle" type="button" id="drpAno" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
										Ano
									</button>
									<div class="dropdown-menu" aria-labelledby="drpAno">
										<a class="dropdown-item" href="#">Item 1</a>
										<a class="dropdown-item" href="#">Item 2</a>
									</div>
								</div>
							</div>
							<div class="col-md-4">
								<input type="text" name="" class="form-control" placeholder="Placa">
							</div>
							<div class="col-md-4">
								<input type="text" name="" class="form-control" placeholder="Número do chassi do veículo">
							</div>
							<div class="col-md-4">
								<input type="file" name="" class="form-control inputfile" placeholder="Número do chassi do veículo" id="chassi">
								<label for="chassi">Fazer upload do documento.</label>
							</div>
						</div>
					</form>
					<div class="col-md-4 offset-md-4">
						<button class="btn btn-info btn-block">Cadastrar</button>
					</div>
				</div>
			</section>
		</div>
	</div>

</main>
<?php include('footer.php'); ?>