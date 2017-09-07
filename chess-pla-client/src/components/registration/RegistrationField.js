import React from 'react';

export default ({label, input, meta: {error, touched} }) =>{
  return(
    <div style={label.endsWith('_id') ? {display: 'none'} : {}}>
      <label
        style={{fontSize: '15px', margin: '5px 10px'}}
      >
        {label}
      </label>
      <input
        {...input}
        style={{marginBottom: '10px'}}
      />
      <div
        className="red-text field-error"
        style={{margin: '0px 5px'}}
      >
        { touched && error }
      </div>
    </div>
  );
};
