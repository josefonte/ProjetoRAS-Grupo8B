import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import {
  Button,
  TextField,
  Typography,
  Grid,
  Select,
  MenuItem,
} from "@material-ui/core";
import { Stack, InputAdornment, FormControl } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import {
  Unstable_NumberInput as NumberInput,
  numberInputClasses,
} from "@mui/base/Unstable_NumberInput";
import "./css/CreateQuestions.css";

const CreateQuestions = () => {
  const [questionDescription, setQuestionDescription] = React.useState("");
  const [questionType, setQuestionType] = React.useState("multiple_choice");
  const [correctAnswers, setCorrectAnswers] = React.useState([]);

  const { idProva } = useParams();

  const [formData, setFormData] = useState({
    _id: uuidv4(),
    enunciado: "",
    imagens: "",
    cotacaoTotal: "",
    tipo_Questao: "",
    options: [],
  });

  const [optionsData, setOptionsData] = useState([
    { _id: uuidv4(), texto: "", cotacao: "", resolucao: "" },
    { _id: uuidv4(), texto: "", cotacao: "", resolucao: "" },
    { _id: uuidv4(), texto: "", cotacao: "", resolucao: "" },
    { _id: uuidv4(), texto: "", cotacao: "", resolucao: "" },
  ]);

  const handleChangeForm = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleChangeOptions = (index) => (e) => {
    const { name, value } = e.target;
    setOptionsData((prevOptionsData) => {
      const updatedOptionsData = [...prevOptionsData];
      updatedOptionsData[index] = {
        ...updatedOptionsData[index],
        [name]: value,
      };
      return updatedOptionsData;
    });
  };

  function setValue(index, newValue) {
    const newRespostas = respostas.slice(0);
    newRespostas[index] = { ...respostas[index], value: newValue };
    setRespostas(newRespostas);
  }

  const setCotacao = (respostaText, cotaçãoValue) => {
    const newRespostas = [...respostas];
    const currentResposta = newRespostas.find(
      (resposta) => resposta.text === respostaText
    );
    if (currentResposta) {
      currentResposta.cotacao = cotaçãoValue;
    }
    setRespostas(newRespostas);
  };

  const handleQuestionDescriptionChange = (event) => {
    setQuestionDescription(event.target.value);
  };

  const handleQuestionTypeChange = (event) => {
    setQuestionType(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setFormData({
      ...formData,
      options: optionsData,
    });

    try {
      const response = await fetch(
        `http://localhost:8010/api/gestao/criar/questao/d123?idProva=${idProva}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
    } catch (error) {
      console.error("Erro ao enviar o formulário:", error.message);
    }
  };

  const handleSubmitNextQuestion = (event) => {
    // TODO: guardar questao na db
    event.preventDefault();
    window.location.reload();
  };

  const [respostas, setRespostas] = useState([
    { text: "", checked: false },
    { text: "", checked: false },
    { text: "", checked: false },
    { text: "", checked: false },
  ]);

  const handleChange = (index) => {
    setRespostas((prevRespostas) => {
      const updatedRespostas = [...prevRespostas];
      updatedRespostas[index].checked = !updatedRespostas[index].checked;
      return updatedRespostas;
    });
  };
  const handleSubmitQuestions = () => {
    // Get the selected anwser
  };

  return (
    <div className="global-container">
      <FormControl className="form">
        <Typography variant="h3">Criar Questão</Typography>
        <TextField
          label="Enunciado"
          multiline
          fullWidth
          name="enunciado"
          onChange={handleChangeForm}
          //onChange={handleQuestionDescriptionChange}
          style={{ margin: "10px 0" }}
        />

        <Select
          label="Tipo"
          name="tipo_Questao"
          //value={questionType}
          onChange={handleChangeForm}
          //onChange={handleQuestionTypeChange}
          style={{ margin: "10px 0" }}
        >
          <MenuItem value="multiple_choice">Escolha Múltipla</MenuItem>
          <MenuItem value="t_f">Verdadeiro ou Falso</MenuItem>
          <MenuItem value="development">Desenvolvimento</MenuItem>
          <MenuItem value="fill_in_the_blank">Completar Espaços</MenuItem>
        </Select>

        <Typography variant="h6" style={{ margin: "10px 0" }}>
          Respostas (selecione as corretas e as respetivas cotações)
        </Typography>
        {optionsData.map((option, index) => (
          <div key={index} className="answers-container">
            <div className="up-part">
              <Checkbox
                checked={respostas[1].checked}
                onChange={() => handleChange(index)}
              />
              <TextField
                id={option._id}
                //value={resposta.text}
                variant="filled"
                className="text-field"
                name="texto"
                onChange={handleChangeOptions(index)}
                //onChange={(e) => {
                //  setRespostas((prevRespostas) => {
                //    const updatedRespostas = [...prevRespostas];
                //    updatedRespostas[index].text = e.target.value;
                //    return updatedRespostas;
                //  });
                //}}
              />
            </div>
            <div className="cotaçao">
              <label>Cotação: </label>
              <TextField
                type="number"
                className="number-input centered-text"
                aria-label="Demo number input"
                step={0.1}
                name="cotacao"
                //value={respostas[index].cotacao}
                onChange={handleChangeOptions(index)}
                //onChange={(event, val) => setCotacao(respostas[index].text, val)}
              />
            </div>
          </div>
        ))}

        {/* <NumberInput
              className="number-input"
              aria-label="Demo number input"
              placeholder="cotação"
              label="cotação"
              step={0.1}
              value={respostas[index].cotacao}
              onChange={(event, val) => setCotacao(respostas[index].text, val)}
            /> */}
        {/* <TextField
          label="cotacao Mínima"
          id="filled-start-adornment"
          sx={{ m: 1, width: '25ch' }}
          style={{ margin: '10px 0' }}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
          variant="filled"
        />
        <TextField
          label="cotacao Incompleta"
          id="filled-start-adornment"
          sx={{ m: 1, width: '25ch' }}
          style={{ margin: '10px 0' }}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
          variant="filled"
        /> */}

        <Link to="/exam-list" style={{ cursor: "pointer" }}>
          <Button
            variant="contained"
            color="primary"
            style={{ margin: "10px 0" }}
          >
            Sair
          </Button>
        </Link>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          style={{ margin: "10px 0" }}
        >
          Próxima Questão
        </Button>
      </FormControl>
    </div>
  );
};

export default CreateQuestions;
