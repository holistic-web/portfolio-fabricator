# Cloud Functions

We use cloud functions to as to provide support for our services. Follow the documentation [here](https://firebase.google.com/docs/functions/auth-events).

## Deploying Functions
Functions can be deployed by:
1. intalling dependencies in the `/functions` folder inside of this one
2. navigating back to this folder `/cloud-functions` and running `firebase deploy`

## Functions

### `createPortfolioOnNewAccount`
This function creates a portfolio object under a user's `uid`. It's triggered whenever a new user sign's up to our service.

### `sendEmail`
This is a callable function that sends an email using nodemailer. It uses the gmail account `holistic.web.mailer@gmail.com` and the password is set as an environment variable in firebase.