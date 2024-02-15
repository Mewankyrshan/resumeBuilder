import React, { useState } from 'react';
import '../styles/CommonCard.css';

function ExperienceInfo({ expanded, onToggle, onSubmit }) {
    const [company, setCompany] = useState('');
    const [designation, setDesignation] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [description, setDescription] = useState('');

    const handleTitleClick = () => {
        onToggle(); // Call the function passed from the parent component.
    };

    const handleSubmit = () => {
        
        onSubmit({ company, designation, startDate, endDate, description });
    };

    return (
        <div className={`card-container ${expanded ? 'expanded' : 'collapsed'}`}>
            <div className="card-content">
                <h2 className="card-title" onClick={handleTitleClick}>Experience Info</h2>
                <div className="form-group">
                    <label htmlFor="company">Company</label><br />
                    <input className="input-group" type="text" id="company" name="company" onChange={(e) => setCompany(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="designation">Designation</label><br />
                    <input className="input-group" type="text" id="designation" name="designation" onChange={(e) => setDesignation(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="startDate">Start Date</label><br />
                    <input className="input-group" type="text" id="startDate" name="startDate" onChange={(e) => setStartDate(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="endDate">End Date</label><br />
                    <input className="input-group" type="text" id="endDate" name="endDate" onChange={(e) => setEndDate(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label><br />
                    <input className="input-group" type="text" id="description" name="description" onChange={(e) => setDescription(e.target.value)} />
                </div>
                <button type="button" onClick={handleSubmit}>Save</button>
            </div>
        </div>
    );
}

export default ExperienceInfo;
