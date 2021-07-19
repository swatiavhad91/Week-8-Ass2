import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { load as loadAccount } from './account';
import img1 from "../src/Female_Card.png"
import img2 from "../src/Male_Card.png"
import store from './store';


const data = {
  
username: '',
gender:''
 
};

let InitializeFromStateForm = props => {
  const { handleSubmit, load, pristine, reset, submitting } = props;
  return (

    <form onSubmit={handleSubmit}>
     
      <div>
        <label>Username</label>
        <div>
          <Field
            name="username"
            component="input"
            type="text"
            placeholder="username"
          />
        </div>
      </div>
      
       <div>
        <label>Gender</label>
        <div>
          <label>
            <Field name="gender" component="input" type="radio" value="male" />
            {' '}
            Male
          </label>
          <label>
            <Field name="gender" component="input" type="radio" value="female" />
            {' '}
            Female
          </label>
        </div>
      </div>
     
      <div>
        <button type="submit" >Submit</button>
        <button type="button" onClick={reset}>
          Reset
        </button>
      </div>
    
    </form>
    
  );
  
};

InitializeFromStateForm = reduxForm({
  form: 'initializeFromState', 
})(InitializeFromStateForm);


InitializeFromStateForm = connect(
  state => ({
    initialValues: state.account.data,  

  }
  ),
  { load: loadAccount }, 
)(InitializeFromStateForm);



export default InitializeFromStateForm;
