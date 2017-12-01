/* Reset password */
$('#reset-password').on('click', function (e) {
    e.preventDefault();
	
	var data = {
		email: $('#email').val(), //get the email from Form
    };
  
	if( data.email != '' ) {

		firebase.auth().sendPasswordResetEmail(data.email).then(function(user) {
		    $('.reset-container').addClass('hide');
		    $('.reset-complete-container').removeClass('hide');
		}, function(error) {
			// An error happened.
	        $('#message').html('<p class="alert"><i class="material-icons">&#xE626;</i> Ogiltig e-postadress</p>');
		});
	   	
	} else {
	   //password and confirm password didn't match
	   $('#message').html('<p class="alert"><i class="material-icons">&#xE626;</i> Ogiltig e-postadress</p>');
	}
     
});
