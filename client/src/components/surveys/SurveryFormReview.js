import React from 'react';
import { connect } from 'react-redux';

import formFields from './formFields';
import { submitSurvey } from '../../actions';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey }) => {
	const reviewFields = formFields.map(({ label, name }) => {
		return (
			<div key={name}>
				<label>{label}</label>
				<div>{formValues[name]}</div>
			</div>
		);
	});

	return (
		<div>
			<h5>Please confirm your entries</h5>
			<div className="section">{reviewFields}</div>
			<button
				className="yellow darken-3 btn-flat white-text"
				onClick={onCancel}
			>
				Back
			</button>
			<button
				className="green btn-flat white-text right"
				onClick={() => submitSurvey(formValues)}
			>
				Send Survey
				<i className="material-icons right">email</i>
			</button>
		</div>
	);
};

const mapStateToProps = state => {
	return { formValues: state.form.surveyForm.values };
};

export default connect(
	mapStateToProps,
	{ submitSurvey }
)(SurveyFormReview);
