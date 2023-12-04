// frontend/src/components/Login.jsx
import React, { useState } from 'react';
import axios from 'axios';
import styles from './loginStyle.module.css'
//import { loginUsuario } from '../utils/api';

function Login() {
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault(); // Previne o comportamento padrão do formulário
  
    console.log(nome, senha);
    
    try {
      const response = await axios.post('http://localhost:3000/verificaUser',
      JSON.stringify({nome, senha}),
      {
          headers: {'Content-Type': 'application/json'}
      }
    );
      
    } catch (error) {
        if(!error?.response){
          setError('Erro ao acessar o servidor')
        } else if(error.response.status == 401){
          setError('Usuario ou senha invalidos')
        }
    }
  };

  return (
    <div>
      <h2 className={styles.titulo}>Login</h2>
      <form onSubmit={handleLogin}>
        <input type="text" placeholder="Usuario" value={nome} onChange={(e) => setNome(e.target.value)} />
        <input type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
        <button type='submit' onClick={(e) => handleLogin(e)}>Entrar</button>
      </form>
      <p>{error}</p>
    </div>
  );
};

export default Login;
