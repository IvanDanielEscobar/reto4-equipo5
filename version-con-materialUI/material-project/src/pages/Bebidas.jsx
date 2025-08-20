import React, { useState, useEffect } from 'react';
import '@material/web/all.js';
import { styles as typescaleStyles } from '@material/web/typography/md-typescale-styles.js';
import styles from '../styles/bebidas.module.css';

export default function Bebidas() {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    document.adoptedStyleSheets.push(typescaleStyles.styleSheet);
  }, []);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.container}>
      {/* Encabezado */}
      <header className={styles.header}>
        <a href="/hamburguesas" className={styles.headerLink}>
          <img src="/IMG/icono-burguer.png" alt="icono de hamburguesa" className={styles.headerIcon} />
          <article><small className={styles.headerText}>Burguers</small></article>
        </a>
        <a href="/papas" className={styles.headerLink}>
          <img src="/IMG/icono-papas.png" alt="icono de papas fritas" className={styles.headerIcon} />
          <article><small className={styles.headerText}>Fries</small></article>
        </a>
        <a href="/bebidas" className={styles.headerLink}>
          <img src="/IMG/icono-gaseosa.png" alt="icono de gaseosa" className={styles.headerIcon} />
          <div><small className={styles.headerText}>Bebidas</small></div>
        </a>
      </header>

      <h1 className={styles.title}>Nuestras Bebidas</h1>

      {/* cervezas */}
      <section className={`${styles.accordionItem} ${activeIndex === 0 ? styles.active : ''}`}>
        <div className={styles.accordionHeader} onClick={() => toggleAccordion(0)}>
          <h2>Cervezas</h2>
          <span className="material-icons">
            {activeIndex === 0 ? 'Ʌ' : 'V'}
          </span>
        </div>
        {activeIndex === 0 && (
          <div className={styles.accordionContent}>
            <div className={styles.productItem}>
              <img src="/public/IMG/cerveza_lata.jpg" alt="Cerveza en lata" />
              <div className={styles.productInfo}>
                <h3>Heineken en Lata</h3>
                <p>Lata 500ml</p>
                <div className={styles.productPrice}>$500</div>
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
              </div>
            </div>
            <div className={styles.productItem}>
              <img src="/public/IMG/cerveza_litro.jpg" alt="Cerveza de litro" />
              <div className={styles.productInfo}>
                <h3>Heineken de Litro</h3>
                <p>Botella 1L</p>
                <div className={styles.productPrice}>$1200</div>
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
              </div>
            </div>
          </div>
        )}
      </section>

      {/* gaseosas */}
      <section className={`${styles.accordionItem} ${activeIndex === 1 ? styles.active : ''}`}>
        <div className={styles.accordionHeader} onClick={() => toggleAccordion(1)}>
          <h2>Gaseosas</h2>
          <span className="material-icons">
            {activeIndex === 1 ? 'Ʌ' : 'V'}
          </span>
        </div>
        {activeIndex === 1 && (
          <div className={styles.accordionContent}>
            <div className={styles.productItem}>
              <img src="/public/IMG/coca_fnegro.jpg" alt="Coca Cola" />
              <div className={styles.productInfo}>
                <h3>Coca Cola</h3>
                <p>Lata 500ml</p>
                <div className={styles.productPrice}>$400</div>
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
              </div>
            </div>
            <div className={styles.productItem}>
              <img src="/public/IMG/fanta_fnegro.jpg" alt="Fanta" />
              <div className={styles.productInfo}>
                <h3>Fanta</h3>
                <p>Lata 500ml</p>
                <div className={styles.productPrice}>$400</div>
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
              </div>
            </div>
            <div className={styles.productItem}>
              <img src="/public/IMG/sprite_fnegro.jpg" alt="Sprite" />
              <div className={styles.productInfo}>
                <h3>Sprite</h3>
                <p>Lata 500ml</p>
                <div className={styles.productPrice}>$400</div>
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
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Acordeón Aguas */}
      <section className={`${styles.accordionItem} ${activeIndex === 2 ? styles.active : ''}`}>
        <div className={styles.accordionHeader} onClick={() => toggleAccordion(2)}>
          <h2>Aguas</h2>
          <span className="material-icons">
            {activeIndex === 2 ? 'Ʌ' : 'V'}
          </span>
        </div>
        {activeIndex === 2 && (
          <div className={styles.accordionContent}>
            <div className={styles.productItem}>
              <img src="/public/IMG/agua_con_gas.jpg" alt="Agua con gas" />
              <div className={styles.productInfo}>
                <h3>Agua con gas</h3>
                <p>Botella 500ml</p>
                <div className={styles.productPrice}>$400</div>
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
              </div>
            </div>
            <div className={styles.productItem}>
              <img src="/public/IMG/agua_sin_gas.jpg" alt="Agua sin gas" />
              <div className={styles.productInfo}>
                <h3>Agua sin gas</h3>
                <p>Botella 500ml</p>
                <div className={styles.productPrice}>$400</div>
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
              </div>
            </div>
            <div className={styles.productItem}>
              <img src="/public/IMG/agua_saborizada.jpg" alt="Agua con gas" />
              <div className={styles.productInfo}>
                <h3>Agua saborizada</h3>
                <p>Botella 500ml</p>
                <div className={styles.productPrice}>$400</div>
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
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
