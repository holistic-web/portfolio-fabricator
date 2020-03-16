# Database
The configuration files for our Firestore hosted database.

## Factsheet
| **Key**      | **Value**                             |
|--------------|---------------------------------------|
| Project Type | Firestore database                    |

## Contents
- access rules are defined in [firestore.rules](/database/firestore.rules)
- index are defined in [firestore.indexes.json](/database/firestore.indexes.json)
- portfolios are stored in the `/portfolios` collection

### Deploying Configuration
To deploy a new database configuration you must have firebase-tools installed globally. Simply run the following from this folder:
```bash
firebase deploy
```