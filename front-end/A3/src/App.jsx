//import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './Pages/Login/Login';
import PagInicial from './Pages/pagInicial/pagInicial';
import Cadastro from './Pages/Cadastro/Cadastro';
import Jogo from './Pages/Jogo/Jogo';
// import pesquisa from './Components/searchBar'
// import SearchBar from './Components/searchBar';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/Cadastro" element={<Cadastro/>} />
        <Route path="/pagInicial" element={<PagInicial/>} />
        <Route path="/Jogo" element={<Jogo/>} />
      </Routes>
    //   <>
    
    //   <PagInicial/>
    // </>
  );
}

export default App;
