import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const LoginForm = () => {
  // Define the initial form values
  const initialValues = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  };

  // Define the validation schema using Yup
  const validationSchema = Yup.object({
    firstname: Yup.string()
    .firstname('Invalid first name')
    .required('Required'),
      lastname: Yup.string()
      .lastname('Invalid last name')
      .required('Required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Required'),
  });

  // Function to handle form submission
  const handleSubmit = (values, { setSubmitting }) => {
    // You can perform your login logic here
    console.log('Submitted:', values);
    setSubmitting(false);
  };

  return (
    <div>
      <h1>Login</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
            <label htmlFor="firstname">FirstName</label>
              <Field type="text" id="firstname" name="firstname" />
              <ErrorMessage name="firstname" component="div" className="error" />
            </div>
            <div>
            <label htmlFor="lastname">LastName</label>
              <Field type="text" id="lastname" name="lastname" />
              <ErrorMessage name="last
              name" component="div" className="error" />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <Field type="text" id="email" name="email" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <Field type="password" id="password" name="password" />
              <ErrorMessage name="password" component="div" className="error" />
            </div>

            <div>
              <button type="submit" disabled={isSubmitting}>
                Login
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
