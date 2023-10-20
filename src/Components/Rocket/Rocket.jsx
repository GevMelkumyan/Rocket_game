import React from "react";
import styles from "./Rocket.module.css";
const Rocket = () => {
  return (
    <div className={styles.container}>
      <div className={styles.crashTimer}>
        <div>
          <img
            src="https://get-x.in/_nuxt/img/rocket2.2e09b93.svg"
            alt="rocket"
          />
        </div>
        <div className={styles.loading}>
          <b>Заправляем шаттл...</b>
          <div className={styles.loader}>
            <div className={styles.loadLine}></div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Rocket;
