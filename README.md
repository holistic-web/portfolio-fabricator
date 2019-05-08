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

```
{
	type: "object",
	fields: {
		name: {
			type: "object",
			fields: {
				first: {type: "string", required} // 'Michael',
				last: {type: "string", required} // 'Fitzhavey'
			}
		},
		profession: {type: "string", required} // 'Developer',
		profileImage: {type: "string", required} // 'https://i.imgur.com/Pm8kKel.jpg',
		aboutMe: {type: "string", required} // 'Full Stack developer based in London. Specialising in Node.js, Firebase & Vue. I use agile development methods and cutting edge web technonology to deliver rapid results.',
		contact: {
			type: "object",
			fields: {
				email: {type: "string", required} // 'michael@fitzhavey.com',
				telephone: {type: "string"} // '+123456789'
			}
		},
		education: [
			type: "array", 
			{
				type: "object",
				fields: {
					 institution: {type: "string", required} // 'westminster school',
					 date: {type: "string", required} // '2012-2015',
					 qualifications: [
					 type: "array",
						{type: "string", required} // 'GCSE maths: A'
					 ]
				}
			}
		],
		experience: [
		type: "array",
			{
				type: "object",
				fields: {
					date: {type: "string", required} // 'March 2015 - Present',
					company: {type: "string", required} // 'Alphabet inc',
					role: {type: "string", required} // 'Full Stack Devops Engineer X Power Ranger',
					description: {type: "string", required} // 'I maintained over 50 websites managing...',
					projects: [
						type: "array",
						{type: "string", required} // 'I did this thing in javascript for that reason'
					]
				}
			}  
		],
		externalProfiles: {
			type: "object",
			fields: {
				github: {type: "string"} // 'michaelfitzhavey',
				linkedIn: {type: "string"} // 'whatevertheurlis',
				stackOverflow: {type: "string"} // 'michaelfitzhavey'
			}
		}
	}
}
```
## Roadmap
- generate a pdf CV from the data provided
