import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import AppAgenda from "./pages/agenda";
import AppProvasAtivas from "./pages/provasAtivas";
import AppProvasConcluidas from "./pages/provasConcluidas";
import AppHome from "./pages/home";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<AppHome />} />
          <Route path="/agenda" element={<AppAgenda />} />
          <Route path="/provas-ativas" element={<AppProvasAtivas />} />
          <Route path="/provas-concluidas" element={<AppProvasConcluidas />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
