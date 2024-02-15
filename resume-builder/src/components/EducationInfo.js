import React, { useState } from 'react';
import '../styles/CommonCard.css';

function EducationInfo({ expanded, onToggle, onSubmit }) {
    const [school, setSchool] = useState('');
    const [department, setDepartment] = useState('');
    const [year, setYear] = useState('');

    const handleClick = () => {
        onToggle(); // Call the function passed from the parent component.
    };

    const handleSubmit = () => {
        onSubmit({ school, department, year });
    };

    return (
        <div className={`card-container ${expanded ? 'expanded' : 'collapsed'}`} onClick={handleClick}>
            <div className="card-content">
                <h2 className="card-title">Education Info</h2>
                <div className="form-group">
                    <label htmlFor="school">School/College/University</label><br />
                    <input className="input-group" type="text" id="school" name="school" onChange={(e) => setSchool(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="department">Department/Branch</label><br />
                    <input className="input-group" type="text" id="department" name="department" onChange={(e) => setDepartment(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="year">Year</label><br />
                    <input className="input-group" type="text" id="year" name="year" onChange={(e) => setYear(e.target.value)} />
                </div>
                <button type="button" onClick={handleSubmit}>Save</button>
            </div>
        </div>
    );
}

export default EducationInfo;
