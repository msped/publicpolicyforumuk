import React, { useState } from 'react';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, subject, body }),
      });

      if (response.ok) {
        setMessage('Message sent successfully!');
        setName('');
        setEmail('');
        setSubject('');
        setBody('');
      } else {
        setMessage('Error sending message. Please try again later.');
      }
    } catch (error) {
      setMessage('Error sending message. Please try again later.');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-2">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-400 px-3 py-2 rounded-md w-full"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-2">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-400 px-3 py-2 rounded-md w-full"
            required
          />
        </div>
        <div>
          <label htmlFor="subject" className="block mb-2">Subject:</label>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="border border-gray-400 px-3 py-2 rounded-md w-full"
            required
          />
        </div>
        <div>
          <label htmlFor="body" className="block mb-2">Message:</label>
          <textarea
            id="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="border border-gray-400 px-3 py-2 rounded-md w-full"
            rows="5"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Send
        </button>
      </form>
      {message && <p className="mt-4">{message}</p>}
    </div>
  );
};

export default ContactPage;
