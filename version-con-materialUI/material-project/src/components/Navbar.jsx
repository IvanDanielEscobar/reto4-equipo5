import '@material/web/all.js';

export default function Navbar() {
  useEffect(() => {
    const anchorEl = document.querySelector('#menu-productos-anchor');
    const menuEl = document.querySelector('#menu-productos');
    if (anchorEl && menuEl) {
      anchorEl.addEventListener('click', () => {
        menuEl.open = !menuEl.open;
      });
    }
  }, []);

  return (
    <nav style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0.5rem 1rem',
      backgroundColor: '#ffc107',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      {/* Logo y Nombre */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <img src="/IMG/logo-gold.png" alt="logo gold" style={{ height: '48px' }} />
        <span style={{ fontWeight: 'bold', fontSize: '1.5rem', color: '#212529' }}>
          GOLD BURGUER
        </span>
      </div>

      {/* Links y Menú */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
        <a href="/" style={{ textDecoration: 'none', color: '#212529' }}>Arma tu burguer</a>
        <a href="/SobreNosotros" style={{ textDecoration: 'none', color: '#212529' }}>Sobre Nosotros</a>

        <div style={{ margin: '16px' }}>
          <md-filled-button id="menu-productos-anchor">Productos</md-filled-button>
        </div>

        <md-menu positioning="fixed" id="menu-productos" anchor="menu-productos-anchor">
          <md-menu-item>
            <div slot="headline"><a href="/Hamburguesas" style={{ textDecoration: 'none' }}>Hamburguesas</a></div>
          </md-menu-item>
          <md-menu-item>
            <div slot="headline"><a href="/Bebidas" style={{ textDecoration: 'none' }}>Bebidas</a></div>
          </md-menu-item>
          <md-menu-item>
            <div slot="headline"><a href="/Papas" style={{ textDecoration: 'none' }}>Papas</a></div>
          </md-menu-item>
        </md-menu>

        {/* Botones a la derecha */}
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <md-filled-tonal-icon-button>
            <a href="/ubicacion"><span className="material-icons">location_on</span></a>
          </md-filled-tonal-icon-button>
          <md-filled-tonal-icon-button>
            <a href="/carrito"><span className="material-icons">shopping_cart</span></a>
          </md-filled-tonal-icon-button>
        </div>
      </div>
    </nav>
  );
}
