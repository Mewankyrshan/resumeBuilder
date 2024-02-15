import React from 'react';
import '../styles/CommonCard.css'
function PersonalInfo(){
    return ( <div className="card-container">
        <div className="card-content">
            <h2 className="card-title">Personal Info</h2>
            <div className="form-group">
                <label for="name">Full Name</label><br />
                <input className="input-group" type="text" id="name" name="name" />
            </div>
            <div className="form-group">
                <label for="phone">Contact Number</label><br />
                <input className="input-group" type="tel" id="phone" name="phone" />
            </div>
            <div className="form-group">
                <label for="email">Email</label><br />
                <input className="input-group" type="email" id="email" name="email" />
            </div>
            <button type="submit">Save</button>
        </div>
    </div>
    );
}

export default PersonalInfo;
