<?php include 'includes/header.php' ?>

<div class="top-content">
	<div class="container">
		<div class="header">
			<img class="logo" src="assets/img/logo-with-consid.svg">
			<div class="menu-btn menu-open"><i class="material-icons">&#xE5D2;</i></div>
			<div class="menu">
				<div class="container">
					<div class="header">
						<img class="logo" src="assets/img/logo-with-consid.svg">
						<div class="menu-btn menu-close"><i class="material-icons">&#xE5CD;</i></div>
					</div>
					<br>
					<div class="row center">
						<div class="col s12 center">
							<p>Du är inloggad som:</p>
							<i class="icon material-icons">&#xE7FD;</i> <div id="email" class="inline"></div>
						</div>
					</div>
					<br>
					<div class="row center">
						<div class="col s12 center">
							<button type="submit" id="sign-out" name="signout" class="col s12 waves-effect waves-light btn-large red lighten-2">Logga ut</button>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="text-content">
			<p id="timeOfDay"></p>
			<div>Vill du ha en fralla till</div><strong><div id="orderDay" class="inline"></div><div class="inline"></div> ?</strong></div>
		</div>
	</div>
</div>
<div class="bottom-content">
	<div class="container">
		<div class="heading-text">
			<p class="heading">BESTÄLL DIN FRALLA HÄR</p>
		</div>
		<div class="icon pointer ion-ios-arrow-down"></div>
		<!-- <div class="" id="removeBtn">Ta bort alla</div> -->

		<div class="btn-order">
			<div id="submitBtn" class="waves-effect waves-light btn-large btn red lighten-2">Beställ fralla</div>
			<div class="icon ion-checkmark"></div>
		</div>

		<div class="footer">
			<div class="loading" id="quantity">&nbsp;</div>
			<span>TOTALT ANMÄLDA FRALLOR</span>
		</div>
	</div>
</div>
<!-- <div id="clicks"></div> -->

<?php include 'includes/footer.php' ?>

<script src="assets/js/auth/auth.js"></script>
<script src="assets/js/menu.js"></script>