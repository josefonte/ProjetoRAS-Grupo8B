import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import CreateExam from './components/CreateExam';
import CreateQuestions from './components/CreateQuestions';
import MainPage from './components/MainPage';

function App() {
  const [exams, setExams] = useState([]);

  const addExam = (newExam) => {
    setExams([...exams, newExam]);
  };

  return (
    <div className="wrapper">
      <BrowserRouter>
        <Navbar />

        <Routes>
          {/* Add the MainPage route here */}
          <Route path="/" element={<MainPage />} />
          <Route path="/create-exam" element={<CreateExam />} />
          <Route path="/create-questions" component={CreateQuestions} />
          {/* Add more routes as needed */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
