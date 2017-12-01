// Check if logged in
firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser && firebaseUser.emailVerified) {

    	// Get email name
    	$('#email').html(firebaseUser.email);

    } else if (window.location.href == 'index.php') {
        // No user is signed in.
    } else {
        window.location.href = 'index.php';
    }
});