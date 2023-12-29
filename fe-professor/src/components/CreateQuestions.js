import React, { useState } from "react";
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

  const handleSubmit = (event) => {
    // TODO: guardar questao na db
    event.preventDefault();
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
          label="Descrição"
          multiline
          fullWidth
          value={questionDescription}
          onChange={handleQuestionDescriptionChange}
          style={{ margin: "10px 0" }}
        />

        <Select
          label="Tipo"
          value={questionType}
          onChange={handleQuestionTypeChange}
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
        {respostas.map((resposta, index) => (
          <div key={index} className="answers-container">
            <div className="up-part"> 
              <Checkbox
                checked={resposta.checked}
                onChange={() => handleChange(index)}
              />
              <TextField
                id={resposta.text}
                value={resposta.text}
                variant = 'filled'
                className="text-field"
                onChange={(e) => {
                  setRespostas((prevRespostas) => {
                    const updatedRespostas = [...prevRespostas];
                    updatedRespostas[index].text = e.target.value;
                    return updatedRespostas;
                  });
                }}
              />
            </div>
            <div className="cotaçao">
              <label>Cotação: </label>
              <TextField
                type="number"
                className="number-input centered-text"
                aria-label="Demo number input"
                step={0.1}
                value={respostas[index].cotacao}
                onChange={(event, val) => setCotacao(respostas[index].text, val)}
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

        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          style={{ margin: "10px 0" }}
        >
          Guardar tudo
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmitNextQuestion}
          style={{ margin: "10px 0" }}
        >
          Próxima Questão
        </Button>
      </FormControl>
    </div>
  );
};

export default CreateQuestions;
