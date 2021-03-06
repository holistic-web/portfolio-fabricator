const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
admin.initializeApp(functions.config().firebase);

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.setUpNewAccount = functions.auth.user().onCreate(async (user) => {
	console.log('> setUpNewAccount called with: ' + JSON.stringify(user, null, 4));
	const uid = user.uid;

	// create the portfolio object
	const email = user.email;
	const portfolioCollection = admin.firestore().collection('portfolios');
	await portfolioCollection.doc(uid).set({
		name: {
			first: null,
			last: null
		},
		profession: null,
		aboutMe: null,
		profileImageUrl: null,
		contact: {
			email: email,
			telephone: null
		},
		externalProfiles: {},
		education: [],
		experience: []
	});

	// create the website settings object
	const websiteCollection = admin.firestore().collection('websites');
	await websiteCollection.doc(uid).set({
		settings: {
			showContactForm: true
		}
	});

});

exports.sendEmail = functions.https.onCall(async (emailData, context) => {
	console.log('> sendEmail called with: ' + JSON.stringify(emailData, null, 4));
	const { message, name, senderEmail, receiptEmail } = emailData;
	const email = functions.config().email;

	const mailTransport = nodemailer.createTransport({
		service: 'gmail',
		auth: {
		  user: email.address,
		  pass: email.password
		}
	});

	const mailOptions = {
		from: `${name} <${senderEmail}>`,
		to: receiptEmail,
		subject: `Email on your portoflio website from ${name}`,
		text: message
	};

	await mailTransport.sendMail(mailOptions);
	return 'success'
});