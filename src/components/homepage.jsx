import React from 'react';
import Hero from './hero';
import ChooseCake from './choosecake';
import WhyChoose from './whychoose';
import Footer from './footer';

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

export default function Homepage() {
  return (
    <div style={{ fontFamily: "'Poppins', sans-serif" }}>
      <nav style={styles.navbar}>
        <div style={styles.navContainer}>
          <div style={styles.logoContainer}>
            <i className="fas fa-hat-chef" style={styles.logoIcon}></i>
            <span style={styles.logoText}>WAH Sweets & Bakers</span>
          </div>
          <div style={styles.navLinks}>
            <a
              href="#home"
              style={styles.navLink}
              onClick={e => { e.preventDefault(); scrollToSection('home'); }}
            >
              <i className="fas fa-home"></i> Home
            </a>
            <a
              href="#about"
              style={styles.navLink}
              onClick={e => { e.preventDefault(); scrollToSection('about'); }}
            >
              <i className="fas fa-info-circle"></i> About Us
            </a>
            <a
              href="#products"
              style={styles.navLink}
              onClick={e => { e.preventDefault(); scrollToSection('products'); }}
            >
              <i className="fas fa-box"></i> Products
            </a>
            <a
              href="#services"
              style={styles.navLink}
              onClick={e => { e.preventDefault(); scrollToSection('services'); }}
            >
              <i className="fas fa-utensils"></i> Services
            </a>
            <a
              href="#contact"
              style={styles.navLink}
              onClick={e => { e.preventDefault(); scrollToSection('contact'); }}
            >
              <i className="fas fa-envelope"></i> Contact Us
            </a>
            <span style={styles.cartBadge}>
              <i className="fas fa-shopping-cart"></i>
              <span id="cartCount" style={styles.cartCount}>0</span>
            </span>
          </div>
        </div>
      </nav>

      <div id="home"><Hero /></div>
      <div id="about" style={aboutStyles.section}>
        <div style={aboutStyles.container}>
          <div style={aboutStyles.imageContainer}>
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80"
              alt="Bakery"
              style={aboutStyles.image}
            />
          </div>
          <div style={aboutStyles.content}>
            <h2 style={aboutStyles.title}>About Us</h2>
            <p style={aboutStyles.description}>
              <strong>WAH Sweets & Bakers</strong> has been serving the community with delicious sweets and bakery items since 1995. Our passion is to deliver freshness, quality, and happiness in every bite. From traditional mithai to custom cakes, we blend heritage recipes with modern flavors.
            </p>
            <ul style={aboutStyles.list}>
              <li><i className="fas fa-check-circle" style={aboutStyles.icon}></i> Freshly baked goods every day</li>
              <li><i className="fas fa-check-circle" style={aboutStyles.icon}></i> Custom cakes for every occasion</li>
              <li><i className="fas fa-check-circle" style={aboutStyles.icon}></i> Fast and reliable home delivery</li>
              <li><i className="fas fa-check-circle" style={aboutStyles.icon}></i> Friendly staff and excellent service</li>
            </ul>
            <div style={aboutStyles.highlight}>
              <i className="fas fa-award" style={aboutStyles.awardIcon}></i>
              <span>Voted Best Bakery in Wah Cantt - 2024</span>
            </div>
          </div>
        </div>
      </div>
      <div id="products"><ChooseCake /></div>
     <div id="services" style={servicesStyles.section}>
  <div style={servicesStyles.container}>
    <div style={servicesStyles.imageContainer}>
      <img
        src="https://images.unsplash.com/photo-1542831371-d531d36971e6?auto=format&fit=crop&w=600&q=80"
        alt="Services"       
        style={servicesStyles.image}
      />
    </div>
    <div style={servicesStyles.content}>
      <h2 style={servicesStyles.title}>Our Services</h2>
      <p style={servicesStyles.description}>
        We offer a wide range of services to make your celebrations special and your daily life sweeter!
      </p>
      <ul style={servicesStyles.list}>
        <li><i className="fas fa-birthday-cake" style={servicesStyles.icon}></i> Custom cakes for birthdays, weddings, and events</li>
        <li><i className="fas fa-truck" style={servicesStyles.icon}></i> Fast and reliable home delivery</li>
        <li><i className="fas fa-users" style={servicesStyles.icon}></i> Event catering for all occasions</li>
        <li><i className="fas fa-gift" style={servicesStyles.icon}></i> Special gift packaging for sweets and bakery items</li>
        <li><i className="fas fa-headset" style={servicesStyles.icon}></i> 24/7 customer support</li>
      </ul>
      <div style={servicesStyles.highlight}>
        <i className="fas fa-star" style={servicesStyles.highlightIcon}></i>
        <span>Quality, Convenience, and Care – Every Day!</span>
      </div>
    </div>
  </div>
  <WhyChoose />
</div>
      <div id="contact" style={contactStyles.section}>
        <div style={contactStyles.card}>
          <h2 style={contactStyles.title}>
            <i className="fas fa-envelope" style={contactStyles.icon}></i> Contact Us
          </h2>
          <div style={contactStyles.infoRow}>
            <i className="fas fa-phone-alt" style={contactStyles.infoIcon}></i>
            <span style={contactStyles.infoText}>03061822874</span>
          </div>
          <div style={contactStyles.infoRow}>
            <i className="fas fa-paper-plane" style={contactStyles.infoIcon}></i>
            <span style={contactStyles.infoText}>info@wahsweets.com</span>
          </div>
          <div style={contactStyles.infoRow}>
            <i className="fas fa-map-marker-alt" style={contactStyles.infoIcon}></i>
            <span style={contactStyles.infoText}>Rahim yar khan post office kot samaba, street 34, house no 18</span>
          </div>
          <div style={contactStyles.socialRow}>
            <a href="#" style={contactStyles.socialIcon}><i className="fab fa-facebook-f"></i></a>
            <a href="#" style={contactStyles.socialIcon}><i className="fab fa-instagram"></i></a>
            <a href="#" style={contactStyles.socialIcon}><i className="fab fa-whatsapp"></i></a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

const styles = {
  navbar: {
    background: 'linear-gradient(90deg, #4B2C20 0%, #A0522D 100%)',
    padding: '15px 0',
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 1000,
    boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
  },
  navContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 20px',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  logoIcon: {
    fontSize: '28px',
    color: '#FFD700',
  },
  logoText: {
    fontSize: '24px',
    fontWeight: 'bold',
    background: 'linear-gradient(45deg, #FFD700, #FF4500)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  navLinks: {
    display: 'flex',
    gap: '25px',
    alignItems: 'center',
  },
  navLink: {
    color: '#FFF',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: '500',
    transition: 'color 0.3s',
    cursor: 'pointer',
  },
  cartBadge: {
    position: 'relative',
    color: '#FFD700',
    fontSize: '22px',
    cursor: 'pointer',
  },
  cartCount: {
    position: 'absolute',
    top: '-8px',
    right: '-10px',
    background: '#FF4500',
    color: '#FFF',
    borderRadius: '50%',
    padding: '2px 6px',
    fontSize: '12px',
    fontWeight: 'bold',
  },
};

const aboutStyles = {
  section: {
    padding: '80px 20px',
    background: '#f9f9f9',
    minHeight: '350px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    maxWidth: '1100px',
    margin: '0 auto',
    background: '#fff',
    borderRadius: '18px',
    boxShadow: '0 8px 32px rgba(107,62,38,0.10)',
    overflow: 'hidden',
  },
  imageContainer: {
    flex: '1 1 320px',
    minWidth: '320px',
    maxWidth: '400px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #FFD700 0%, #FFB347 100%)',
  },
  image: {
    width: '90%',
    height: 'auto',
    borderRadius: '16px',
    boxShadow: '0 4px 16px rgba(107,62,38,0.15)',
    margin: '24px 0',
  },
  content: {
    flex: '2 1 400px',
    padding: '40px 32px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  title: {
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#6B3E26',
    marginBottom: '18px',
  },
  description: {
    fontSize: '18px',
    color: '#6C757D',
    marginBottom: '18px',
    lineHeight: '1.6',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    marginBottom: '18px',
  },
  icon: {
    color: '#FFD700',
    marginRight: '10px',
    fontSize: '18px',
  },
  highlight: {
    display: 'flex',
    alignItems: 'center',
    background: '#FFF7EE',
    padding: '10px 18px',
    borderRadius: '12px',
    fontWeight: '600',
    color: '#A0522D',
    fontSize: '17px',
    boxShadow: '0 2px 8px rgba(107,62,38,0.07)',
    marginTop: '10px',
  },
  awardIcon: {
    color: '#FFD700',
    fontSize: '22px',
    marginRight: '10px',
  },
};

const servicesStyles = {
  section: {
    padding: '80px 20px',
    background: '#fff7ee',
    minHeight: '350px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    maxWidth: '1100px',
    margin: '0 auto 40px auto',
    background: '#fff',
    borderRadius: '18px',
    boxShadow: '0 8px 32px rgba(107,62,38,0.10)',
    overflow: 'hidden',
  },
  imageContainer: {
    flex: '1 1 320px',
    minWidth: '320px',
    maxWidth: '400px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #FFD700 0%, #FFB347 100%)',
  },
  image: {
    width: '90%',
    height: 'auto',
    borderRadius: '16px',
    boxShadow: '0 4px 16px rgba(107,62,38,0.15)',
    margin: '24px 0',
  },
  content: {
    flex: '2 1 400px',
    padding: '40px 32px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  title: {
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#6B3E26',
    marginBottom: '18px',
  },
  description: {
    fontSize: '18px',
    color: '#6C757D',
    marginBottom: '18px',
    lineHeight: '1.6',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    marginBottom: '18px',
  },
  icon: {
    color: '#FFD700',
    marginRight: '10px',
    fontSize: '18px',
  },
  highlight: {
    display: 'flex',
    alignItems: 'center',
    background: '#FFF7EE',
    padding: '10px 18px',
    borderRadius: '12px',
    fontWeight: '600',
    color: '#A0522D',
    fontSize: '17px',
    boxShadow: '0 2px 8px rgba(107,62,38,0.07)',
    marginTop: '10px',
  },
  highlightIcon: {
    color: '#FFD700',
    fontSize: '22px',
    marginRight: '10px',
  },
};

const contactStyles = {
  section: {
    padding: '80px 20px',
    background: '#f9f9f9',
    minHeight: '350px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    background: '#fff',
    borderRadius: '18px',
    boxShadow: '0 8px 32px rgba(107,62,38,0.10)',
    padding: '40px 32px',
    maxWidth: '420px',
    width: '100%',
    textAlign: 'center',
  },
  title: {
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#6B3E26',
    marginBottom: '28px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',
  },
  icon: {
    color: '#FFD700',
    fontSize: '28px',
  },
  infoRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    fontSize: '18px',
    color: '#6C757D',
    marginBottom: '18px',
    justifyContent: 'center',
  },
  infoIcon: {
    color: '#A0522D',
    fontSize: '20px',
  },
  infoText: {
    fontWeight: '500',
  },
  socialRow: {
    marginTop: '22px',
    display: 'flex',
    justifyContent: 'center',
    gap: '18px',
  },
  socialIcon: {
    color: '#FFD700',
    fontSize: '22px',
    background: '#FFF7EE',
    borderRadius: '50%',
    padding: '10px',
    transition: 'background 0.2s, color 0.2s',
    textDecoration: 'none',
  },
};