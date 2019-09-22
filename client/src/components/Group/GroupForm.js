import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import MultiSelect from './MultiSelect';

class GroupForm extends React.Component {
  constructor() {
    super()
    this.state = {
      groupTypes:[],
      groupType:'',
      groupMembers:[]
    }
  }
  render() {
    return (
      <div>
        <Formik
          initialValues={{ email: '', password: '' }}
          validate={values => {
            let errors = {};
            if (!values.email) {
              errors.email = 'Email Required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <label>
                Email:
                </label>
              <Field type="email" name="email" />
              <br />
              <ErrorMessage name="email" component="div" />
              <label>
                Password:
                </label>
              <Field type="password" name="password" />
              <br/>
              <ErrorMessage name="password" component="div" />
              <MultiSelect/>
              <br/>
              <button type="submit" disabled={isSubmitting}>
                Submit
          </button>
            </Form>
          )}
        </Formik>
      </div>
    )
  }
}

export default GroupForm