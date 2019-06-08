const functions = require('firebase-functions');
const admin = require('firebase-admin');

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.createPortfolioOnNewAccount = functions.auth.user().onCreate(async (user) => {
	const uid = user.uid;
	const email = user.email;
	console.log('uid: ', uid);
	const portfolioCollection = admin.firestore().collection('portfolios');
	console.log('portfolioCollection: ', portfolioCollection);
	await portfolioCollection.doc(uid).set({
		contact: {
			email: useremail
		}
	});
	console.log('done');
});
