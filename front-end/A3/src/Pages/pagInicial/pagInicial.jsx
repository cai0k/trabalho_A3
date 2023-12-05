import React, { useState } from "react";
import axios from "axios";
import styles from "./pagInicialStyles.module.css";
import { Swiper, SwiperSlide } from "swiper/react";

function pagInicial() {
  const [slidePerView, setSlidePerView] = useState(1);
  const data = [
    { id: "1", image: "../../../IMG/ACBF.jpg" },
    { id: "2", image: "../../../IMG/F123.jpg" },
    { id: "3", image: "../../../IMG/fifa-23.jpg" },
    { id: "4", image: "../../../IMG/ghostReacon.jpg" },
    { id: "5", image: "../../../IMG/GOWRagnarok.jpg" },
    { id: "6", image: "../../../IMG/GTA6.jpg" },
    { id: "7", image: "../../../IMG/R6.jpg" },
    { id: "8", image: "../../../IMG/RD2.jpg" },
    { id: "9", image: "../../../IMG/the-last-of-1.jpg" },
    { id: "10", image: "../../../IMG/thesims4.jpg" },
  ];
  return (
    <div className={styles.container}>
        <header>
          <h1>SoulGames</h1>
        </header>
      <div className={styles.box}>
        {data.map((item) => (
          <div>
            <img src={item.image} alt="Slider" className={styles.slideItem} />
            <h2>{item.id}</h2>
          </div>
        ))}

      </div>
    </div>
  );
}
export default pagInicial;
