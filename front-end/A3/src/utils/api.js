// frontend/src/utils/api.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api'; 

export const loginUsuario = ({ email, senha }) => {

  var objeto = {
    email: email,
    senha: senha
  }

  return axios.post(`${API_BASE_URL}/usuarios/login`, { objeto });
};

// export const cadastrarUsuario = ({ nome, email, senha }) => {

//   var objeto = {
//     nome: nome,
//     email: email,
//     senha: senha
//   }

//   return axios.post(`${API_BASE_URL}/usuarios/cadastrar`, { objeto });
// };


export const cadastrarUsuario = ( nome, email, senha ) => {

  axios.post('http://localhost:3000/cadastrar', {
        nome: nome,
        email: email,
        senha: senha
      })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

};

export const getTest = () => {

  return axios.get('http://localhost:3000/');
  
};