import * as React from "react";
import Layout from "../../components/layout/Layout";
import Card from "../../components/card/Card";
import { items } from "../../data";
import * as styles from "./home.module.scss";

export default function Home() {

  
  return (
    <Layout>
      <div className={styles.homeWrapper}>
        {items?.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </Layout>
  );
}
