# Known Issues

- In our cloud function `sendEmail` we can't set the sender of the email to anyone but the transport account (`holistic.web.mailer@gmail.com`)

- we have buefy and bootstrap vue mixed, lets resolve that

- 'index.js' is not resolved as the default file in the project (at least for management UI)

- when developing the fabricated ui locally we have to account for the url not containing a valid id