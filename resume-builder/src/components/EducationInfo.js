import React from 'react';
import '../styles/CommonCard.css';

function EducationInfo(){
    return (
    <div className="card-container">
        <div className="card-content">
            <h2 className="card-title">Education Info</h2>
            <div className="form-group">
                <label for="name">School/College/University</label><br />
                <input className="input-group" type="text" id="name" name="name" />
            </div>
            <div className="form-group">
                <label for="phone">Department/Branch</label><br />
                <input className="input-group" type="tel" id="phone" name="phone" />
            </div>
            <div className="form-group">
                <label for="email">Year</label><br />
                <input className="input-group" type="email" id="email" name="email" />
            </div>
            <button type="submit">Save</button>
        </div>
    </div>
    );
}

export default EducationInfo;
