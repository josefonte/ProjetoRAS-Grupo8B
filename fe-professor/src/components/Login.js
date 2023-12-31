import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { ThemeProvider, Container } from '@mui/material';
import { Button, Input, Typography, Checkbox, FormControl, FormControlLabel, FormGroup, InputLabel } from '@mui/material';
import { createTheme } from "@mui/material/styles";
import './css/login.css';


const theme = createTheme();
async function loginUser(credentials) {
  return fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }
 

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }


  return(
    <ThemeProvider theme={theme}>
    <Container maxWidth="lg">

      <form onSubmit={handleSubmit} className='form'>
      <Typography variant="h3" className='title'>Welcome to ProbUM</Typography>
      <div className='box-container' >
        <FormGroup id="username" className='box'>
          <InputLabel for="username">Username</InputLabel>
          <Input type="text" id="username" name="username" required />
        </FormGroup>


        <FormGroup id="password" className='box'>
          <InputLabel for="password">Password</InputLabel>
          <Input type="password" id="password" name="password" required />
        </FormGroup>
        </div>

        
        <FormGroup id="remember" className='remember-me'>
          <InputLabel for="remember">Remember me</InputLabel>
          <Checkbox id="remember" value="true" name="remember" />
        </FormGroup>

        <Link to="/exam-list" style={{ cursor: 'pointer' }}>
          <Button type="submit" variant="contained">
            Submit
          </Button>
      </Link>
      </form>
    </Container>
  </ThemeProvider>
  )
}