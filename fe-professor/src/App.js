import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import CreateExam from './components/CreateExam';
import CorrectExam from './components/CorrectExam';
import CreateQuestions from './components/CreateQuestions';
import MainPage from './components/MainPage';

function App() {
  const [exams, setExams] = useState([]);

  const addExam = (newExam) => {
    setExams([...exams, newExam]);
  };

  const id_docente = "d123"

  return (
    <div className="wrapper">
      <BrowserRouter>
        <Navbar />

        <Routes>
          {/* Add the MainPage route here */}
          <Route path="/" element={<MainPage />} />
          <Route path="/create-exam" element={<CreateExam idDocente={id_docente} />} />
          <Route path="/create-questions/:idProva" element={<CreateQuestions />} />
          <Route path="/correct-exam" element={<CorrectExam />} />  
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
