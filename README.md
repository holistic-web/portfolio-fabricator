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
	type: 'object',
	fields: {
		name: {
			type: 'object',
			fields: {
				first: { type: 'string', required: 'true' },
				last: { type: 'string', required: 'true' }
			}
		},
		profession: { type: 'string', required: 'true' },
		profileImage: { type: 'string', required: 'true' },
		aboutMe: { type: 'string', required: 'true' },
		contact: {
			type: 'object',
			fields: {
				email: { type: 'string', required: 'true' },
				telephone: { type: 'string' }
			}
		},
		education: [
			type: 'array', 
			{
				type: 'object',
				fields: {
					 institution: { type: 'string', required: 'true' },
					 date: { type: 'string', required: 'true' },
					 qualifications: [
					 type: 'array',
						{ type: 'string', required: 'true' }
					 ]
				}
			}
		],
		experience: [
		type: 'array',
			{
				type: 'object',
				fields: {
					date: { type: 'string', required: 'true' },
					company: { type: 'string', required: 'true' },
					role: { type: 'string', required: 'true' },
					description: { type: 'string', required: 'true' },
					projects: [
						type: 'array',
						{ type: 'string', required: 'true' }
					]
				}
			}  
		],
		externalProfiles: {
			type: 'object',
			fields: {
				github: { type: 'string' },
				linkedIn: { type: 'string' },
				stackOverflow: { type: 'string' }
			}
		}
	}
}
```

## Roadmap
- generate a pdf CV from the data provided
