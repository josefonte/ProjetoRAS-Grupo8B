import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography } from '@mui/material';
import './css//MainPage.css';

const MainPage = () => {
  return (
    <div className="main-page" style={{ textAlign: 'center', flexDirection: 'column' }}>
      <Typography variant="h3" gutterBottom>
        Welcome to ProbUM
      </Typography>

      <Link to="/create-exam" style={{ cursor: 'pointer' }}>
        <Button variant="contained" color="primary" style={{ margin: '10px 0' }}>
          Criar Prova
        </Button>
      </Link>

      <Link to="/correct-exam" style={{ cursor: 'pointer' }}>
        <Button variant="contained" color="primary" style={{ margin: '10px 0' }}>
          Corrigir Prova
        </Button>
      </Link>
    </div>
  );
};

export default MainPage;
