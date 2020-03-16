# Cloud Functions
We use cloud functions to as to provide support for our services. Follow the documentation [here](https://firebase.google.com/docs/functions/auth-events).

## Factsheet
| **Key**      | **Value**                             |
|--------------|---------------------------------------|
| Project Type | Firebase Cloud Functions              |

## Contents

### `setUpNewAccount`
This function creates a portfolio and a website object under a user's `uid`. It's triggered whenever a new user signs up to our service.

### `sendEmail`
This is a callable function that sends an email using nodemailer. It uses the gmail account `holistic.web.mailer@gmail.com` and the password is set as an environment variable in firebase.

## Deployment
Functions can be deployed with the following commands from this folder:
```bash
cd functions
npm install
cd ..
firebase deploy
```