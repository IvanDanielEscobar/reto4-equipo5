import React, { useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import '@material/web/all.js';
import styles from '../styles/papas.module.css'
import { styles as typescaleStyles } from '@material/web/typography/md-typescale-styles.js';

export default function Hamburguesas() {
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
        HAMBURGUESAS
      </h2>

      {/* productos */}
        <main className={styles.mainContent}>
        {/* cardTitle */}
        <md-elevated-card className={styles.productCard}>
          <div className={styles.cardContent}>
            <h2 className={styles.cardTitle}>
              VIVI UNA EXPERIENCIA DE ORO
            </h2>
            {/* producto1 */}
            <div className={styles.productItem}>
              <div className={styles.productInfo}>
                <h3 className={styles.productName}>SIMPLE BIG GOLD</h3>
                <p className={styles.productDescription}>Pan de papa, medallón de carne smasheado, cheddar, lechuga, cebolla en brunoise, pepinillos y nuestra salsa gold.</p>
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
                <h4 className={styles.precio}>$10.000</h4>
              </div>
            </div>
            <div className={styles.productItem}>
              <div className={styles.productInfo}>
                <h3 className={styles.productName}>GOLD CLASSIC SIMPLE</h3>
                <p className={styles.productDescription}>Pan de papa, medallón de carne smasheado, cheddar, bacon, lechuga, tomate, cebolla en brunoise, ketchup, mostaza y nuestra salsa gold.</p>
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
                <h4 className={styles.precio}>$10.500</h4>
              </div>
            </div>
            <div className={styles.productItem}>
              <div className={styles.productInfo}>
                <h3 className={styles.productName}>GOLD CLASSIC SIMPLE</h3>
                <p className={styles.productDescription}>Pan de papa, medallón de carne smasheado, cheddar, bacon, lechuga, tomate, cebolla en brunoise, ketchup, mostaza y nuestra salsa gold.</p>
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
                <h4 className={styles.precio}>$10.500</h4>
              </div>
            </div>
            <div className={styles.productItem}>
              <div className={styles.productInfo}>
                <h3 className={styles.productName}>GOLD BURGUER SIMPLE</h3>
                <p className={styles.productDescription}>Pan de papa, medallón de carne smasheado, cheddar, bacon, lechuga, tomate, cebolla en brunoise, pepinillos y nuestra salsa gold.</p>
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
                <h4 className={styles.precio}>$10.300</h4>
              </div>
            </div>
            <div className={styles.productItem}>
              <div className={styles.productInfo}>
                <h3 className={styles.productName}>GOLD VEGGIE SIMPLE</h3>
                <p className={styles.productDescription}>Pan de papa, medallón VEGGIE, cheddar, lechuga, tomate, cebolla en brunoise y nuestra salsa gold.</p>
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
                <h4 className={styles.precio}>$10.000</h4>
              </div>
            </div>
             <div className={styles.productItem}>
              <div className={styles.productInfo}>
                <h3 className={styles.productName}>DOBLE BIG GOLD</h3>
                <p className={styles.productDescription}>Pan de papa, doble medallón de carne smasheado, doble cheddar, lechuga, cebolla en brunoise, pepinillos y nuestra salsa gold.</p>
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
                <h4 className={styles.precio}>$11.500</h4>
              </div>
            </div>
            <div className={styles.productItem}>
              <div className={styles.productInfo}>
                <h3 className={styles.productName}>GOLD CLASSIC DOBLE</h3>
                <p className={styles.productDescription}>Pan de papa, doble medallón de carne smasheado, doble cheddar, bacon, cebolla en brunoise, ketchup, mostaza y nuestra salsa gold.</p>
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
                <h4 className={styles.precio}>$12.000</h4>
              </div>
            </div>
            <div className={styles.productItem}>
              <div className={styles.productInfo}>
                <h3 className={styles.productName}>GOLD BURGUER DOBLE</h3>
                <p className={styles.productDescription}>Pan de papa, doble medallón de carne smasheado, doble cheddar, bacon, lechuga, tomate, cebolla en brunoise, pepinillos y nuestra salsa gold.</p>
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
                <h4 className={styles.precio}>$11.800</h4>
              </div>
            </div>
          </div>
        </md-elevated-card>  
      </main>
    </div>
  );
}