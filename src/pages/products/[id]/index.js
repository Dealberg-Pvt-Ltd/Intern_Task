import React, { useState, useEffect } from "react";

import { items } from "../../../data";
import Layout from "../../../components/layout/Layout";

import * as styles from "./product.module.scss";

export default function ProductPage({ id }) {
  const [foundProduct, setFoundProduct] = useState(null);

  useEffect(() => {
    const found = items.find((item) => item.id == id);
    setFoundProduct(found);
  }, [id]);

  return (
    <Layout>
      {foundProduct ? (
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <div className={styles.imgHolder}>
              <img src={foundProduct.image} alt="product" />
              <div className={styles.name}>
                <h1>{foundProduct ? foundProduct.name : ""}</h1>
              </div>
            </div>
            <div className={styles.desc}>
              <p>{foundProduct ? foundProduct.description : ""}</p>
            </div>
          </div>
          <h3>{foundProduct ? foundProduct.title : ""}</h3>
        </div>
      ) : (
        <div>Not found...</div>
      )}
    </Layout>
  );
}
