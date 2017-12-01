//Activate
$('#activate').on('click', function (e) {
     e.preventDefault();
          var data = {
          email: $('#email').val(), //get the email from Form
     };
     if( data.email != '' ) {
          //create the user

          firebase.auth().sendEmailVerification(data.email).then(function(user) {
               console.log('Skickats');
               //user.sendEmailVerification(); 
          }).catch(function(error){
               console.log("Error creating user:", error);
               $('#message').html('<p class="alert"><i class="material-icons">&#xE626;</i> Ogiltig e-postadress</p>');
          });
     } else {
          //password and confirm password didn't match
          $('#message').html('<p class="alert"><i class="material-icons">&#xE626;</i> Ogiltig e-postadress</p>');
     }

});