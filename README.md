# Portfolio Fabricator
This is a tool to allow users to store their personal information (i.e. education, work experience) in a single location and easily export it to other sources.

![preview](/.project/images/preview.png)

## Factsheet
| **Key**          | **Value**                                             |
|------------------|-------------------------------------------------------|
| Live URL         | https://portfolio-administration.web.app              |
| Firebase Project | portfolio-fabricator                                  |
| Roadmap          | [.project/roadmap.md](/.project/roadmap.md)           |
| Known Issues     | [.project/known-issues.md](/.project/known-issues.md) |

## Contents

### Cloud Functions
Firebase cloud functions to provide support for other services. More info can be found in [cloud-functions](/cloud-functions).

### Database
Configurations, indexes and schemas required by the Firestore databse. More infor can be found in [database](/database).

### Fabricated Website
A web app that renders a user's website based on an ID provided in the url. More info can be found in [fabricated-website](/fabricated-website).

### Admin UI
A web app to manage portfolio objects. More info can be found in [admin-ui](/admin-ui).