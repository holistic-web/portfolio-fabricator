# Portfolio Fabricator

This is a project to allow users to store their personal information (i.e. education, work experience) in a single location and easily export it to other sources. Along with that it also creates a website and can generate a CV from this information **[IN PROGRESS]**.

## Project Rules
- **Branch Protection Rules:** review requests are required to push to `master`
- **Code Style:** follow the .editorconfig and eslint rules provided, always imitate the code already in the project
- **Pull Requests:** clearly describe the work that is being done and why it's needed in the PR description
- **Issues:** after ensuring an issue doesn't already exist, raise one for any discussion point / improvement

## UI
The UI is written in Vue.js. The admin section is currently in development and the site currently displays static data for an example context object.

## Backend
The Back end is a firebase project as is currently in development. Please raise an issue if you'd like access.

## Data schema

`{
    name: {
        first: required string // 'Michael',
        last: required string // 'Fitzhavey'
    },
    profession: required string // 'Developer',
    profileImage: string // 'https://i.imgur.com/Pm8kKel.jpg',
    aboutMe: required string // 'Full Stack developer based in London. Specialising in Node.js, Firebase & Vue. I use agile development methods and cutting edge web technonology to deliver rapid results.',
    contact: {
        email: required string // 'michael@fitzhavey.com',
        telephone: optional string // '+123456789'
    },
    education: [
        {
             institution: required string // 'westminster school',
             date: required string // '2012-2015'
             qualifications: [
                 required string // 'GCSE maths: A'
             ]
        }
    ],
    experience: [
        {
             date: required string // 'March 2015 - Present',
             company: required string // 'Alphabet inc',
             role: required string // 'Full Stack Devops Engineer X Power Ranger',
             description: required string // 'I maintained over 50 websites managing...',
             projects: [
                required string // 'I did this thing in javascript for that reason'
             ]
        }  
    ]
    externalProfiles: {
        github: optional string: // 'michaelfitzhavey',
        linkedIn: optional string: // 'whatevertheurlis',
        stackOverflow: optional string: // 'michaelfitzhavey'
   }
}`

## Roadmap
- generate a pdf CV from the data provided
