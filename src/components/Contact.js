import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [submitting, setSubmitting] = useState(false);
    const [serverError, setServerError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: '' });
        setServerError(null);
        setSuccessMessage(null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        let tempErrors = {};
        if (!formData.name.trim()) {
            tempErrors.name = "Name is required.";
        }
        if (!formData.email.trim()) {
            tempErrors.email = "Email is required.";
        }
        if (!formData.message.trim()) {
            tempErrors.message = "Message is required.";
        }
        if (Object.keys(tempErrors).length > 0) {
            setErrors(tempErrors);
            return;
        }

        setSubmitting(true);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('Failed to submit the form');
            }

            setSuccessMessage('Your message has been sent successfully!');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('Error submitting the form:', error);
            setServerError('Failed to submit the form. Please try again later.');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <section id="contact" className="p-8">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
                {serverError && <div className="text-red-500 mb-4">{serverError}</div>}
                {successMessage && <div className="text-green-500 mb-4">{successMessage}</div>}
                <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
                    />
                    {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
                        required
                    />
                    {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        className="block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
                        required
                    />
                    {errors.message && <p className="text-red-500 text-xs">{errors.message}</p>}
                    <button
                        type="submit"
                        className="bg-black text-white font-bold py-2 px-4 rounded hover:bg-opacity-90"
                        disabled={submitting}
                    >
                        {submitting ? 'Submitting...' : 'Send Message'}
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Contact;
