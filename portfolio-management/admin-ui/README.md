# admin-ui

![admin-ui](/.project/assets/admin_08_06_19.png)

[https://portfolio-administration.web.app](https://portfolio-administration.web.app)

This is the admin UI that allows a user to build a portfolio object to generate the site for the `[/fabricated-website]([/fabricated-website)` section of this project. It is written using [Vue.js](https://vuejs.org/).

We use [`vue-json-schema-form`](https://www.npmjs.com/package/vue-json-schema-form) to generate the portfolio form.


## Getting Started
To get the project up and running:

1. Ensure [Node.js](https://nodejs.org) is installed on the development machine
2. Open a terminal and change directory to this folder (`/portfolio-management/admin-ui/`)
3. Run `npm install` to install project dependencies
4. Run `npm run serve` to host the project locally
5. If you want to build the project (to deploy it), run `npm run build` and follow the instructions displayed


## Hosting and Deployment
This site is hosted on firebase project 'Portfolio Fabricator'. Raise an issue to gain access if you don't have it already.

It is deployed under the target name `portfolio-administration`, this can be seen in the Firebase Hosting Console.

To deploy the project:
1. Ensure the steps in 'Getting started' all complete succesfully
2. Run `npm run build` from this folder to generate the build
3. Run `firebase deploy` to update the live deployment with the generated build
