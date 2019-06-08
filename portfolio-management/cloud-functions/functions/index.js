const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.createPortfolioOnNewAccount = functions.auth.user().onCreate(async (user) => {
	const uid = user.uid;
	const email = user.email;
	const portfolioCollection = admin.firestore().collection('portfolios');
	await portfolioCollection.doc(uid).set({
		contact: {
			email: email
		}
	});
});
