import React from "react";
import { useAppContext } from "../../context/appContext";
import * as styles from "./singleProduct.module.scss";

export default function SingleProduct() {
  const { product } = useAppContext();

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.imgHolder}>
          <img src={product.image} alt="product" />
          <div className={styles.name}>
            <h1>{product.name}</h1>
          </div>
        </div>
        <div className={styles.desc}>
          <p>{product.description}</p>
        </div>
      </div>
      <h3>{product.title}</h3>
    </div>
  );
}
