<?php include 'includes/header.php' ?>

<div class="top-content">
    <div class="container">
        <div class="header">
            <img class="logo" src="assets/img/logo-with-consid.svg">
        </div>
    </div>
</div>
<div class="bottom-content">
    <div class="container register-container">
        <a href="index.php" class="waves-effect waves-light"><i class="material-icons small white-text">&#xE317;</i></a>
        <h1>Skapa ditt konto</h1>
        <p class="align-center">Ange din e-postadress när du registrera dig. Vi skickar ett e-postmeddelande med en länk där du kan aktivera ditt konto.</p>
        <div id="message"></div>
        <br>
        <form onSubmit="return false;" role="form" class="col s12" method="post" action="" autocomplete="off">
            <div class="row">
                <div class="input-field col s12">
                    <input id="registerEmail" type="email" name="registerEmail" class="validate" readonly onfocus="this.removeAttribute('readonly');" readonly onfocus="this.removeAttribute('readonly');" value="">
                    <label for="registerEmail">E-postadress</label>
                </div>
                <div class="input-field col s12">
                    <input id="registerPassword" type="password" name="registerPassword" class="validate" readonly onfocus="this.removeAttribute('readonly');" readonly onfocus="this.removeAttribute('readonly');" value="">
                    <label for="registerPassword">Lösenord</label>
                </div>
                <div class="input-field col s12">
                    <input id="registerConfirmPassword" type="password" name="registerConfirmPassword" class="validate" readonly onfocus="this.removeAttribute('readonly');" readonly onfocus="this.removeAttribute('readonly');" value="">
                    <label for="registerConfirmPassword">Bekräfta lösenord</label>
                </div>
            </div>
            <div class="row center">
                <div class="col s12 center">
                    <button type="submit" name="register" id="register" class="col s12 waves-effect waves-light btn-large btn red lighten-2">Registrera dig</button>
                </div>
            </div>

        </form>

    </div>
    <div class="container register-complete-container hide">
        <a href="index.php" class="waves-effect waves-light"><i class="material-icons small white-text">&#xE317;</i></a>
        <h1>Ditt konto har skapats</h1>
        <span class="align-left">För att aktivera ditt konto, var god klicka på verifieringslänken som har skickats till er e-postadress.</span>
        <div id="message"></div>
        <br>
        <form role="form" class="col s12" method="post" action="index.php" autocomplete="off">
            <div class="row center">
                <div class="col s12 center">
                    <button type="submit" class="waves-effect waves-light btn-large btn red lighten-2">Logga in</button>
                </div>
            </div>

        </form>

    </div>
</div>

<?php include 'includes/footer.php' ?>

<script src="assets/js/auth/register.js"></script>