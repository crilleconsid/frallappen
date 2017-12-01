<?php include 'includes/header.php' ?>

<div class="top-content">
    <div class="container">
        <div class="header">
            <img class="logo" src="assets/img/logo-with-consid.svg">
        </div>
    </div>
</div>
<div class="bottom-content">
    <div class="container">
        <a href="index.php" class="waves-effect waves-light"><i class="material-icons small white-text">&#xE317;</i></a>
        <h1>Aktivera ditt konto</h1>
        <p class="align-center">Ange din e-postadress som du använde när du registrerade dig. Vi skickar ett e-postmeddelande med en länk där du kan aktivera ditt konto.</p>
        <div id="message"></div>
        <br>
        <form onSubmit="return false;" role="form" class="col s12" method="post" action="" autocomplete="off">
            <div class="row">
                <div class="input-field col s12">
                    <input id="email" type="email" name="email" class="validate" value="">
                    <label for="email">E-postadress</label>
                </div>
            </div>
            <div class="row center">
                <div class="col s12 center">
                    <button type="submit" name="activate" id="activate" class="waves-effect waves-light btn-large btn red lighten-2">Aktivera konto</button>
                </div>
            </div>

        </form>

    </div>
</div>

<?php include 'includes/footer.php' ?>

<script src="assets/js/auth/resetpassword.js"></script>