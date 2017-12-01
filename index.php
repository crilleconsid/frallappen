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
        <p class="align-center">Ange din e-postadress och lösenord nedan för att logga in.</p>
        <div id="message"></div>
        <br>
        <form role="form" class="col s12" method="post" action="" autocomplete="off">
            <div class="row">
                <div class="input-field col s12">
                    <input id="email" type="email" name="email" class="validate" value="" readonly onfocus="this.removeAttribute('readonly');">
                    <label for="email">E-postadress</label>
                </div>
                <div class="input-field col s12">
                    <input id="password" type="password" name="password" class="validate" value="" readonly onfocus="this.removeAttribute('readonly');">
                    <label for="password">Lösenord</label>
                </div>
            </div>
            <div class="row center">
                <div class="col s12 center">
                    <button type="submit" name="signin" id="sign-in" class="col s12 waves-effect waves-light btn-large red lighten-2">Logga in</button>
                </div>
            </div>
            <div class="row center">
                <div class="col s12 center">
                    <a href="resetpassword.php" class="white-text link" id="quickstart-password-reset" name="verify-email">Glömt lösenord?</a>
                </div>
            </div>
            <br>
            <div class="row">
                <div class="col s12 center">
                    <p class="center white-text">Har du inget konto?</p>
                    <a class="waves-effect waves-light btn red lighten-2" href='register.php'>SKAPA KONTO</a>
                </div>
            </div>

        </form>

    </div>
</div>

<?php include 'includes/footer.php' ?>
<script src="assets/js/auth/index.js"></script>