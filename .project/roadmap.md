# Roadmap

## Tech Debt and Simplification

- replace email with magic firebase automatic email: https://firebase.google.com/products/extensions/firestore-send-email

- for the setUpNewAccount cloud function we should keep the default values for portfolio and website objects in their own files


## Polish and Bufgixes

- currently the generated forms are ugly, we should find a nicer looking solution. Potentially vue-form-latte


## Features and Strategic Work

- allow user to turn off contact form with a config setting like `website.showEmailForm`

- website should be able to be hosted from a specific url (maybe via redirects? or use Github?)

- generate a PDF CV from the user's data

- Let a user customise the site's appearance further
	- Let user add text in markdown
	- Let a custom vue component be rendered in the site
	- Allow the user to choose the site colours


## Long Shots

- pre render a static website when a user changes their settings, using something like Nuxt.

- generate business cards from the portfolio

- import / export data from third parties such as LinkedIn

- integrate with employers to create some form of job opputunities dashboard