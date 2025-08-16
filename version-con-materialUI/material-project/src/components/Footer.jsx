export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: 'black',
        textAlign: 'center',
        padding: '1rem',
        marginTop: '3rem'
      }}
    >
      <a
        href="https://wa.me/+543585147240/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ margin: '0 1rem' }}
      >
        <img
          src="/IMG/icono_wsp.jpeg"
          alt="WhatsApp"
          style={{ width: '40px', height: '40px' }}
        />
      </a>
      <a
        href="https://www.instagram.com/goldburger.rc/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ margin: '0 1rem' }}
      >
        <img
          src="/IMG/icono_instagram.png"
          alt="Instagram"
          style={{ width: '40px', height: '40px' }}
        />
      </a>
    </footer>
  );
}
