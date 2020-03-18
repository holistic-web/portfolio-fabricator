# Portfolio Manager
Portfolio Manager that allows a user to build a portfolio object to generate the site for the `[/fabricated-website]([/fabricated-website)` section of this project.

![preview](/.project/images/preview-management-ui.png)

## Factsheet
| **Key**      | **Value**                                |
|--------------|------------------------------------------|
| Project Type | Vue.js web app                           |
| Live URL     | https://portfolio-administration.web.app |


We use [`vue-json-schema-form`](https://www.npmjs.com/package/vue-json-schema-form) to generate the portfolio form.

## Development
To develop for this project:
1. Install dependencies
	```
	npm install
	```
2. Host the project locally in development mode
	```
	npm run serve
	```

## Deployment
Deployment will soon be handled by our github workflow on push to the master branch.

Manual deployment is not recommended but in case we ever need to do the following on a machine with the firebase cli installed.

1. Build the project
	```
	npm run build
	```
2. Deploy the project
	```
	firebase deploy


## Notes and Caveats
- We use [`vue-json-schema-form`](https://www.npmjs.com/package/vue-json-schema-form) to generate the portfolio form.