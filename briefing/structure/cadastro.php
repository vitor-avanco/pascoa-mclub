<?php include('head-deslogado.php'); ?>
<main class="cadastro-naologado deslogado">

	<div class="container-fluid">
		<div class="row">
			<section class="intro intro-write">
				<h1>Cadastre-se</h1>
				<p class="d-none d-sm-block">Preencha os campos com seus dados pessoais e aproveite a vantagens de verdadade do Mercedes Club.</p>
			</section>
		</div>
	</div>

	<div class="container-fluid">
		<div class="row">
			<section class="cadastro">
				<div class="container">
					<form id="cadastro">
						<div class="row">
							<div class="col-md-12">
								<p class="d-sm-none">Preencha os campos com seus dados pessoais e aproveite a vantagens de verdadade do Mercedes Club.</p>
								<div class="panel">
									<div class="cargo">
									<div class="form-check">
										<input class="form-check-input" type="radio" name="cargo" id="donofrota" value="donofrota">
										<label class="form-check-label" for="donofrota">
										Dono de Frota
										</label>
									</div>
									<div class="form-check">
										<input class="form-check-input" type="radio" name="cargo" id="autonomo" value="autonomo">
										<label class="form-check-label" for="autonomo">
										Caminhoneiro Autônomo
										</label>
									</div>
									<div class="form-check">
										<input class="form-check-input" type="radio" name="cargo" id="oficina" value="oficina">
										<label class="form-check-label" for="oficina">
										Oficinas Independentes
										</label>
									</div>
									</div>
									<div class="donofrota" style="display:none;">
										<div class="form-check">
											<input class="form-check-input" type="checkbox" value="" id="proprietario">
											<label class="form-check-label" for="proprietario">
											Proprietário
											</label>
										</div>
										<div class="form-check">
											<input class="form-check-input" type="checkbox" value="" id="manutencao">
											<label class="form-check-label" for="manutencao">
											Gestor de Manutenção
											</label>
										</div>
										<div class="form-check">
											<input class="form-check-input" type="checkbox" value="" id="almoxerifado">
											<label class="form-check-label" for="almoxerifado">
											Almoxerifado
											</label>
										</div>
										<div class="form-check">
											<input class="form-check-input" type="checkbox" value="" id="motorista">
											<label class="form-check-label" for="motorista">
											Motorista
											</label>
										</div>
										<div class="form-check">
											<input class="form-check-input" type="checkbox" value="" id="frota">
											<label class="form-check-label" for="frota">
											Gestor de Frota
											</label>
										</div>
										<div class="form-check">
											<input class="form-check-input" type="checkbox" value="" id="comprador">
											<label class="form-check-label" for="comprador">
											Comprador
											</label>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div class="col-12">
							<div class="row">
								<div class="outros-logins col-md-12">
									<div class="">
										<button class="btn btn-block btn-light fb">Login com Facebook</button>
									</div>
									<div class="">
										<button class="btn btn-block btn-light gplus">Login com Google</button>
									</div>
								</div>
							</div>

							<div class="row dados">
								<div class="col-md-6">
									<input type="text" class="form-control" name="" placeholder="CPF ou CNPJ">
								</div>
								<div class="col-md-6">
									<input type="text" class="form-control" name="" placeholder="Nome">
								</div>
								<div class="col-md-6">
									<input type="email" class="form-control" name="" placeholder="E-mail">
								</div>
								<div class="col-md-6">
									<input type="text" class="form-control" name="" placeholder="Telefone">
								</div>
								<div class="col-md-6">
									<input type="text" class="form-control" name="" placeholder="CNPJ da empresa onde trabalha">
								</div>
								<div class="col-md-6 checks">
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
								<div class="col-md-6 offset-md-6 next">
									<button class="btn btn-info btn-block">Próximo</button>
								</div>
							</div>
						</div>
					</form>
				</div>
			</section>
		</div>
	</div>

</main>
<?php include('footer.php'); ?>