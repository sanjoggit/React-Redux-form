import React from 'react';

export const renderField = ({
	label,
	input,
	type,
	placeholder,
	className,
	id,
	rows,	
	meta:{touched, error, warning}
})=>{	
	//console.log(input);	
	return(
		<div>
			{type !== 'textarea' ? <input {...input} type={type} placeholder = {placeholder} id={id} className={className} /> :
				<textarea {...input} type={type} placeholder = {placeholder} className={className} rows="15" />}
			{label && <label className={className} htmlFor={id}>{label}</label>}			
			{
				touched && ((error && <div><i className="fas fa-exclamation-circle"></i> <span className="error-message">{error}</span></div> ) || (warning && <span>{warning}</span>))
			}
		</div>
	);
	
};