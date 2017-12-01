$('#sign-in').on('click', function (e) {
    e.preventDefault();

    if( $('#email').val() != '' && $('#password').val() != '' ){
        //login the user
        var data = {
            email: $('#email').val(),
            password: $('#password').val()
        };

        firebase.auth().signInWithEmailAndPassword(data.email, data.password)
        .then(function(authData) {
            if (authData.emailVerified) {
                console.log("Authenticated successfully with payload:", authData);
                auth = authData;
                window.location = 'app.php';
            } else {
                $('#message').html('<p class="alert"><i class="material-icons">&#xE626;</i> Kontot är inte aktiverat</p><div class="row center"> <div class="col s12 center"> <button type="submit" onclick=window.location.href="activate.php" name="activate" id="activate" class="col s12 waves-effect waves-light btn-large red lighten-2">Aktivera konto</button></div></div>');
            }
        })
        .catch(function(error) {
            console.log("Login Failed!", error);
            $('#message').html('<p class="alert"><i class="material-icons">&#xE626;</i> Fel användarnamn eller lösenord</p>');
        });
    }
});


$('#sign-out').click(function(e) {
    e.preventDefault();
    firebase.auth().signOut().then(function() {
        window.location = 'index.php';
    }).catch(function(error) {
        // An error happened.
    });
});