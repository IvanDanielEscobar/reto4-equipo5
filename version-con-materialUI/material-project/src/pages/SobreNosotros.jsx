import React, { useEffect } from 'react';
import '@material/web/all.js';
import { styles as typescaleStyles } from '@material/web/typography/md-typescale-styles.js';

export default function SobreNosotros() {
  useEffect(() => {
    document.adoptedStyleSheets.push(typescaleStyles.styleSheet);
  }, []);

  return (
    <>
      {/* Encabezado */}
      <header style={{ textAlign: 'center', padding: '1rem' }}>
        <h1>Conocé Nuestro Emprendimiento</h1>
      </header>

      {/* datos/main */}
      <main style={{ maxWidth: '900px', margin: 'auto', padding: '1rem' }}>
        <section style={{ marginBottom: '2rem' }}>
          <h2>¿Quiénes Somos?</h2>
          <p>
            Somos Matias, Santiago, Jonatan, Ivan y Nahuel, unos jóvenes emprendedores apasionados por la gastronomía.
            Desde 2023 comenzamos a crear nuestra propia hamburguesa, hecha a mano y con mucho amor.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2>Nuestra Historia</h2>
          <p>
            Todo comenzó en nuestra casa durante la pandemia, cuando decidimos transformar un hobby en una forma de vida.
            Con esfuerzo, creatividad y mucho amor por lo que hacemos, nació este emprendimiento que hoy sigue creciendo
            gracias al apoyo de nuestra comunidad.
          </p>
        </section>

        <section>
          <h2>Ubicación</h2>
          <p>
            📍 Estamos en Pasaje Río Pilcomayo 650, Río Cuarto, Córdoba, Argentina. Hacemos envíos a todo el país.
          </p>
          <md-filled-button id="ver-mapa-button" onClick={() => window.open(
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6834.661987727404!2d-64.3657198!3d-33.1269784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95cd9886a947bd01%3A0x7c5aa839aa9f03b!2sPje.%20R%C3%ADo%20Pilcomayo%20650%2C%20R%C3%ADo%20Cuarto%2C%20C%C3%B3rdoba%2C%20Argentina!5e0!3m2!1ses-419!2sar!4v1721064000000",
    "_blank")}>
      Ver en el Mapa
    </md-filled-button>

          <div style={{ marginTop: '16px' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6834.661987727404!2d-64.3657198!3d-33.1269784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95cd9886a947bd01%3A0x7c5aa839aa9f03b!2sPje.%20R%C3%ADo%20Pilcomayo%20650%2C%20R%C3%ADo%20Cuarto%2C%20C%C3%B3rdoba%2C%20Argentina!5e0!3m2!1ses-419!2sar!4v1721064000000"
              width="100%"
              height="300"
              style={{ border: 0, borderRadius: '10px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
      </main>

    </>
  );
}
