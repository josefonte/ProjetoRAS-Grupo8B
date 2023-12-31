import React from 'react';
import { FormControl} from '@mui/material';
import { Button, TextField, Typography, Switch } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import './css/CorrectExam.css'
const CorrectExam = () => {
  
  const [examNumber, setExamNumber] = React.useState('');
  const [correction, setCorrection] = React.useState('');
  const [openDialog, setopenDialog] = React.useState(false);

  const handleSubmit = () => {
    // Save the correction to the database.
    // Open the modal.
    setopenDialog(true);
  };

  const handleCloseDialog = () => {
    setopenDialog(false);
  };

  return (
    <div>
      
      <FormControl  class="form" style={{ flexDirection: 'column' , textAlign:'center', padding: '20px'}}>
        <div className="container"></div>
        <Typography variant="h4" className='title'>
          Correção da Prova
        </Typography>
        <TextField
          id="exam-number"
          label="Prova (ID da Prova)"
          value={examNumber}
          onChange={(e) => setExamNumber(e.target.value)}
          className='textField'
          margin="normal"
          variant="outlined"
          
        />
      
      <div className="switch-container">

        <Typography className='title'> Correção Automática</Typography>
        <Switch
          label="Correção Automática"
          checked={correction}
          onChange={(event) => setCorrection(event.target.checked)}
          className='textField'
        />    
        </div>

        <div>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submeter
          </Button>
        </div>

        <Dialog open={openDialog} onClose={handleCloseDialog} className='modal'>
        <DialogTitle>Correção Automática executada com sucesso!</DialogTitle>
        <DialogContent>
          <DialogContentText> A sua prova foi corrigida automáticamente com sucesso.</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Fechar
          </Button>
        </DialogActions>
      </Dialog>


      </FormControl>
    </div>
  );
};

export default CorrectExam;
