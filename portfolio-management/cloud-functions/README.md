# Cloud Functions

We currently have one cloud function to create an empty portfolio object when a user creates their account. It follows the documentation [here](https://firebase.google.com/docs/functions/auth-events).

## Functions

### `createPortfolioOnNewAccount`
This function creates a portfolio object under a user's `uid`. It's triggered whenever a new user sign's up to our service.

### `sendEmail`
This is a callable function that sends an email using nodemailer. It uses the gmail account `holistic.web.mailer@gmail.com` and the password is set as an environment variable in firebase.

## Deploying Functions
Functions can be deployed by:
1. intalling dependencies in the `/functions` folder inside of this one
2. navigating back to this folder `/cloud-functions` and running `firebase deploy`