// frontend/src/components/Cadastro.jsx
import { useState } from "react";
import styles from "./cadastroStyles.module.css";
import axios from "axios";
import { Link } from "react-router-dom";

function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleCadastro = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post(
        "http://localhost:3000/verificarEmail",
        JSON.stringify({ email }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
  
      if (!error?.response) {
        console.log('if')
        const response = await axios.post(
          "http://localhost:3000/cadastrarUser",
          JSON.stringify({ nome, email, senha }),
          {
            headers: { "Content-Type": "application/json" },
          }
        );
        window.location.href = '/';
      } else {
        console.log('else')
        setError("E-mail já existe");
      }
    } catch (error) {
      console.error('Erro durante o cadastro:', error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h2 className={styles.titulo}>Cadastro</h2>
        <form onSubmit={handleCadastro}>
          <input
            className="input"
            type="text"
            placeholder="Usuario"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <input
            className="input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="input"
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
            <button type="submit" onClick={(e) => handleCadastro(e)}>
              Confirmar
            </button>
        </form>
        <p>{error}</p>
      </div>
    </div>
  );
}

export default Cadastro;
