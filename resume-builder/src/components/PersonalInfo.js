import React, { useState } from 'react';
import '../styles/CommonCard.css';

function PersonalInfo({ onSubmit }) {
    const [fullName, setFullName] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [email, setEmail] = useState('');
    const [location, setLocation] = useState('');

    const handleSubmit = () => {
        onSubmit({ fullName, contactNumber, email, location });
    };

    return (
        <div className="card-container">
            <div className="card-content">
                <h2 className="card-title">Personal Info</h2>
                <div className="form-group">
                    <label htmlFor="name">Full Name</label><br />
                    <input className="input-group" type="text" id="name" name="name" onChange={(e) => setFullName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Contact Number</label><br />
                    <input className="input-group" type="tel" id="phone" name="phone" onChange={(e) => setContactNumber(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label><br />
                    <input className="input-group" type="email" id="email" name="email" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="location">Location</label><br />
                    <input className="input-group" type="text" id="location" name="location" onChange={(e) => setLocation(e.target.value)} />
                </div>
                <button type="button" onClick={handleSubmit}>Save</button>
            </div>
        </div>
    );
}

export default PersonalInfo;
