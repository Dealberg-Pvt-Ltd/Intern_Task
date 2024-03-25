import React, { useContext } from "react";
import * as styles from "./card.module.scss";
import { navigate } from "gatsby";
import { AppContext } from "../../context/appContext";

export default function Card({ item }) {
  const { addProduct } = useContext(AppContext);

  const handleClick = () => {
    addProduct(item);
    navigate(`/products/${item.id}`);
  };

  return (
    <div className={styles.card} onClick={handleClick}>
      <div className={styles.wrapper}>
        <div className={styles.cardRow}>
          <img className={styles.img} src={item.image} alt="item" />
          <h1>{item.name}</h1>
        </div>

        <p>{item.title}</p>
        <button className={styles.button}>add</button>
      </div>
    </div>
  );
}
