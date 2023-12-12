import styles from "./HeaderStyles.module.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>SoulGames</h1>
      <div>
        <Link to="/Plataforma">
          <button className={styles.btn}>Plataforma</button>
        </Link>
        <Link to="/jogo">
          <button className={styles.btn}>Jogo</button>
        </Link>
        <Link to="/">
          <button className={styles.btn}>Sair</button>
        </Link>
      </div>
    </header>
  );
}
