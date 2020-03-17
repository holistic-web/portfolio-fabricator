import SchemaForm from 'formvuelatte';
import { FormInput, FormTextArea } from '../management-ui/src/components/form/';

export default {
	schema: {
		name: {
			component: SchemaForm,
			schema: {
				firstName: {
					component: FormInput,
					label: "Your first name",
					required: true
				},
				lastName: {
					component: FormInput,
					label: "Your last name",
					required: true
				},
			}
		},
		profession: {
			component: FormInput,
			label: "Your profession",
			reqiured: true
		},
		aboutMe: {
			component: FormTextArea,
			label: "A brief description of yourself",
			required: true
		},
		profileImageUrl: {
			component: FormInput,
			label: "Web url to access the provided profile image"
		},
		contact: {
			component: SchemaForm,
			schema: {
				email: {
					component: FormInput,
					label: "Public email address",
					config: {
						type: "email"
					}
				},
				telephone: {
					component: FormInput,
					label: "Public telephone number"
				}
			}
		},
		externalProfiles: {
			component: SchemaForm,
			schema: {
				github: {
					component: FormInput,
					label: "Github profile name"
				},
				linkedIn: {
					component: FormInput,
					label: "LinkedIn profile name"
				},
				stackOverflow: {
					component: FormInput,
					label: "Stack Overflow profile name"
				}
			}
		},
		education: {
			component: SchemaForm,
			schema: {
				institution: {
					component: FormInput,
					label: "Name of the education establishment",
					required: true
				},
				date: {
					component: FormInput,
					label: "When the institution was attended",
					required: true
				},
				qualifications: {
					component: FormInput,
					label: "Qualification achieved at the instution",
					required: true
				}
			}
		},
		experience: {
			component: SchemaForm,
			schema: {
				organisation: {
					component: FormInput,
					label: "Name of the organisation",
					required: true
				},
				date: {
					component: FormInput,
					label: "When work was done with the organisation",
					required: true
				},
				description: {
					component: FormInput,
					label: "Brief description of the role",
					required: true
				},
				projects: {
					component: FormInput,
					label: "Projects worked on at the organisation"
				}
			}
		}
	}
}