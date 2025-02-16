"use client"
import { useState } from 'react';
import emailjs from 'emailjs-com';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  });

  const [statusMessage, setStatusMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    setStatusMessage('Sending...');
 
    emailjs
  .send(
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
    {
      from_name: `${formData.firstName} ${formData.lastName}`,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    },
    process.env.NEXT_PUBLIC_EMAILJS_USER_ID
  )

      .then(
        () => {
          setStatusMessage('Message sent successfully!');
          setIsSubmitting(false);
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            subject: '',
            message: '',
          });
        },
        (error) => {
          console.error('Error sending email:', error);
          setStatusMessage(`Error sending message: ${error.text || error.message}`);
          setIsSubmitting(false);
        }
      );
  };

  return (
    <>
      <Header />  

      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-16 flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-6xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-2xl text-gray-600 mb-6 lg:max-w-sm lg:w-full">
            Have a question or need assistance? Fill out the form below, and our expert team will reach out swiftly to provide the support you deserve.
          </p>
        </div>

        <div className="lg:w-1/2 bg-white shadow-lg p-8 w-full max-w-lg">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="First Name"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                required
                className="flex-1 bg-gray-100 p-3 rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FFB300]"
              />
              <input
                type="text"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                required
                className="flex-1 bg-gray-100 p-3 rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FFB300]"
              />
            </div>
            <input
              type="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="w-full bg-gray-100 p-3 rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FFB300]"
            />
            <input
              type="text"
              placeholder="Subject"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              required
              className="w-full bg-gray-100 p-3 rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FFB300]"
            />
            <textarea
              placeholder="Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              className="w-full bg-gray-100 p-3 rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FFB300]"
              rows="5"
            ></textarea>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#FFB300] text-black font-semibold py-3 rounded-md hover:bg-[#27273D] hover:text-[#FFB300] transition duration-300"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>

      <Footer />  {/* Include your Footer component here */}
    </>
  );
}
