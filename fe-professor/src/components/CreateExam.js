import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, FormControl, Box, Typography } from "@mui/material";


import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { v4 as uuidv4 } from 'uuid';

import "./css/createExam.css";

const CreateExam = (props) => {
  const [openDialog, setOpenDialog] = useState(false);

  const [formData, setFormData] = useState({
    _id: uuidv4(),
    cotacao: "",
    nome: "",
    id_docente: props.idDocente,
    alunos: [],
    data: "",
    hora_preferencial: "",
    tempo_admissao: "",
    duracao: "",
    acesso_autorizado: [],
    versao: ""
  });

	const navigate = useNavigate();

  const handleSubmit =  async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`http://localhost:8010/api/gestao/criar/${props.idDocente}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
  
      if (response.ok) {
        setOpenDialog(true);
      } else {
        console.error('Erro ao enviar o formulário:', response.statusText);
      }
    } catch (error) {
      console.error('Erro ao enviar o formulário:', error.message);
    }
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    // Close the dialog
    setOpenDialog(false);
  };

  const handleCreateQuestions =  () => {
    navigate(`/create-questions/${formData._id}`);
    setOpenDialog(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
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
          name="nome"
          onChange={handleChange}
          // onChange={(e) => setTitulo(e.target.value)}
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
          id="cotacao"
          label="Cotação"
          name="cotacao"
          onChange={handleChange}
          // onChange={(e) => setGoalDescription(e.target.value)}
          variant="outlined"
          margin="normal"
        />
        <TextField
          id="dia"
          label="Dia da Prova"
          name="data"
          onChange={handleChange}
          // onChange={(e) => setDia(e.target.value)}
          type="date"
          variant="filled"
          margin="normal"
          opacity={0.5}
        />

        <TextField
          id="tempo_Admissao"
          name="tempo_admissao"
          label="Tempo de Admissão"
          onChange={handleChange}
          // onChange={(e) => setHora(e.target.value)}
          type="number"
          variant="filled"
          margin="normal"
        />

        <TextField
          id="hora"
          name="hora_preferencial"
          label="Hora da Prova"
          onChange={handleChange}
          // onChange={(e) => setHora(e.target.value)}
          variant="filled"
          margin="normal"
        />

        <TextField
          id="duracao"
          label="Duração"
          name="duracao"
          onChange={handleChange}
          // onChange={(e) => setDuracao(e.target.value)}
          type="number"
          variant="filled"
          margin="normal"
        />

        <TextField
          id="numeroDeVersoes"
          label="Versão"
          name="versao"
          onChange={handleChange}
          // onChange={(e) => setNumeroDeVersoes(e.target.value)}
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
