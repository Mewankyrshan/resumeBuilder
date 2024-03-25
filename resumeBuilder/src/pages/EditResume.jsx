import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

function EditResume() {
  const navigate = useNavigate();
  const [resumeData, setResumeData] = useState({
    name: '',
    email: '',
    profile: '',
    education: [{ institution: '', degree: '', startYear: '', endYear: '' }],
    experience: [{ company: '', position: '', startYear: '', endYear: '' }],
  });

  const handleChange = (e, sectionIndex, section) => {
    const { name, value } = e.target;

    if (section) {
      const sectionData = [...resumeData[section]];
      sectionData[sectionIndex][name] = value;
      setResumeData(prevState => ({
        ...prevState,
        [section]: sectionData,
      }));
    } else {
      setResumeData(prevState => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleAddSectionItem = (section) => {
    const newItem = section === 'education' ? { institution: '', degree: '', startYear: '', endYear: '' } : { company: '', position: '', startYear: '', endYear: '' };
    setResumeData(prevState => ({
      ...prevState,
      [section]: [...prevState[section], newItem],
    }));
  };

  const handleRemoveSectionItem = (index, section) => {
    const updatedSection = [...resumeData[section]];
    updatedSection.splice(index, 1);
    setResumeData(prevState => ({
      ...prevState,
      [section]: updatedSection,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/preview', { state: { resumeData } });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h6">Profile Info</Typography>
      <TextField label="Name" name="name" value={resumeData.name} onChange={handleChange} margin="normal" fullWidth />
      <TextField label="Email" name="email" value={resumeData.email} onChange={handleChange} margin="normal" fullWidth />
      <TextField label="Profile" name="profile" multiline rows={4} value={resumeData.profile} onChange={handleChange} margin="normal" fullWidth />
      
      <Typography variant="h6" sx={{ mt: 2 }}>Education</Typography>
      {resumeData.education.map((edu, index) => (
        <Box key={index}>
          <IconButton onClick={() => handleRemoveSectionItem(index, 'education')}>
            <DeleteIcon />
          </IconButton>
          <TextField label="Institution" name="institution" value={edu.institution} onChange={(e) => handleChange(e, index, 'education')} margin="normal" fullWidth />
          <TextField label="Degree" name="degree" value={edu.degree} onChange={(e) => handleChange(e, index, 'education')} margin="normal" fullWidth />
          <TextField label="Start Year" name="startYear" value={edu.startYear} onChange={(e) => handleChange(e, index, 'education')} margin="normal" fullWidth />
          <TextField label="End Year" name="endYear" value={edu.endYear} onChange={(e) => handleChange(e, index, 'education')} margin="normal" fullWidth />
        </Box>
      ))}
      <Button onClick={() => handleAddSectionItem('education')} variant="outlined" sx={{ my: 2 }}>Add Education</Button>

      <Typography variant="h6">Experience</Typography>
      {resumeData.experience.map((exp, index) => (
        <Box key={index}>
          <IconButton onClick={() => handleRemoveSectionItem(index, 'experience')}>
            <DeleteIcon />
          </IconButton>
          <TextField label="Company" name="company" value={exp.company} onChange={(e) => handleChange(e, index, 'experience')} margin="normal" fullWidth />
          <TextField label="Position" name="position" value={exp.position} onChange={(e) => handleChange(e, index, 'experience')} margin="normal" fullWidth />
          <TextField label="Start Year" name="startYear" value={exp.startYear} onChange={(e) => handleChange(e, index, 'experience')} margin="normal" fullWidth />
          <TextField label="End Year" name="endYear" value={exp.endYear} onChange={(e) => handleChange(e, index, 'experience')} margin="normal" fullWidth />
        </Box>
      ))}
      <Button onClick={() => handleAddSectionItem('experience')} variant="outlined" sx={{ my: 2 }}>Add Experience</Button>

      <Button type="submit" variant="contained" sx={{ mt: 2 }}>Preview</Button>
    </form>
  );
}

export default EditResume;
