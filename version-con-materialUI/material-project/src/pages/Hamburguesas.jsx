import React, { useEffect } from 'react';
import '@material/web/all.js';
import { styles as typescaleStyles } from '@material/web/typography/md-typescale-styles.js';

export default function Hamburguesas() {
  useEffect(() => {
    document.adoptedStyleSheets.push(typescaleStyles.styleSheet);
  }, []);

  return (
    <div>
      {/* Encabezado */}
      <header style={{ textAlign: 'center', padding: '1rem' }}>
        <h1>Nuestras Burguers</h1>
      </header>

    </div>
  );
}
