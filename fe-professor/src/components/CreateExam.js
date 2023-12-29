import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, FormControl, Box, Typography } from "@mui/material";

import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import "./css/createExam.css";

const CreateExam = () => {
  const [titulo, setTitulo] = useState("");
  const [alunos, setAlunos] = useState("");
  const [goalDescription, setGoalDescription] = useState("");
  const [dia, setDia] = useState("");
  const [hora, setHora] = useState("");
  const [duracao, setDuracao] = useState("");
  const [numeroDeVersoes, setNumeroDeVersoes] = useState("");
  const [openDialog, setOpenDialog] = useState(false);

	const navigate = useNavigate();

  const handleSubmit =  (event) => {
    event.preventDefault();
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    // Close the dialog
    setOpenDialog(false);
  };

  const handleCreateQuestions =  () => {
    navigate("/create-questions");
    setOpenDialog(false);
  };



  return (
    <>
      <FormControl
        class="form"
        style={{ flexDirection: "column", textAlign: "center" }}
      >
        <Typography variant="h3">Criar Prova</Typography>
        <TextField
          id="titulo"
          classes={{ root: "exam-title" }}
          label="Título"
          onChange={(e) => setTitulo(e.target.value)}
          variant="outlined"
          margin="normal"
        />

        <Typography
          variant="h6"
          style={{ margin: "10px 0", textAlign: "left" }}>
          Alunos Admitidos
        </Typography>
        <TextField
          type="file"
        />

        <Button variant="contained" color="primary" component="span">
          Upload file
        </Button>

        <TextField
          id="goalDescription"
          label="Descrição"
          onChange={(e) => setGoalDescription(e.target.value)}
          variant="outlined"
          margin="normal"
        />
        <TextField
          id="dia"
          label="Dia da Prova"
          onChange={(e) => setDia(e.target.value)}
          type="date"
          variant="filled"
          margin="normal"
          opacity={0.5}
        />

        <TextField
          id="hora"
          label="Hora da Prova"
          onChange={(e) => setHora(e.target.value)}
          type="time"
          variant="filled"
          margin="normal"
        />

        <TextField
          id="duracao"
          label="Duração"
          onChange={(e) => setDuracao(e.target.value)}
          type="number"
          variant="filled"
          margin="normal"
        />

        <TextField
          id="numeroDeVersoes"
          label="Número de versões"
          onChange={(e) => setNumeroDeVersoes(e.target.value)}
          type="number"
          variant="filled"
          margin="normal"
        />
        <Box mt={2} textAlign="center">
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Guardar
          </Button>
        </Box>
      </FormControl>

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>O seu exame ja tem calendarização</DialogTitle>
        <DialogContent>
          <DialogContentText>Data/Hora do teste. Salas</DialogContentText>
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
