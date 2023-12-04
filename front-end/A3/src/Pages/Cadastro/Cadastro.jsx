// frontend/src/components/Cadastro.jsx
import { useState } from 'react';
//import { cadastrarUsuario, getTest } from '../../utils/api';
import styles from './cadastroStyles.module.css'
import axios from 'axios';

function Cadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleCadastro = async (e) => {
    e.preventDefault(); // Previne o comportamento padrão do formulário
  
    console.log(nome, email, senha);
    
      const response = await axios.post('http://localhost:3000/cadastrarUser',
      JSON.stringify({nome, email, senha}),
      {
          headers: {'Content-Type': 'application/json'}
      }
    );
      
  };
  
  return (
    <div className={styles.container}>
      <div>
        <h2 className={styles.titulo}>Cadastro</h2>
        <form onSubmit={handleCadastro}>
          <input className='input' type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} />
          <input className='input' type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input className='input' type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
          <button type='submit'>Cadastrar</button>
        </form>
      </div>
    </div>
  );
}

export default Cadastro;
