# Fabricated Website
A dynamic web app that loads the website for a particular user based on url. It is written in [Vue.js](https://vuejs.org/).

![preview](/.project/images/preview-management-website)

## Factsheet
| **Key**      | **Value**                             |
|--------------|---------------------------------------|
| Project Type | Vue.js web app                        |
| Live URL     | https://actions-codelab-edeb1.web.app |

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

### Routing
The path after the url is used to calculate which portfolio object to load. If it fails it falls back to the default portfolio object, with id: `QfwSbM08eJAmaW9WgWGU`.

### Theming
The colour settings for the site and for Bootstrap components can be found in [/styles/theme.scss](/fabricated-website/src/styles/theme.scss).