const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.createPortfolioOnNewAccount = functions.auth.user().onCreate(async (user) => {
	console.log('> createPortfolioOnNewAccount called with: ' + JSON.stringify(user, null, 4));
	const uid = user.uid;
	const email = user.email;
	const portfolioCollection = admin.firestore().collection('portfolios');
	await portfolioCollection.doc(uid).set({
		contact: {
			email: email
		}
	});
});

exports.sendEmail = functions.https.onCall(async (emailData, context) => {
	console.log('> sendEmail called with: ' + JSON.stringify(emailData, null, 4));
	const { message, name, senderEmail, receiptEmail } = emailData;

	return 'success'
});