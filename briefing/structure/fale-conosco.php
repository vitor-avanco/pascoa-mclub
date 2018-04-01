<?php include('head-logado.php'); ?>
<main class="fale-conosco">

	<div class="container-fluid">
		<div class="row">
			<section class="intro intro-pessoas">
				<h1>Fale conosco</h1>
				<p class="d-none d-sm-block">O clube quer ouvir você. Digite seus dados e escreva sua mensagem: dúvidas, reclamações, elogios. Aguarde. Em breve, a gente vai entrar em contato.</p>
			</section>
		</div>
	</div>

	<div class="container-fluid">
		<div class="row">
			<section class="descricao">
				<div class="container">
					<p class="d-sm-none text-center">O clube quer ouvir você. <br> Digite seus dados e escreva sua mensagem: dúvidas, reclamações, elogios. Aguarde. Em breve, a gente vai entrar em contato.</p>
					<form>
						<div class="row">
							<div class="col-md-4">
								<input type="text" name="" class="form-control" placeholder="Nome">
							</div>
							<div class="col-md-4">
								<input type="email" name="" class="form-control" placeholder="E-mail">
							</div>
							<div class="col-md-4">
								<input type="text" name="" class="form-control" placeholder="Assunto">
							</div>
							<div class="col-md-12">
								<textarea class="form-control" rows="4" placeholder="Mensagem"></textarea>
							</div>
						</div>
					</form>
					<div class="col-md-4 offset-md-4">
						<button class="btn btn-info btn-block">Enviar</button>
					</div>
				</div>
			</section>
		</div>
	</div>

</main>
<?php include('subfooter.php'); ?>
<?php include('footer.php'); ?>