import React , { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Button, Typography } from '@mui/material';
import './css/ChoicePage.css';

const ChoicePage = (props) => {

  const { idProva } = useParams();  // Está aqui o id da prova

  const [exame, setExamData] = useState({});  // Está aqui a prova

  // GET das informações da prova
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8010/api/gestao/gestprovas/${props.idDocente}?id=${idProva}`);
        const dados = await response.json();
        setExamData(dados);
      } catch (error) {
        console.error("Erro ao obter o exame:", error);
      }
    };

    fetchData();
  }, []);



  return (
    <div className="main-page" style={{ textAlign: 'center', flexDirection: 'column' }}>
      <Typography variant="h3" gutterBottom>
        Welcome to ProbUM
      </Typography>

      {/* Mostrar algumas informações da prova */}
      <p>ID da Prova: {exame._id}</p>
      <p>Nome da Prova: {exame.nome}</p>
      
      {/* Lista de questões */}
      <Typography variant="h4" gutterBottom>
        Lista de Questões
      </Typography>


      <Link to="/edit-exam" style={{ cursor: 'pointer' }}>
        <Button variant="contained" color="primary" style={{ margin: '10px 0' }}>
          Editar Prova
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

export default ChoicePage;