import axios from "axios";
import styles from "./pagInicialStyles.module.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function PagInicial() {
  const [jogos, setJogos] = useState([]);
  const [categoriaFiltro, setCategoriaFiltro] = useState("");

  useEffect(() => {
    // Função para buscar os jogos
    const buscarJogos = async () => {
      try {
        // Fazer a requisição para a API
        const response = await axios.get("http://localhost:3000/selecionarImgJogo");
        console.log(response.data);

        setJogos(response.data);
      } catch (error) {
        console.error("Erro ao buscar jogos:", error);
      }
    };
    buscarJogos();
  }, []);

  const handleFiltrarPorCategoria = () => {
    // Filtra os jogos com base na categoria
    const jogosFiltrados = jogos.filter((item) => item.categoria === categoriaFiltro);
    setJogos(jogosFiltrados);
  };

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        {jogos.map((item) => (
          <div className={styles.cardJogo} key={item.id}>
            <img src={item.imagem} alt="Slider" className={styles.slideItem} />
            <h2>Nome: {item.nome}</h2>
            <h2>Preço: R${item.preco}</h2>
            <h2>Categoria(s): {item.categorias}</h2>
            <h2>Data de lançamento: {item.lancamento}</h2>
            <h2>Nota: {item.nota}</h2>
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

export default PagInicial;