<?php include 'includes/header.php' ?>

<div class="top-content">
    <div class="container">
        <div class="header">
            <img class="logo" src="assets/img/logo-with-consid.svg">
        </div>
    </div>
</div>
<div class="bottom-content">
    <div class="container reset-container">
        <a href="index.php" class="waves-effect waves-light"><i class="material-icons small white-text">&#xE317;</i></a>
        <h1>Återställ lösenord</h1>
        <p class="align-center">Ange din e-postadress som du använde när du registrerade dig. Vi skickar ett e-postmeddelande med en länk där du kan återställa ditt lösenord.</p>
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
                    <button type="submit" name="reset-password" id="reset-password" class="col s12 waves-effect waves-light btn-large btn red lighten-2">Återställ lösenord</button>
                </div>
            </div>

        </form>

    </div>
    <div class="container hide reset-complete-container">
        <a href="index.php" class="waves-effect waves-light"><i class="material-icons small white-text">&#xE317;</i></a>
        <h1>Återställningen slutfördes</h1>
        <p class="align-center">Vi har skickat ett e-postmeddelande där du kan återställa ditt lösenord.</p>
        <div id="message"></div>
        <br>
    </div>
</div>

<?php include 'includes/footer.php' ?>

<script src="assets/js/auth/resetpassword.js"></script>