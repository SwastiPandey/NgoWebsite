
import React, { useState } from 'react';
import './ContactForm.css'; 


const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    query: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // You can dispatch an action or make an API call here
    // Reset form data if needed
    setFormData({ name: '', email: '', subject: '', query: '' });
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>
        <span>Name:</span>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      <label>
        <span>Email:</span>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </label>
      <label>
        <span>Subject:</span>
        <input type="text" name="subject" value={formData.subject} onChange={handleChange} />
      </label>
      <label>
        <span>Query:</span>
        <textarea name="query" value={formData.query} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
