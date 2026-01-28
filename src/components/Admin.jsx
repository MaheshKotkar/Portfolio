import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Admin.css';

const Admin = () => {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetchContacts();
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('isAdminAuthenticated');
        navigate('/login');
    };

    const fetchContacts = async () => {
        try {
            const response = await fetch('https://portfolio-backend-mu-lemon.vercel.app/api/contact');
            const data = await response.json();
            if (data.success) {
                setContacts(data.data);
            } else {
                setError(data.message);
            }
        } catch (err) {
            setError('Failed to fetch data. Make sure the backend server is running.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const formatDate = (dateString) => {
        const options = {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    if (loading) {
        return (
            <div className="admin-container">
                <div className="loader">Loading messages...</div>
            </div>
        );
    }

    return (
        <div className="admin-container">
            <div className="section-header">
                <div className="admin-header-main">
                    <h2 className="section-title">Admin Dashboard</h2>
                    <p className="section-subtitle">Manage your contact form submissions</p>
                </div>
                <button onClick={handleLogout} className="logout-btn">Logout</button>
            </div>


            {error && <div className="admin-error">{error}</div>}

            <div className="admin-stats">
                <div className="stat-card">
                    <span className="stat-value">{contacts.length}</span>
                    <span className="stat-label">Total Messages</span>
                </div>
            </div>

            <div className="messages-grid">
                {contacts.length === 0 ? (
                    <div className="no-messages">No messages yet.</div>
                ) : (
                    contacts.map((contact) => (
                        <div key={contact._id} className="message-card">
                            <div className="message-header">
                                <div className="user-info">
                                    <h3 className="user-name">{contact.name}</h3>
                                    <span className="user-email">{contact.email}</span>
                                </div>
                                <span className="message-date">{formatDate(contact.date)}</span>
                            </div>
                            <div className="message-subject">
                                <strong>Subject:</strong> {contact.subject}
                            </div>
                            <div className="message-body">
                                {contact.message}
                            </div>
                        </div>
                    ))
                )}
            </div>

            <button className="refresh-btn" onClick={fetchContacts}>Refresh Data</button>
        </div>
    );
};

export default Admin;
