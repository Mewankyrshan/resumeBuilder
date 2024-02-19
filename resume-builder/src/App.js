import React, { useState } from 'react';
import './App.css';
import PersonalInfo from './components/PersonalInfo';
import EducationInfo from './components/EducationInfo';
import ExperienceInfo from './components/ExperienceInfo';
import ResumeDisplay from './components/ResumeDisplay';

function App() {

  const [expandedSection, setExpandedSection] = useState('');
  const [personalData, setPersonalData] = useState({});
  const [educationData, setEducationData] = useState({});
  const [experienceData, setExperienceData] = useState({});
  

  const handleToggle = (section) => {
    setExpandedSection(section === expandedSection ? '' : section);
  };

  const handlePersonalInfoSubmit = (data) => {
    setPersonalData(data);
  };

  const handleEducationInfoSubmit = (data) => {
    setEducationData(data);
  };

  const handleExperienceInfoSubmit = (data) => {
    setExperienceData(data);
  };



  return (
    <div className="App-container">
      <div className="App">
        <PersonalInfo onSubmit={handlePersonalInfoSubmit} />
        <EducationInfo
          expanded={expandedSection === 'education'}
          onToggle={() => handleToggle('education')}
          onSubmit={handleEducationInfoSubmit}
        />
        <ExperienceInfo
          expanded={expandedSection === 'experience'}
          onToggle={() => handleToggle('experience')}
          onSubmit={handleExperienceInfoSubmit}
        />
      </div>
      <div className="App-result">
        <ResumeDisplay
          personalData={personalData}
          educationData={educationData}
          experienceData={experienceData}
        />
      </div>
    </div>
  );
}

export default App;
