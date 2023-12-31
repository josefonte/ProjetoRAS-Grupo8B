import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button, Typography, Paper } from "@mui/material";
import { Box, List, ListItem, ListItemText, Checkbox } from "@mui/material";
import "./css/ChoicePage.css";


const ChoicePage = (props) => {
  const optionsSchema = [
    {
      _id: "a",
      texto: "dao afonso henriques",
      cotacao: "3",
      resolucao: "certa",
    },
    {
      _id: "b",
      texto: "manuel I",
      cotacao: "0",
      resolucao: "errada",
    },
    {
      _id: "c",
      texto: "dao sancho",
      cotacao: "0",
      resolucao: "errada",
    },
  ];
  
  
  const questoes = [
    {
    _id: "1",
    enunciado: "primeiro rei de portugal",
    imagem: "",
    cotacaoTotal: "3",
    tipo_Questao: "EC",
    options: [optionsSchema],
  },
  ];
  
  const { idProva } = useParams(); // Está aqui o id da prova
  const [checked, setChecked] = useState(false);

  const [exame, setExamData] = useState({}); // Está aqui a prova

  //const [questoes, setQuestoes] = useState([]);

  // GET das informações da prova
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:8010/api/gestao/gestprovas/${props.idDocente}?id=${idProva}`
        );
        const dados = await response.json();
        setExamData(dados);
      } catch (error) {
        console.error("Erro ao obter o exame:", error);
      }
    };

    fetchData();
  }, []);
  

  return (
    <div
      className="main-page"
      style={{
        textAlign: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Mostrar algumas informações da prova
      <p>ID da Prova: {exame._id}</p>
      <p>Nome da Prova: {exame.nome}</p> */}

      <Paper className="paper" elevation={4}>
        <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>
          ID da Prova: {exame._id}
        </Typography>
        <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>
          Nome da Prova: {exame.nome}
        </Typography>
      </Paper>
      {/* Lista de questões */}
      <Typography variant="h4" gutterBottom>
        Questões Da Prova
      </Typography>

   {/*   <div className="questions">
        <List style={{ flexDirection: "column" }}>
          {questoes.map((questao) => (
            <ListItem key={questao._id}>
              <Typography variant="subtitle2">
                {questao._id}) {questao.enunciado}
              </Typography>
              <List style={{ flexDirection: "column"}}
              >
                {questao.options && questao[0].options.map((opcao) => (
                  <ListItem key={opcao._id}>
                    <Checkbox
                      checked={opcao.resolucao === "certa"}
                      onChange={(event) => setChecked(event.target.checked)}
                    />
                    <ListItemText>
                      {opcao._id}: {opcao.texto}
                    </ListItemText>
                  </ListItem>
                ))}
              </List>
            </ListItem>
          ))}
        </List>
                </div> */}

      <div className="button-container">
        <Link to="/edit-exam" style={{ cursor: "pointer" }}>
          <Button
            variant="contained"
            color="primary"
            style={{ margin: "10px 0" }}
          >
            Editar Prova
          </Button>
        </Link>

        <Link to="/correct-exam" style={{ cursor: "pointer" }}>
          <Button
            variant="contained"
            color="primary"
            style={{ margin: "10px 0" }}
          >
            Corrigir Prova
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ChoicePage;
