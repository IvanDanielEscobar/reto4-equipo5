import React, { useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import '@material/web/all.js';
import styles from '../styles/papas.module.css'
import { styles as typescaleStyles } from '@material/web/typography/md-typescale-styles.js';

export default function Papas() {
  useEffect(() => {
    document.adoptedStyleSheets.push(typescaleStyles.styleSheet);
  }, []);

  return (
    <div className={styles.container}>
      {/* Encabezado */}
      <header className={styles.header}>
        <a href="/hamburguesas" className={styles.headerLink}>
          <img src="/public/IMG/icono-burguer.png" alt="icono de hamburguesa" className={styles.headerIcon} />
          <article><small className={styles.headerText}>Burguers</small></article>
        </a>
        <a href="/papas" className={styles.headerLink}>
          <img src="/public/IMG/icono-papas.png" alt="icono de papas fritas" className={styles.headerIcon} />
          <article><small className={styles.headerText}>Fries</small></article>
        </a>
        <a href="/bebidas" className={styles.headerLink}>
          <img src="/public/IMG/icono-gaseosa.png" alt="icono de gaseosa" className={styles.headerIcon} />
          <div><small className={styles.headerText}>Bebidas</small></div>
        </a>
      </header>

    {/* Titulo */}
      <h2 className={styles.title}>
        Fries
      </h2>


      {/* productos */}
        <main className={styles.mainContent}>
        {/* cardTitle */}
        <md-elevated-card className={styles.productCard}>
          <div className={styles.cardContent}>
            <h2 className={styles.cardTitle}>
              NUESTRAS DELICIAS FRITAS
            </h2>
            {/* producto1 */}
            <div className={styles.productItem}>
              <div className={styles.productInfo}>
                <h3 className={styles.productName}>BIG FRIES</h3>
                <p className={styles.productDescription}>Porción GRANDE de papas fritas.</p>
              </div>
              <div className={styles.actions}>
                <div className={styles.control}>
                  <md-outlined-button>-</md-outlined-button>
                  <span className={styles.cantidad}>1</span>
                  <md-outlined-button>+</md-outlined-button>
                </div>
                <md-filled-button className={styles.addButton}>
                  <md-icon>add_shopping_cart</md-icon> Agregar
                </md-filled-button>
                <h4 className={styles.precio}>$4.000</h4>
              </div>
            </div>
            <div className={styles.productItem}>
              <div className={styles.productInfo}>
                <h3 className={styles.productName}>CHEESE FRIES</h3>
                <p className={styles.productDescription}>Porción GRANDE de papas fritas con cheddar.</p>
              </div>
              <div className={styles.actions}>
                <div className={styles.control}>
                  <md-outlined-button>-</md-outlined-button>
                  <span className={styles.cantidad}>1</span>
                  <md-outlined-button>+</md-outlined-button>
                </div>
                <md-filled-button className={styles.addButton}>
                  <md-icon>add_shopping_cart</md-icon> Agregar
                </md-filled-button>
                <h4 className={styles.precio}>$4.500</h4>
              </div>
            </div>
            <div className={styles.productItem}>
              <div className={styles.productInfo}>
                <h3 className={styles.productName}>CHEESE BACON</h3>
                <p className={styles.productDescription}>Porción GRANDE de papas fritas con cheddar y bacon.</p>
              </div>
              <div className={styles.actions}>
                <div className={styles.control}>
                  <md-outlined-button>-</md-outlined-button>
                  <span className={styles.cantidad}>1</span>
                  <md-outlined-button>+</md-outlined-button>
                </div>
                <md-filled-button className={styles.addButton}>
                  <md-icon>add_shopping_cart</md-icon> Agregar
                </md-filled-button>
                <h4 className={styles.precio}>$5.000</h4>
              </div>
            </div>
            <div className={styles.productItem}>
              <div className={styles.productInfo}>
                <h3 className={styles.productName}>ONION CHEESE</h3>
                <p className={styles.productDescription}>Porción GRANDE de papas fritas con cheddar, bacon y cebolla de verdeo.</p>
              </div>
              <div className={styles.actions}>
                <div className={styles.control}>
                  <md-outlined-button>-</md-outlined-button>
                  <span className={styles.cantidad}>1</span>
                  <md-outlined-button>+</md-outlined-button>
                </div>
                <md-filled-button className={styles.addButton}>
                  <md-icon>add_shopping_cart</md-icon> Agregar
                </md-filled-button>
                <h4 className={styles.precio}>$5.300</h4>
              </div>
            </div>
            <div className={styles.productItem}>
              <div className={styles.productInfo}>
                <h3 className={styles.productName}>GOLDEN BOMB</h3>
                <p className={styles.productDescription}>Porción GRANDE de papas fritas con cheddar, bacon, cebolla de verdeo, 100gr de nuestro blend de carne y nuestra salsa <strong>GOLD</strong> .</p>
              </div>
              <div className={styles.actions}>
                <div className={styles.control}>
                  <md-outlined-button>-</md-outlined-button>
                  <span className={styles.cantidad}>1</span>
                  <md-outlined-button>+</md-outlined-button>
                </div>
                <md-filled-button className={styles.addButton}>
                  <md-icon>add_shopping_cart</md-icon> Agregar
                </md-filled-button>
                <h4 className={styles.precio}>$7.500</h4>
              </div>
            </div>
          </div>
        </md-elevated-card>  
      </main>
    </div>
  );
}

