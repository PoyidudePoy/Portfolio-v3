// src/hooks/useContactForm.js
import { useState } from 'react';

export function useContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });  // creating the form...
  const [isSubmitting, setIsSubmitting] = useState(false);  // useState to Use
  const [isSuccess, setIsSuccess] = useState(false);

  // Handle typing in the inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);


    // Simulating a network request for now
    setTimeout(() => {
      console.log("Form Submitted:", formData);
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset form after submitting it
      setFormData({ name: '', email: '', message: '' });
      
      // hide the success message..
      setTimeout(() => setIsSuccess(false), 3000);
    }, 1000);
  };

  return {
    formData,
    isSubmitting,
    isSuccess,
    handleChange,
    handleSubmit
  };
}