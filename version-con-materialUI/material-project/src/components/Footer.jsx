import React from 'react';
import styles from '../styles/footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer} >
      <a
        href="https://wa.me/+543585147240/"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.socialLink}
      >
        <img
          src="/IMG/icono_wsp.jpeg"
          alt="WhatsApp"
          className={styles.socialIcon}
        />
      </a>
      <a
        href="https://www.instagram.com/goldburger.rc/"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.socialLink}
      >
        <img
          src="/IMG/icono_instagram.png"
          alt="Instagram"
          className={styles.socialIcon}
        />
      </a>
    </footer>
  );
}
