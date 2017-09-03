import React from 'react';
import { reduxForm, Field } from 'redux-form';
import RegistrationField from './RegistrationField';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import * as actions from '../../actions';

const FIELDS = [
  {label: "First Name", name: "first_name", type: "text"},
  {label: "Last Name", name: "last_name", type: "text"},
  {label: "Alias", name: "alias", type: "text"},
  {label: "Birthday (YYYY-MM-DD)", name: "birthday", type: "date"},
  {label: "Session", name: "session_id", type: "number"}
];

const renderFields = () => {
  return _.map(FIELDS, ({ label, name, type }) => {
    return<Field key={ name } component={ RegistrationField } type={ type } label={ label } name={ name }/>
  })

}

const PlayerForm = props => {
  return (
    <div className="row">
      <form className="col s6" onSubmit={props.handleSubmit}>
        {renderFields()}
        <Link to="/" className="red btn-flat white-text">
          Cancel
        </Link>
       <button type="submit" className="teal btn-flat right white-text">
          Add Player
          <i className="material-icons right">done</i>
        </button>
      </form>
    </div>
  );
}

function validate(values){
  const errors = {};
  _.each(FIELDS, ({name, label}) => {
    if(!values[name]){
      errors[name] = label + " is required."
    }
  })
  return errors;
}

export default reduxForm({
  validate,
  form: 'playerForm',
  actions: actions
})(PlayerForm);
