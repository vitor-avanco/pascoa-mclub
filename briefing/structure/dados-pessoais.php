<?php include('head-deslogado.php'); ?>
<main class="dados-pessoais">

	<div class="container-fluid">
		<div class="row">
			<section class="intro intro-hand">
				<h1>Dados Pessoais</h1>
				
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
								<input type="text" name="" class="form-control" placeholder="CEP">
							</div>
							<div class="col-md-4">
								<input type="text" name="" class="form-control" placeholder="Endereço">
							</div>
							<div class="col-md-4">
								<input type="text" name="" class="form-control" placeholder="Número">
							</div>
							<div class="col-md-4">
								<input type="text" name="" class="form-control" placeholder="Bairro">
							</div>
							<div class="col-md-4">
								<div class="dropdown">
									<button class="btn dropdown-toggle" type="button" id="drpCidade" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
										Cidade
									</button>
									<div class="dropdown-menu" aria-labelledby="drpCidade">
										<a class="dropdown-item" href="#">Item 1</a>
										<a class="dropdown-item" href="#">Item 2</a>
									</div>
								</div>
							</div>
							<div class="col-md-4">
								<div class="dropdown">
									<button class="btn dropdown-toggle" type="button" id="drpEstado" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
										Estado
									</button>
									<div class="dropdown-menu" aria-labelledby="drpEstado">
										<a class="dropdown-item" href="#">Item 1</a>
										<a class="dropdown-item" href="#">Item 2</a>
									</div>
								</div>
							</div>
							<div class="col-md-4">
								<input type="text" name="" class="form-control" placeholder="Razão social">
							</div>
							<div class="col-md-4">
								<input type="text" name="" class="form-control" placeholder="Nome fantasia">
							</div>
							<div class="col-md-4">
								<div class="dropdown">
									<button class="btn dropdown-toggle" type="button" id="drpSexo" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
										Sexo
									</button>
									<div class="dropdown-menu" aria-labelledby="drpSexo">
										<a class="dropdown-item" href="#">Item 1</a>
										<a class="dropdown-item" href="#">Item 2</a>
									</div>
								</div>
							</div>
							<div class="col-md-4">
								<div class="dropdown">
									<button class="btn dropdown-toggle" type="button" id="drpCivil" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
										Estado civil
									</button>
									<div class="dropdown-menu" aria-labelledby="drpCivil">
										<a class="dropdown-item" href="#">Item 1</a>
										<a class="dropdown-item" href="#">Item 2</a>
									</div>
								</div>
							</div>
							<div class="col-md-4">
								<div class="dropdown">
									<button class="btn dropdown-toggle" type="button" id="drpNasc" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
										Data de nascimento
									</button>
									<div class="dropdown-menu" aria-labelledby="drpNasc">
										<a class="dropdown-item" href="#">Item 1</a>
										<a class="dropdown-item" href="#">Item 2</a>
									</div>
								</div>
							</div>
						</div>
					</form>
					<div class="col-md-4 offset-md-4">
						<button class="btn btn-light">Finalizar</button>
						<button class="btn btn-info next">Próximo</button>
					</div>
				</div>
			</section>
		</div>
	</div>

</main>
<?php include('footer.php'); ?>