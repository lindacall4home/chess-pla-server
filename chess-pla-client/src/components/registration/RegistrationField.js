import React from 'react';

export default ({label, input, meta: {error, touched} }) =>{
  return(
    <div style={label.endsWith('_id') ? {display: 'none'} : {}}>
      <label style={{fontSize: '15px', marginLeft: '10px'}}>{label}</label>
      <input {...input}  />
      <div className="red-text field-error">
        { touched && error }
      </div>
    </div>
  );
};
