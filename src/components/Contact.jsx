import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showStatus, setShowStatus] = useState(false);
    const [statusMessage, setStatusMessage] = useState('');
    const [statusType, setStatusType] = useState('success');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatusMessage('');

        try {
            const response = await fetch('https://portfolio-backend-mu-lemon.vercel.app/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (data.success) {
                setStatusType('success');
                setStatusMessage('✓ ' + data.message);
                setShowStatus(true);
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                setStatusType('error');
                setStatusMessage('❌ ' + data.message);
                setShowStatus(true);
            }
        } catch (error) {
            console.error('Submission error:', error);
            setStatusType('error');
            setStatusMessage('❌ Failed to send message. Please try again.');
            setShowStatus(true);
        } finally {
            setIsSubmitting(false);
            setTimeout(() => {
                setShowStatus(false);
            }, 5000);
        }
    };

    return (
        <section id="contact">
            <div className="section-container">
                <div className="section-header">
                    <h2 className="section-title">Get In Touch</h2>
                    <p className="section-subtitle">Let's create something amazing together</p>
                </div>
                <div className="contact-container">
                    {/* Contact Info (Left Column) */}
                    <div className="contact-info">
                        <div className="info-card">
                            <div className="info-icon">📧</div>
                            <div className="info-content">
                                <h3>Email</h3>
                                <p>maheshkotkar2005@gmail.com</p>
                            </div>
                        </div>
                        <div className="info-card">
                            <div className="info-icon">📞</div>
                            <div className="info-content">
                                <h3>Phone</h3>
                                <p>+91 9322685779</p>
                            </div>
                        </div>
                        <div className="info-card">
                            <div className="info-icon">📍</div>
                            <div className="info-content">
                                <h3>Location</h3>
                                <p>Pune, Maharashtra, India</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form (Right Column) */}
                    <form className="contact-form" id="contactForm" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Your Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                placeholder="Enter your name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Your Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="subject">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                required
                                placeholder="Enter subject"
                                value={formData.subject}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Your Message</label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                placeholder="Enter your message"
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="form-submit"
                            id="formSubmit"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>
                        <div className={`form-status ${statusType} ${showStatus ? 'show' : ''}`} id="formStatus">
                            {statusMessage}
                        </div>
                    </form>
                </div>
                <div className="social-links">
                    <a href="https://github.com/MaheshKotkar/" className="social-link" title="GitHub"><i
                        className="devicon-github-original"></i></a>
                    <a href="www.linkedin.com/in/mahesh-kotkar-50537732a" className="social-link" title="LinkedIn"><i
                        className="devicon-linkedin-plain"></i></a>
                    <a href="https://wa.me/919322685779?text=Hi%20Mahesh!%20I%20visited%20your%20portfolio%20and%20would%20love%20to%20connect%20with%20you." className="social-link" title="WhatsApp" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.171.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.101-.177.211-.076.383.101.173.449.741.964 1.201.662.591 1.221.774 1.394.86.173.088.274.072.376-.043l.419-.578c.101-.144.202-.123.332-.072.13.051.824.39.967.462s.239.108.274.174c.036.065.036.376-.108.781z" />
                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.981-3.584c-.614-1.062-.934-2.269-.933-3.483.002-3.857 3.141-6.992 7.003-6.992 1.868 0 3.625.728 4.942 2.05s2.046 3.077 2.045 4.948c-.003 3.858-3.141 6.991-6.993 6.991z" />
                        </svg>
                    </a>
                    <a href="mailto:maheshkotkar@gmail.com" className="social-link" title="Email">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                            <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
