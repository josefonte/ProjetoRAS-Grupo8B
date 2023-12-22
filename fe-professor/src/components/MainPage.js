// Import necessary modules from React, React Router, and Material-UI
import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography } from '@mui/material';
import './css/MainPage.css';

const MainPage = () => {
  return (
    <div className='main-page'>

      <Typography variant="h3" gutterBottom>
        Welcome to the Main Page
      </Typography>

      {/* Link to navigate to CreateExam component */}
      <Link to="/create-exam">
        <Button variant="contained" color="primary">
          Criar Prova
        </Button>
      </Link>
    </div>
  );
};

export default MainPage;
