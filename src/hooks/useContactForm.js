import { useState } from 'react';
import emailjs from '@emailjs/browser';

export function useContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // 👇 PASTE YOUR IDS HERE 👇
      const serviceID = 'service_g32eii4'; 
      const templateID = 'template_d81qv9p';
      const publicKey = 'oL8ZbgcQECpNCmxmh';

      // Send the email
      await emailjs.send(serviceID, templateID, formData, publicKey);

      // Show success message
      setIsSuccess(true);
      setFormData({ name: '', email: '', message: '' }); 
      
      setTimeout(() => setIsSuccess(false), 5000);

    } catch (error) {
      console.error('Failed to send email:', error);
      alert('Oops! Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    isSubmitting,
    isSuccess,
    handleChange,
    handleSubmit
  };
}