// @flow
import React from 'react';
import {Field, reduxForm} from 'redux-form';
import type { FormProps } from 'redux-form';  
import {renderField} from './RenderField';
import {validate} from './FormValidation';
import styles from './SkillForm.css';

type Discipline = {
	label: string,
	id: string
};
type Experiences = {
	name: string,
	label: string,
	id: string
};
type Places = {
	name: string,
	label: string,
	id: string
};
type State = {
	primaryDisciplines: Discipline[],
	experiences: Experiences[],
	places: Places[]
};

class SkillForm extends React.Component<FormProps, State>{
	constructor(props){
		super(props);
		this.state = {
			primaryDisciplines: [
				{label: 'Design Research', id:'design-research'},
				{label: 'Visual Design', id: 'visual-design'},
				{label: 'UX Design', id: 'ux-design'},
				{label: 'Front-end Dev', id: 'front-end'}
			],
			experiences: [
				{name: 'visual design', id: 'vd', label: 'Visual Design'},
				{name: 'ux design', id: 'ud', label: 'UX Design'},
				{name: 'front-end development', id: 'fed', label: 'Front-end Development'}
			],
			places: [
				{name: 'austin texas', id: 'at', label: 'Austin, Texas'},
				{name: 'new york', id: 'ny', label: 'New York, New York'},
				{name: 'toronto canada', id: 'tc', label: 'Toronto, Canada'},
				{name: 'shanghai china', id: 'sc', label: 'Shanghai, China'},
				{name: 'dublin ireland', id: 'di', label: 'Dublin, Ireland'},
				{name: 'hursley', id: 'hy', label: 'Hursley, United Kingdom'},
				{name: 'boeblingen germany', id: 'bg', label: 'Boeblingen, Germany'},
				{name: 'somewhere else', id: 'selse', label: 'Somewhere else'}
			]
		};
	}
	render(){
		
		const { handleSubmit, pristine, reset, submitting, invalid } = this.props;
		const primaryDisciplines = this.state.primaryDisciplines.map((primaryDiscipline, i)=>{
			return(
				<div className="col-sm-3" key={i}>	
					<Field name="skills" id={primaryDiscipline.id} component={renderField} type="radio" className={styles['skill-label']} value={primaryDiscipline.id} label = {primaryDiscipline.label}/>	
				</div>
			);
		});
		const experiences = this.state.experiences.map((experience, i)=>{
			return(
				<div key={i}>
					<Field name={experience.name} id={experience.id} label={experience.label} component={renderField} type="checkbox" />
				</div>				
			);
		});
		const places = this.state.places.map((place, i)=>{
			return(
				<div key={i}>
					<Field name={place.name} id={place.id} label={place.label} component={renderField} type="checkbox" />
				</div>
			);
		});
		return(
			<section>
				<form onSubmit={handleSubmit}>
					<div className="container">
						<div className="row d-flex justify-content-center">
							<div className="col-sm-8">
								<article className={styles.heading}>2. Skills and Location</article> <hr/>
								<article className={styles['input-title']}>Which is your primary design descipline?*</article>
								<div className={`${styles['skill-row']} row`}>
									{primaryDisciplines}
								</div>
								<div className={`row ${styles['experience-place-container']}`}>
									<div className="col-sm-6">
										<article className={styles['discipline-title']}>
											Do you have experience with any other discipline?
										</article>
										<div className={styles['discipline-checkbox']}>
											{experiences}
										</div>
									</div>
									<div className="col-sm-6">
										<article className={styles['places-title']}>Where are you interested in working?*</article>
										<article className={styles['places-subtitle']}>You must be legally authorized to work without visa sponsorship in the location(s) you choose.</article>
										<div className={styles['places-checkbox']}>
											{places}
										</div>
									</div>
								</div>
								
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
	form: 'skillForm',
	validate
})(SkillForm);