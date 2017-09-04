import React from 'react';

export default ({label, input, meta: {error, touched} }) =>{
  return(
    <div style={label.endsWith('_id') ? {display: 'none'} : {}}>
      <label>{label}</label>
      <input {...input} style={{marginBottom: '5px'}} />
      <div className="red-text field-error">
        { touched && error }
      </div>
    </div>
  );
};
