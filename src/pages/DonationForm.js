import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';

const DonationForm = () => {
  const initialValues = {
    name: '',
    email: '',
    donationType: 'cash',
    otherDonation: '',
  };

  const handleSubmit = (values, { setSubmitting }) => {
    // You can handle form submission logic here, e.g., send data to an API

    // Clear the form and reset the form state
    setSubmitting(false);
  };

  return (
    <div>
      <h1>Donation Form</h1>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ values }) => ( // Use render prop to access values
          <Form>
            <div>
              <label htmlFor="name">Name</label>
              <Field type="text" id="name" name="name" />
              <ErrorMessage name="name" component="div" className="error" />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <Field type="email" id="email" name="email" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>

            <div>
              <label>Donation Type</label>
              <Field as="select" name="donationType">
                <option value="cash">Cash</option>
                <option value="clothes">Clothes</option>
                <option value="books">Books</option>
                <option value="other">Other</option>
              </Field>
              <ErrorMessage name="donationType" component="div" className="error" />
            </div>

            {/* Conditional rendering for "Other" donation type */}
            {/* Only displayed when "Other" is selected as the donation type */}
            <div>
              {values.donationType === 'other' && (
                <div>
                  <label htmlFor="otherDonation">Specify Other Donation</label>
                  <Field type="text" id="otherDonation" name="otherDonation" />
                  <ErrorMessage name="otherDonation" component="div" className="error" />
                </div>
              )}
            </div>

            <div>
              <button type="submit">Submit</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default DonationForm;
