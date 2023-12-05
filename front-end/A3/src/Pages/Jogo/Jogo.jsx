import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import styles from "./jogoStyles.module.css";
import Plataforma from "../Plataforma/Plataforma";
import { Link } from "react-router-dom";

function Jogo() {
  const [plataforma, setPlataforma] = useState("");
  const [nota, setNota] = useState("");
  const [imagem, setImagem] = useState("");
  const [preco, setPreco] = useState("");
  const [nome, setNome] = useState("");
  const [categorias, setCategoria] = useState("");
  const [lancamento, setLancamento] = useState("");
  const [error, setError] = useState("");

  const handleJogo = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/verificarJogo",
        JSON.stringify({ nome }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      if (!error?.response) {
        console.log("if");
        const response = await axios.post(
          "http://localhost:3000/cadastrarJogo",
          JSON.stringify({ plataforma, nota, imagem, preco, nome, categorias, lancamento }),
          {
            headers: { "Content-Type": "application/json" },
          }
        );
        window.location.href = "/pagInicial";
      } else {
        console.log("else");
        setError("Jogo já existe");
      }
    } catch (error) {
      console.error("Erro durante o cadastro do jogo:", error);
    }
  }
  const handleExcluir = async (e) => {
    try {
      const response = await axios.delete(
        "http://localhost:3000/deletarJogo",
        JSON.stringify({ nome }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
  
      if (response.status === 200) {
        console.log("Jogo excluído com sucesso!");
        // Adicione qualquer lógica adicional aqui após a exclusão bem-sucedida.
      } else {
        setError("Erro ao excluir o jogo");
      }
    } catch (error) {
      console.error("Erro durante a exclusão do jogo:", error);
      setError("Erro ao excluir o jogo");
    }
  }; 

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h2 className={styles.titulo}>Cadastro do jogo</h2>
        <form onSubmit={handleJogo}>
          <input
            className="input"
            type="text"
            placeholder="Nome da plataforma"
            value={plataforma}
            onChange={(e) => setPlataforma(e.target.value)}
          />
          <input
            className="input"
            type="email"
            placeholder="Nota"
            value={nota}
            onChange={(e) => setNota(e.target.value)}
          />
          <input
            className="input"
            type="text"
            placeholder="URL da imagem do jogo"
            value={imagem}
            onChange={(e) => setImagem(e.target.value)}
          />
          <input
            className="input"
            type="text"
            placeholder="Preço do jogo"
            value={preco}
            onChange={(e) => setPreco(e.target.value)}
          />
          <input
            className="input"
            type="text"
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <input
            className="input"
            type="text"
            placeholder="Categoria do jogo"
            value={categorias}
            onChange={(e) => setCategoria(e.target.value)}
          />
           <input
            className="input"
            type="text"
            placeholder="Data de lancamento"
            value={lancamento}
            onChange={(e) => setLancamento(e.target.value)}
          />
          <button type="submit" onClick={(e) => handleJogo(e)}>
            Confirmar
          </button>
          <button
            className={styles.btnExcluir}
            type="button"
            onClick={handleExcluir}>
            Excluir
          </button>
        </form>
        <p>{error}</p>
      </div>
      <Link to="/pagInicial">
        <button className={styles.btnVoltar}>Voltar</button>
      </Link>
    </div>
  );
}
export default Jogo;
