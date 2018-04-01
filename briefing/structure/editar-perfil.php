<?php include('head-logado.php'); ?>
<main class="editar-perfil">

	<div class="container-fluid">
		<section class="descricao">
			<div class="container">
				<div class="row">
					<h1>Editar perfil</h1>
					<p>Atualizar as informações de cadastro é muito importante para continuar participando do Mercedes Club e aproveitar as vantagens. Digite os dados que tiveram alguma alteração e depois clique em "salvar".</p>
				</div>
			</div>
		</section>

		<section class="cadastro">
			<div class="container">
				<form id="cadastro">
					<div class="row">
						<div class="outros-logins col-md-12">
							<div class="">
								<button class="btn btn-block btn-light fb">Carregar perfil</button>
							</div>
							<div class="">
								<button class="btn btn-block btn-light gplus">Carregar perfil</button>
							</div>
						</div>
					</div>

					<div class="row">
						<div class="col-md-4">
							<input type="text" class="form-control" name="" placeholder="CPF">
						</div>
						<div class="col-md-4">
							<input type="text" class="form-control" name="" placeholder="Nome">
						</div>
						<div class="col-md-4">
							<input type="email" class="form-control" name="" placeholder="E-mail">
						</div>
						<div class="col-md-4">
							<input type="text" class="form-control" name="" placeholder="Telefone">
						</div>
						<div class="col-md-4">
							<input type="text" class="form-control" name="" placeholder="CNPJ da empresa onde trabalha">
						</div>

						<div class="dados-pessoais">
							<p>Dados Pessoais</p>

							<div class="col-md-4">
								<input type="text" class="form-control" name="" placeholder="CEP">
							</div>
							<div class="col-md-4">
								<input type="text" class="form-control" name="" placeholder="Endereço">
							</div>
							<div class="col-md-4">
								<input type="email" class="form-control" name="" placeholder="Número">
							</div>
							<div class="col-md-4">
								<input type="email" class="form-control" name="" placeholder="Bairro">
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

						<div class="dados-veiculo">
							<p>Dados do veículo</p>

							<div class="col-md-4">
								<div class="dropdown">
									<button class="btn dropdown-toggle" type="button" id="drpCategoria" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
										Categoria do veículo
									</button>
									<div class="dropdown-menu" aria-labelledby="drpCidade">
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
									<div class="dropdown-menu" aria-labelledby="drpCidade">
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
									<div class="dropdown-menu" aria-labelledby="drpCidade">
										<a class="dropdown-item" href="#">Item 1</a>
										<a class="dropdown-item" href="#">Item 2</a>
									</div>
								</div>
							</div>

							<div class="col-md-4">
								<input type="text" class="form-control" name="" placeholder="Placa">
							</div>

							<div class="col-md-4">
								<input type="text" class="form-control" name="" placeholder="Número do chassi do veículo">
							</div>

							<div class="col-md-4 upload">
							    <label for="upload">Fazer upload do documento</label>
							    <input type="file" class="form-control" id="upload">
							</div>
						</div>

						<div class="col-md-3 checks">
							<div class="form-check">
								<input class="form-check-input" type="checkbox" value="" id="novidades">
								<label class="form-check-label" for="novidades">
								Desejo receber novidades Mercedes-Benz
								</label>
							</div>
							<div class="form-check">
								<input class="form-check-input" type="checkbox" value="" id="novidades">
								<label class="form-check-label" for="novidades">
								Aceito os <a href="#">Termos de Uso</a>
								</label>
							</div>
						</div>
						<div class="col-md-4 next">
							<button class="btn btn-info btn-block">Salvar</button>
						</div>
					</div>
				</form>
			</div>
		</section>
	</div>

</main>
<?php include('subfooter.php'); ?>
<?php include('footer.php'); ?>