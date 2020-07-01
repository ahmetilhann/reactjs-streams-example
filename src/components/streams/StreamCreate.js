import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends Component {

  renderInput(formProps) {
    console.log(formProps);
    return (
      <div className="field">
        <label>{formProps.label}</label>
        <input {...formProps.input} autoComplete="off" />
        <div>{formProps.meta.error}</div>
      </div>
    )
  }

  onSubmit(formValues) {
    console.log(formValues);
  }

  render() {
    return (
      <form className="ui form" onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field name="title" component={this.renderInput} label="Enter title" />
        <Field name="description" component={this.renderInput} label="Enter description" />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};

  if (!formValues.title) {
    errors.title = 'You must be enter title';
  }

  if (!formValues.description) {
    errors.description = 'You must be enter description';
  }

  return errors;
}

export default reduxForm({
  form: 'streamCreate',
  validate,
})(StreamCreate);