import React, { useState } from "react";
import axios from "axios";
import styles from "./plataformaStyles.module.css";
import { Link } from "react-router-dom";

function Plataforma() {
  const [nome, setNome] = useState("");
  const [nota, setNota] = useState("");

  const handlePlataforma = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/verificarPlat",
        JSON.stringify({ nome }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      if (!error?.response) {
        console.log("if");
        const response = await axios.post(
          "http://localhost:3000/cadastrarPlat",
          JSON.stringify({ nome, nota }),
          {
            headers: { "Content-Type": "application/json" },
          }
        );
        window.location.href = "/pagInicial";
      } else {
        console.log("else");
        setError("Plataforma já existe");
      }
    } catch (error) {
      console.error("Erro durante o cadastro da plataforma:", error);
    }
  };

  const handleExcluir = async (nome) => {
    try {
      const response = await axios.delete(
        "http://localhost:3000/deletarPlat",
        JSON.stringify({ nome }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      if (response.status === 200) {
        console.log("Plataforma excluída com sucesso!");
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
        </form>
      </div>
      <Link to="/pagInicial">
        <button className={styles.btnVoltar}>Voltar</button>
      </Link>
      <button type="submit" onClick={(e) => handleExcluir(e)}>
        Excluir
      </button>
    </div>
  );
}
export default Plataforma;
