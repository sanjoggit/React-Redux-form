import validator from 'validator';


export const validate = values =>{
	const errors = {};
	if (!values.fullname){
		errors.fullname = 'Required';		
	} else if(values.fullname.length >30){
		errors.fullname = 'Must be 30 characters or less';
	}
	if (!values.email) {
		errors.email = 'Required';
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = 'Invalid email address';
	}
	if(!values.phone){
		errors.phone = 'Required';
	} else if(!/^(\+|0)\d{9,12}$/.test(values.phone)){
		errors.phone = 'not valid';
	}
	if(!values.address1){
		errors.address1 = 'Required';
	}
	if(!values.city){
		errors.city = 'Required';
	}
	if(!values.country){
		errors.country = 'Required';
	}
	if(!values.skills){
		errors.skills = 'Required';
	}
	if(!values.portfoliolink){
		errors.portfoliolink = 'Required';
	} else if(!validator.isURL(values.portfoliolink)){
		errors.portfoliolink = 'Link not valid';
	}
	
	return errors;
};
