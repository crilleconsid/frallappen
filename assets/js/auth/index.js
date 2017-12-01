// Check if logged in
firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser && firebaseUser.emailVerified) {

    	if ( window.location.pathname == '/frallappen/app.php' ) {
    		// Go to loginpage if already logged in

	    	// Get email name
	    	$('#email').html(firebaseUser.email);
    		
    	} else {
	    	window.location.pathname = '/frallappen/app.php';
    	}

    } else if (window.location.pathname == '/frallappen/index.php') {
        // // Go to loginpage if already logged in
    } else {
        window.location.pathname = '/frallappen/index.php';
    }
});