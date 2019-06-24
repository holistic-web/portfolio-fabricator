## Database
The database is a [Firestore Database](https://firebase.google.com/docs/firestore) and is managed in the [/database](/portfolio-management/database/) folder:
- access rules are defined in [firestore.rules](/portfolio-management/database/firestore.rules)
- index are defined in [firestore.indexes.json](/portfolio-management/database/firestore.indexes.json)
- portfolios are stored in the `/portfolios` collection

### Deploying Changes
To deploy changes to the database config:
1. Ensure the firebase tools are available on your command line with `npm install --global firebase-tools`
2. Open a terminal in this folder (`/database`)
3. Run `firebase deploy` to deploy your changes
