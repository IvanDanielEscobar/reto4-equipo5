import React, { useEffect } from 'react';
import '@material/web/all.js';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/navbar.module.css';
import '../styles/global.css';
import { styles as typescaleStyles} from '@material/web/typography/md-typescale-styles';

export default function Navbar() {
  const navigate = useNavigate();

  // useEffect abre y cierra el menu al hacer click
  useEffect(() => {
    document.adoptedStyleSheets.push(typescaleStyles.styleSheet);
    const anchorEl = document.querySelector('#menu-productos-anchor');
    const menuEl = document.querySelector('#menu-productos');
    
    if (anchorEl && menuEl) {
      // abrir y cierrar el menu
      const openMenu = () => {
        menuEl.open = !menuEl.open;
      };
      anchorEl.addEventListener('click', openMenu);

      // todos los productos
      const menuItems = menuEl.querySelectorAll('md-menu-item');
      menuItems.forEach(item => {
        const itemClickHandler = (event) => {
          // Obtiene la URL del item
          const link = item.querySelector('a');
          if (link) {
            // Usa useNavigate para ir a la ruta
            navigate(link.getAttribute('href'));
            menuEl.open = false; // cierra el menu
          }
        };
        // agrega el evento clic a los items
        item.addEventListener('click', itemClickHandler);
      });

      // limpia el listener
      return () => {
        anchorEl.removeEventListener('click', openMenu);
        menuItems.forEach(item => {
          item.removeEventListener('click', () => {});
        });
      };
    }
  }, [navigate]);//
  
  return (
    <div>
    <nav className={styles.navbar}>
      {/* Logo y Nombre */}
      <div className={styles.logoContainer}>
        <img src="/IMG/logo-gold.png" alt="logo gold" className={styles.logoImagen} />
        <span className={styles.appName} >
          <div slot="headline"><a href="/">GOLD BURGUER</a></div>
        </span>
      </div>
      {/* menu mobile */}
      <div>
      <md-filled-icon-button onCLick={ () => setIsMobileMenuOpen(true)} className={styles.menuToggle}></md-filled-icon-button>
      </div>

      {/* menu escritorio */}
      <div className={styles.navLinksyMenu}>
        <a href="/" className={styles.navLink}>Arma tu burguer</a>
        <a href="/sobre_nosotros" className={styles.navLink}>Sobre Nosotros</a>

        <div className={styles.menuButtonWrapper}>
          <md-filled-button id="menu-productos-anchor">Productos</md-filled-button>
        </div>

        <md-menu positioning="fixed" id="menu-productos" anchor="menu-productos-anchor">
          <md-menu-item>
            <div slot="headline"><a href="/hamburguesas" className={styles.navItemLink}>Hamburguesas</a></div>
          </md-menu-item>
          <md-menu-item>
            <div slot="headline"><a href="/bebidas" className={styles.navItemLink}>Bebidas</a></div>
          </md-menu-item>
          <md-menu-item>
            <div slot="headline"><a href="/papas" className={styles.navItemLink}>Papas</a></div>
          </md-menu-item>
        </md-menu>

        {/* Botones a la derecha */}
        <div className={styles.rightButtons}>
          <md-filled-icon-button className={styles.iconButton}>
            <a href="/sobre_nosotros"><img src="/public/location_on_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg" alt="Ubicación"></img></a>
          </md-filled-icon-button>
          <md-filled-icon-button className={styles.iconButton}>
            <a href="/carrito"><img src="/public/shopping_cart_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg" alt="Carrito de compras"></img></a>
          </md-filled-icon-button>
        </div>
      </div>
    </nav>
    </div>
  );
}
