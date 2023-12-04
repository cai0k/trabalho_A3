import React from 'react';
import './Biblioteca.css';  

function Biblioteca() {
  return (
    <div id="biblioteca">
      <button className="cabecalho-inicial" onClick={() => window.location.href = "./configuracoes.html"}>Configurações</button>
      <button className="cabecalho-inicial" onClick={() => window.location.href = "./paginaInicial.html"}>Voltar</button>
      <button className="cabecalho-inicial" onClick={() => window.location.href = "./perfil.html"}>Perfil</button>
    </div>
  );
}

function App() {
  return (
    <div>
      <Biblioteca />
      <script src="biblioteca.js"></script>
    </div>
  );
}

export default Biblioteca;
