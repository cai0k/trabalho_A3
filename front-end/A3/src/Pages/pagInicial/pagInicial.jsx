import axios from "axios";
import styles from "./pagInicialStyles.module.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function pagInicial() {
  const [jogos, setJogos] = useState([]);

  useEffect(() => {
    // Função para buscar os jogos
    const buscarJogos = async () => {
      try {
        // Fazer a requisição para a API
        const response = await axios.get(
          "http://localhost:3000/selecionarJogo"
        );
        console.log(response.data);
        // Atualizar o estado com os dados recebidos
        setJogos(response.data);
      } catch (error) {
        console.error("Erro ao buscar jogos:", error);
      }
    };

    // Chamar a função de busca ao carregar o componente
    buscarJogos();
  }, []);

  const handleFiltrarPorCategoria = () => {
    // Filtra os jogos com base na categoria
    const jogosFiltrados = jogos.filter(
      (item) => item.categoria === categoriaFiltro
    );
    setJogosFiltrados(jogosFiltrados);
  };

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        {jogos.map((item) => (
          <div className={styles.cardJogo} key={item.id}>
            <img src={item.image} alt="Slider" className={styles.slideItem} />
            <h2>{item.id}</h2>
          </div>
        ))}
      </div>
      <Link to="/Plataforma">
        <button className={styles.btnPlat}>Plataforma</button>
      </Link>
      <Link to="/jogo">
        <button className={styles.btnJogo}>Jogo</button>
      </Link>
      <Link to="/">
        <button className={styles.btnSair}>Sair</button>
      </Link>
    </div>
  );
}
export default pagInicial;
