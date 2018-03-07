import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {validate} from './FormValidation';
import {renderField} from './RenderField';
import styles from './PortfolioForm.css';

class PortfolioForm extends React.Component{
	render(){
		const { handleSubmit, pristine, reset, submitting, invalid } = this.props;
		return(
			<section>
				<div className="container">
					<div className="row d-flex justify-content-center">
						<div className="col-sm-8">
							<article className={styles.heading}>3. Portfolio</article> <hr/>
							<article className={styles['portfolio-title']}>
                                Prove you're IBM's next great designer by showing us who you are. What you've done. How you think. Tell us your story
							</article>
							<form onSubmit={handleSubmit}>
								<Field name="portfoliolink" component={renderField} placeholder="Portfolio link*" type="text" className={styles['portfolio-link']} />
								<Field name="comment" component={renderField} className={styles['portfolio-textarea']} placeholder="Anything else(another link, availability, etc)?" type="textarea" />
								<button type="submit" className={`${styles.button} btn btn-primary`} disabled={invalid || pristine || submitting}>Submit</button>
								<button type="button" disabled={pristine || submitting} onClick={reset} className={`${styles.button} btn btn-mdb-color`}>Reset</button>
							</form>
							
						</div>
					</div>
				</div>
			</section>
		);
	}
}
export default reduxForm({
	form: 'portfolioForm',
	validate
})(PortfolioForm);