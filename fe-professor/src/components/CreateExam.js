import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, FormControl, Box, Typography } from '@mui/material';

import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


import './css/createExam.css';


const CreateExam = () => {
  const [titulo, setTitulo] = useState('');
  const [alunos, setAlunos] = useState('');
  const [goalDescription, setGoalDescription] = useState('');
  const [dia, setDia] = useState('');
  const [hora, setHora] = useState('');
  const [duracao, setDuracao] = useState('');
  const [numeroDeVersoes, setNumeroDeVersoes] = useState('');
  const [openDialog, setOpenDialog] = useState(false);

  const navigate = useNavigate();
  
  const handleSubmit = (event) => {
    event.preventDefault();
    setOpenDialog(true);

    // TODO: Submit the form data to a backend server
  };

  const handleCloseDialog = () => {
    // Close the dialog
    setOpenDialog(false);
  };

  const handleCreateQuestions = () => {
    // Handle logic for creating questions if needed

    // Navigate to the "CreateQuestions" page (replace '/create-questions' with your desired route)
    navigate('/create-questions');

    // Close the dialog
    setOpenDialog(false);
  };

  return (
    <>
      <FormControl class="form" style={{ flexDirection: 'column' , textAlign:'center'}}>
        <TextField
          id="titulo"
          classes={{ root: 'exam-title' }}
          label="Título"
          onChange={(e) => setTitulo(e.target.value)}
          margin="normal"
        />
        <TextField type="file" />
          <Button variant="contained" color="primary" component="span">
            Upload file
          </Button>
        
        <TextField
          id="goalDescription"
          label="Exam Description"
          onChange={(e) => setGoalDescription(e.target.value)}
          variant="filled"
          margin="normal"
        />
        <TextField
          id="dia"
          onChange={(e) => setDia(e.target.value)}
          type="date"
          variant="outlined"
          margin="normal"
        />

        <TextField
          id="hora"
          label="Exam Time"
          onChange={(e) => setHora(e.target.value)}
          type="time"
          variant="filled"
          margin="normal"
        />

        <TextField
          id="duracao"
          label="Exam Duration"
          onChange={(e) => setDuracao(e.target.value)}
          type="number"
          variant="outlined"
          margin="normal"
        />
      
        <TextField
          id="numeroDeVersoes"
          label="Number of Versions"
          onChange={(e) => setNumeroDeVersoes(e.target.value)}
          type="number"
          variant="outlined"
          margin="normal"
        />
        {/* Centered submit button */}
        <Box mt={2} textAlign="center">
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Guardar
          </Button>
        </Box>
      </FormControl>

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Exam Submitted</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Your exam has been successfully submitted!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Fechar
          </Button>
          <Button onClick={handleCreateQuestions} color="primary">
            Criar Questões
          </Button>

        </DialogActions>
      </Dialog>
    </>
  );
};

export default CreateExam;
