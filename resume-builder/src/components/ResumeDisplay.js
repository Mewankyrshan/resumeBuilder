import React from 'react';

function ResumeDisplay({ personalData, educationData, experienceData }) {
  return (
    <div className="resume-display">
      <h2>Resume Preview</h2>
      <div className="resume-section">
        <h3>Personal Information</h3>
        <p><strong>Full Name:</strong> {personalData.fullName}</p>
        <p><strong>Contact Number:</strong> {personalData.contactNumber}</p>
        <p><strong>Email:</strong> {personalData.email}</p>
      </div>
      <div className="resume-section">
        <h3>Education Information</h3>
        <p><strong>School/College/University:</strong> {educationData.school}</p>
        <p><strong>Department/Branch:</strong> {educationData.department}</p>
        <p><strong>Year:</strong> {educationData.year}</p>
      </div>
      <div className="resume-section">
        <h3>Experience Information</h3>
        {experienceData.company ? (
          <div>
            <p><strong>Company:</strong> {experienceData.company}</p>
            <p><strong>Designation:</strong> {experienceData.designation}</p>
            <p><strong>Start Date:</strong> {experienceData.startDate}</p>
            <p><strong>End Date:</strong> {experienceData.endDate}</p>
            <p><strong>Description:</strong> {experienceData.description}</p>
          </div>
        ) : (
          <p>No experience information provided.</p>
        )}
      </div>
    </div>
  );
}

export default ResumeDisplay;
