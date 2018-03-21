//@flow
import React from 'react';
import {Field, reduxForm} from 'redux-form';
import type { FormProps } from 'redux-form';
import {validate} from './FormValidation';
import {renderField} from './RenderField';
import styles from './BasicForm.css';


class BasicForm extends React.Component<FormProps>{

	render(){
		const { handleSubmit, pristine, reset, submitting, invalid } = this.props;
		return(
			<section>				
				<form onSubmit={handleSubmit}>
					<div className="container">
						<div className="row d-flex justify-content-center">
							<div className="col-sm-8 form-container">
								<article className={styles.heading}>1. Personal Information</article> <hr/>
								<div className="row">
									<div className="col-sm-9">
										<Field name="fullname" component={renderField} placeholder="Full name*" type="text" />
										<Field name="email" component={renderField} placeholder="Email *" type="email" />
										<Field name="reemail" component={renderField} placeholder="Re-enter Email *" type="email" />
									</div>
									<div className="col-sm-3">
										<Field name="phone" component={renderField} placeholder="phone*" type="tel" />
									</div>
								</div>					
								<Field name="address1" component={renderField} placeholder="Address 1*" type="text" className={styles.address1} />
								<Field name="address2" component={renderField} placeholder="Address 2" type="text" />
								<div className="row country-info">
									<div className="col-sm-3">
										<Field name="city" component={renderField} placeholder="city*" type="text" />
									</div>
									<div className="col-sm-3">
										<Field name="state" component={renderField} placeholder="state" type="text" />
									</div>
									<div className="col-sm-3">
										<Field name="country" component={renderField} placeholder="country*" type="text" />
									</div>
									<div className="col-sm-3">
										<Field name="zip" component={renderField} placeholder="zip/postal code" type="text" />
									</div>
								</div>
								<Field name="hear" component={renderField} placeholder="How did you hear about us" type="text" className={styles.hear} />	
								<button type="submit" className={`${styles.button} btn btn-primary`} disabled={invalid || pristine || submitting}>Submit</button>
								<button type="button" disabled={pristine || submitting} onClick={reset} className={`${styles.button} btn btn-mdb-color`}>Reset</button>
							</div>
						</div>
					</div>
				</form>
			</section>
		);
	}
}



export default reduxForm({
	form: 'basicForm',
	validate
}) (BasicForm);