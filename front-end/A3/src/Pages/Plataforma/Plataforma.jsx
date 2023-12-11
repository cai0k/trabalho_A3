import React, { useState } from "react";
import axios from "axios";
import styles from "./plataformaStyles.module.css";
import { Link } from "react-router-dom";

function Plataforma() {
  const [nome, setNome] = useState("");
  const [nota, setNota] = useState("");
  const [error, setError] = useState("");

  const handlePlataforma = async (e) => {
    e.preventDefault();
  
    try {
      const responseVerificar = await axios.post(
        "http://localhost:3000/verificarPlat",
        JSON.stringify({ nome }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
  
      if (!responseVerificar.data.existe) {
        console.log("Plataforma não existe, realizando o cadastro.");
        const responseCadastrar = await axios.post(
          "http://localhost:3000/cadastrarPlat",
          JSON.stringify({ nome, nota }),
          {
            headers: { "Content-Type": "application/json" },
          }
        );
  
        if (responseCadastrar.status === 200) {
          console.log("Plataforma cadastrada com sucesso!");
          window.location.href = "/pagInicial";
        } else {
          setError("Erro ao cadastrar a plataforma.");
        }
      } else {
        console.log("Plataforma já existe.");
        setError("Plataforma já existe");
      }
    } catch (error) {
      console.error("Erro durante o cadastro da plataforma:", error);
      setError("Erro durante o cadastro da plataforma");
    }
  };

  const handleExcluir = async () => {
    try {
      if (!nome) {
        console.log("Nenhum nome de plataforma fornecido.");
        return;
      }
  
      const response = await axios.delete(
        `http://localhost:3000/deletarPlat`,
        {
          headers: { "Content-Type": "application/json" },
          data: { nome: nome }
        }
      );
  
      if (response.status === 200) {
        console.log("Plataforma excluída com sucesso!");
        window.location.href = "/pagInicial";
      } else {
        setError("Erro ao excluir a plataforma");
      }
    } catch (error) {
      console.error("Erro durante a exclusão da plataforma:", error);
      setError("Erro ao excluir a plataforma");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h2 className={styles.titulo}>Cadastro de plataforma</h2>
        <form onSubmit={handlePlataforma}>
          <input
            className="input"
            type="text"
            placeholder="Nome da plataforma"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <input
            className="input"
            type="text"
            placeholder="Nota"
            value={nota}
            onChange={(e) => setNota(e.target.value)}
          />
          <button type="submit" onClick={(e) => handlePlataforma(e)}>
            Confirmar
          </button>
          <button
            className={styles.btnExcluir}
            type="button"
            onClick={handleExcluir}>
            Excluir
          </button>
        </form>
      </div>
      <Link to="/pagInicial">
        <button className={styles.btnVoltar}>Voltar</button>
      </Link>
    </div>
  );
}
export default Plataforma;
