import React from 'react';

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.footerContainer}>
        <div style={styles.column}>
          <h3 style={styles.columnTitle}>Wah Sweet and Bakers</h3>
          <p style={styles.aboutText}>
            The Wah Sweet and Bakers – Where tradition meets taste. We've been serving the
            finest sweets and treats for generations, maintaining the highest standards of
            quality and authenticity.
          </p>
        </div>

        <div style={styles.column}>
          <h3 style={styles.columnTitle}>Quick Links</h3>
          <ul style={styles.linkList}>
            <li>
              <a
                href="#home"
                style={styles.link}
                onMouseOver={(e) => (e.target.style.color = '#FFD700')}
                onMouseOut={(e) => (e.target.style.color = '#FFF')}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                style={styles.link}
                onMouseOver={(e) => (e.target.style.color = '#FFD700')}
                onMouseOut={(e) => (e.target.style.color = '#FFF')}
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#products"
                style={styles.link}
                onMouseOver={(e) => (e.target.style.color = '#FFD700')}
                onMouseOut={(e) => (e.target.style.color = '#FFF')}
              >
                Our Products
              </a>
            </li>
            <li>
              <a
                href="#services"
                style={styles.link}
                onMouseOver={(e) => (e.target.style.color = '#FFD700')}
                onMouseOut={(e) => (e.target.style.color = '#FFF')}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#contact"
                style={styles.link}
                onMouseOver={(e) => (e.target.style.color = '#FFD700')}
                onMouseOut={(e) => (e.target.style.color = '#FFF')}
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        <div style={styles.column}>
          <h3 style={styles.columnTitle}>Our Products</h3>
          <ul style={styles.linkList}>
            <li>
              <a
                href="#"
                style={styles.link}
                onMouseOver={(e) => (e.target.style.color = '#FFD700')}
                onMouseOut={(e) => (e.target.style.color = '#FFF')}
              >
                <i className="fas fa-cake-candles"></i> Cake
              </a>
            </li>
            <li>
              <a
                href="#"
                style={styles.link}
                onMouseOver={(e) => (e.target.style.color = '#FFD700')}
                onMouseOut={(e) => (e.target.style.color = '#FFF')}
              >
                <i className="fas fa-candy-cane"></i> Sweets
              </a>
            </li>
            <li>
              <a
                href="#"
                style={styles.link}
                onMouseOver={(e) => (e.target.style.color = '#FFD700')}
                onMouseOut={(e) => (e.target.style.color = '#FFF')}
              >
                <i className="fas fa-cookie"></i> Biscuits
              </a>
            </li>
            <li>
              <a
                href="#"
                style={styles.link}
                onMouseOver={(e) => (e.target.style.color = '#FFD700')}
                onMouseOut={(e) => (e.target.style.color = '#FFF')}
              >
                <i className="fas fa-burger"></i> Fast Food
              </a>
            </li>
            <li>
              <a
                href="#"
                style={styles.link}
                onMouseOver={(e) => (e.target.style.color = '#FFD700')}
                onMouseOut={(e) => (e.target.style.color = '#FFF')}
              >
                <i className="fas fa-bread-slice"></i> Bakery Goods
              </a>
            </li>
            <li>
              <a
                href="#"
                style={styles.link}
                onMouseOver={(e) => (e.target.style.color = '#FFD700')}
                onMouseOut={(e) => (e.target.style.color = '#FFF')}
              >
                <i className="fas fa-pepper-hot"></i> Spice
              </a>
            </li>
            <li>
              <a
                href="#"
                style={styles.link}
                onMouseOver={(e) => (e.target.style.color = '#FFD700')}
                onMouseOut={(e) => (e.target.style.color = '#FFF')}
              >
                <i className="fas fa-glass-water"></i> Refreshments
              </a>
            </li>
          </ul>
        </div>

        <div style={styles.column}>
          <h3 style={styles.columnTitle}>Contact Info</h3>
          <ul style={styles.contactList}>
            <li style={styles.contactItem}>
              <i className="fas fa-envelope" style={styles.contactIcon}></i>
              <a
                href="mailto:wahsweetsandbakers@gmail.com"
                style={styles.contactLink}
                onMouseOver={(e) => (e.target.style.color = '#FFD700')}
                onMouseOut={(e) => (e.target.style.color = '#FFF')}
              >
                wahsweetsandbakers@gmail.com
              </a>
            </li>
            <li style={styles.contactItem}>
              <i className="fas fa-phone" style={styles.contactIcon}></i>
              <a
                href="tel:+92514916068"
                style={styles.contactLink}
                onMouseOver={(e) => (e.target.style.color = '#FFD700')}
                onMouseOut={(e) => (e.target.style.color = '#FFF')}
              >
                +92 51 4916068
              </a>
            </li>
            <li style={styles.contactItem}>
              <i className="fas fa-clock" style={styles.contactIcon}></i>
              <span style={styles.contactText}>Daily: 6AM – 12AM</span>
            </li>
            <li style={styles.contactItem}>
              <i className="fas fa-map-marker-alt" style={styles.contactIcon}></i>
              <span style={styles.contactText}>Multiple locations across the city</span>
            </li>
          </ul>

          <div style={styles.socialMedia}>
            <h4 style={styles.socialTitle}>Our Social Media Links</h4>
            <div style={styles.socialIcons}>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.socialIcon}
                onMouseOver={(e) => (e.target.style.background = '#FFD700')}
                onMouseOut={(e) => (e.target.style.background = '#6B3E26')}
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.socialIcon}
                onMouseOver={(e) => (e.target.style.background = '#FFD700')}
                onMouseOut={(e) => (e.target.style.background = '#6B3E26')}
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div style={styles.copyright}>
        <p style={styles.copyrightText}>
          © 2025 Wah Sweet and Bakers. All rights reserved. | Crafted by{' '}
          <a
            href="#"
            target="_blank"
            style={styles.devLink}
            onMouseOver={(e) => (e.target.style.color = '#FFD700')}
            onMouseOut={(e) => (e.target.style.color = '#E9C46A')}
          >
            ASH Techs
          </a>
        </p>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    background: 'linear-gradient(135deg, #3B2A20 0%, #6B3E26 100%)',
    color: '#FFF',
    fontFamily: "'Poppins', sans-serif",
  },
  footerContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '60px 20px',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '40px',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
  },
  columnTitle: {
    fontSize: '22px',
    fontWeight: 'bold',
    color: '#E9C46A',
    marginBottom: '20px',
  },
  aboutText: {
    fontSize: '15px',
    lineHeight: '1.6',
    color: '#DDD',
  },
  linkList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  link: {
    color: '#FFF',
    textDecoration: 'none',
    fontSize: '16px',
    display: 'block',
    marginBottom: '10px',
    transition: 'color 0.3s',
  },
  contactList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  contactItem: {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: '15px',
  },
  contactIcon: {
    marginRight: '10px',
    color: '#E9C46A',
    fontSize: '16px',
    marginTop: '3px',
  },
  contactLink: {
    color: '#FFF',
    textDecoration: 'none',
    fontSize: '15px',
    transition: 'color 0.3s',
  },
  contactText: {
    color: '#DDD',
    fontSize: '15px',
  },
  socialMedia: {
    marginTop: '30px',
  },
  socialTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#E9C46A',
    marginBottom: '15px',
  },
  socialIcons: {
    display: 'flex',
    gap: '15px',
  },
  socialIcon: {
    width: '45px',
    height: '45px',
    borderRadius: '50%',
    background: '#6B3E26',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#FFF',
    fontSize: '20px',
    textDecoration: 'none',
    transition: 'background 0.3s',
  },
  copyright: {
    background: '#2A1A10',
    padding: '20px',
    textAlign: 'center',
  },
  copyrightText: {
    margin: 0,
    fontSize: '14px',
    color: '#DDD',
  },
  devLink: {
    color: '#E9C46A',
    textDecoration: 'none',
    fontWeight: 'bold',
    transition: 'color 0.3s',
  },
};
