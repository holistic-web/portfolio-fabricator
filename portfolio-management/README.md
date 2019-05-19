# Portfolio Management
This is the system to manage the creation of portfolio objects.

This section is in the early stages of development and as such portfolio objects are managed by manually adding them to the database.

## Portfolios
The schema for a portfolio can be found at in [portfolio.schema.json](/portfolio-management/portfolio.schema.json).

## Database
The database is a [Firestore Database](https://firebase.google.com/docs/firestore) and is managed in the [/database](/portfolio-management/database/) folder:
- access rules are defined in [firestore.rules](/portfolio-management/database/firestore.rules)
- index are defined in [firestore.indexes.json](/portfolio-management/database/firestore.indexes.json)
- portfolios are stored in the `/portfolios` collection

### Deploying Changes
To deploy changes to the database:
1. Ensure [Node.js](https://nodejs.org) is installed on the development machine
2. Ensure the firebase tools are available on your command line with `npm install --global firebase-tools`
3. Open a terminal in the `/database` folder
4. Run `firebase deploy` to deploy your changes
