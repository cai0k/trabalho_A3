import axios from "axios";
import styles from "./pagInicialStyles.module.css";
import { useEffect, useState } from "react";

function PagInicial() {
  const [jogos, setJogos] = useState([]);
  const [jogoPesquisa, setJogoPesquisa] = useState({});

  const [showPesquisa, setShowPesquisa] = useState(false);

  const [categoriaFiltro, setCategoriaFiltro] = useState("");

  useEffect(() => {
    buscarJogos();
  }, []);

  const buscarJogos = async () => {
    try {
      // Fazer a requisição para a API
      const response = await axios.get(
        "http://localhost:3000/selecionarImgJogo"
      );
      setJogos(response.data);
    } catch (error) {
      console.error("Erro ao buscar jogos:", error);
    }
  };

  const handleFiltrarPorCategoria = () => {
    // Filtra os jogos com base na categoria
    const jogosFiltrados = jogos.filter(
      (item) => item.categoria === categoriaFiltro
    );
    setJogos(jogosFiltrados);
  };

  const pesquisar = async () => {
    const inputPesquisa = document.getElementById("inputPesquisaJogoID");
    const nomeDoJogo = inputPesquisa.value;
    if (nomeDoJogo == "") {
      buscarJogos();
      setShowPesquisa(false)
      return 
    }
    setShowPesquisa(true)
    

    try {
      const response = await axios.get(
        "http://localhost:3000/selecionarJogo/" + nomeDoJogo
      );

      setJogoPesquisa(response.data)
    } catch (error) {
      console.error("Erro ao buscar jogos:", error);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.pesquisa}>
        <div>
          <input
            type="text"
            placeholder="Pesquisar jogo por nome"
            id="inputPesquisaJogoID"
          />
          <span onClick={pesquisar}>🔍</span>
        </div>
      </div>
      <div className={styles.box}>
        {jogos.length > 0 && showPesquisa == false && jogos.map((item) => (
          <div className={styles.cardJogo} key={item.id}>
            <img src={item.imagem} alt="Slider" className={styles.slideItem} />
            <h2>Nome: {item.nome}</h2>
            <h2>Preço: R${item.preco}</h2>
            <h2>Categoria(s): {item.categorias}</h2>
            <h2>Data de lançamento: {item.lancamento}</h2>
            <h2>Nota: {item.nota}</h2>
          </div>
        ))}
        {jogoPesquisa && showPesquisa &&(
          <div className={styles.cardJogo}>
            <img src={jogoPesquisa.imagem} alt="Slider" className={styles.slidejogoPesquisa} />
            <h2>Nome: {jogoPesquisa.nome}</h2>
            <h2>Preço: R${jogoPesquisa.preco}</h2>
            <h2>Categoria(s): {jogoPesquisa.categorias}</h2>
            <h2>Data de lançamento: {jogoPesquisa.lancamento}</h2>
            <h2>Nota: {jogoPesquisa.nota}</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default PagInicial;
