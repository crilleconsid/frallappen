// Initialize Firebase
var config = {
	apiKey: "YOUR API KEY HERE",
	authDomain: "YOUR AUTH DOMAIN HERE",
	databaseURL: "YOUR DATABASE URL HERE",
	projectId: "YOUR PROEJCT ID HERE",
	storageBucket: "YOUR STORAGE HERE",
	messagingSenderId: "YOUR MESSAGE ID HERE"
};

// Check if firebase exist
if (firebase.apps.length === 0) {
    firebase.initializeApp(config);
}