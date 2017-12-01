var database = firebase.database();
// Check if email-domain exist in database


//Register
$('#register').on('click', function (e) {
     e.preventDefault();
          var data = {
          email: $('#registerEmail').val(), //get the email from Form
          // firstName: $('#registerFirstName').val(), // get firstName
          // lastName: $('#registerLastName').val(), // get lastName
     };
     var passwords = {
          password : $('#registerPassword').val(), //get the pass from Form
          cPassword : $('#registerConfirmPassword').val(), //get the confirmPass from Form
     }

     dbRef = firebase.database().ref().child('domain');
     dbRef.on("value", function(snapshot) {
          var emailDomains = snapshot.val();      
          str = data.email.split('@').slice(1);
          var allowedDomains = [ emailDomains ];

          if( data.email.indexOf("@") != -1 || data.email.indexOf("@") < 1 ) {
               if ( $.inArray(str[0], allowedDomains) !== -1) {
                    if( data.email != '' && passwords.password != ''  && passwords.cPassword != '' ) {
                         if( passwords.password == passwords.cPassword ) {
                              //create the user
                
                              if (data.email.length < 6) {
                                   $('#message').html('<p class="alert"><i class="material-icons">&#xE626;</i> E-postadressen är för kort</p>');
                
                              } else if (passwords.password.length < 6) {
                                   $('#message').html('<p class="alert"><i class="material-icons">&#xE626;</i> Lösenordet är för kort</p>');
                              } else {
                
                                   firebase.auth()
                                   .createUserWithEmailAndPassword(data.email, passwords.password)
                                   .then(function(user) {
                                        //now user is needed to be logged in to save data
                                        //console.log("Authenticated successfully with payload:", user);
                                        auth = user;
                                        //now saving the profile data
                                        //console.log("Successfully created user account with uid:", user.uid);
                                        $('.register-container').addClass('hide');
                                        $('.register-complete-container').removeClass('hide');
                                        user.sendEmailVerification(); 
                                   })
                
                                   .catch(function(error){
                                        if (error.code == "auth/email-already-in-use") {    
                                             $('#message').html('<p class="alert"><i class="material-icons">&#xE626;</i> E-postadressen är upptagen</p>');
                                        } else {
                                             //console.log("Error creating user:", error.code);
                                             $('#message').html('<p class="alert"><i class="material-icons">&#xE626;</i> Ogiltig e-postadress</p>');
                                        }
                                   });
                              }
                         } else {
                              //password and confirm password didn't match
                              $('#message').html('<p class="alert"><i class="material-icons">&#xE626;</i> Lösenorden stämmer inte överens</p>');
                         }
                    }

               } else {
                    $('#message').html('<p class="alert"><i class="material-icons">&#xE626;</i> Ogiltig e-postadress</p>');
               }
          } else {
               $('#message').html('<p class="alert"><i class="material-icons">&#xE626;</i> Ogiltig e-postadress</p>');
          }
     });
     
});