import React from 'react';
import { useLocation } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

function PreviewResume() {
  const location = useLocation();
  const { resumeData } = location.state;

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>{resumeData.name}</Typography>
      <Typography variant="h6">{resumeData.email}</Typography>
      <Typography variant="body1" paragraph>{resumeData.profile}</Typography>
      
      <Divider sx={{ my: 2 }} />

      <Typography variant="h5" gutterBottom>Education</Typography>
      {resumeData.education.map((edu, index) => (
        <Box key={index} sx={{ mb: 2 }}>
          <Typography variant="h6">{edu.institution}</Typography>
          <Typography variant="body1">{edu.degree}, {edu.startYear} - {edu.endYear}</Typography>
        </Box>
      ))}

      <Divider sx={{ my: 2 }} />

      <Typography variant="h5" gutterBottom>Experience</Typography>
      {resumeData.experience.map((exp, index) => (
        <Box key={index} sx={{ mb: 2 }}>
          <Typography variant="h6">{exp.company}</Typography>
          <Typography variant="body1">{exp.position}, {exp.startYear} - {exp.endYear}</Typography>
        </Box>
      ))}
    </Box>
  );
}

export default PreviewResume;
