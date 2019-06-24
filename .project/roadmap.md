# Roadmap

## Fabricated Website

- could use a default layout component

- pre render the fabricated website to static files with a tool like Nuxt.js

- support displaying the fabricated website on custom urls

- Let a user customise the site's appearance further
	- Let user add text in markdown
	- Let a custom vue component be rendered in the site
	- Allow the user to choose the site colours

- get information required for fabricated website from single firebase function

## Admin UI

- store messages sent to user in a database and provide inbox and notification functionality

- toasts should be abstracted behind a toastservice

- we seem to be using the same stores in multiple UIs. Maybe it's worth keeping these in a centralised location

## Cloud Functions
- for setUpNewAccount we should keep the default values for portfolio and website objects in their own files

## Other Services

- generate a pdf CV from the portfolio

- generate business cards from the portfolio

- import and export data to / from portfolio objects and third parts (i.e. linkedIn)

- build some form of job oppurtinities dashboard
