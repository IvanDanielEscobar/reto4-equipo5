import React from 'react';
import styles from '../styles/home.module.css';

function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>¡Bienvenido a Gold Burguer!</h1>
        <p className={styles.subtitle}>
          Sabores inigualables, calidad suprema. Descubre el verdadero sabor de la hamburguesa artesanal.
        </p>
        <div className={styles.button}>
        <md-filled-button>
      Nuestros Productos
    </md-filled-button>
    </div>
      </header>
    </div>
  );
}

export default Home;
