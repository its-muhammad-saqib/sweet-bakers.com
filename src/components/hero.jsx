import React, { useState, useEffect } from 'react';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    'https://images.pexels.com/photos/1055270/pexels-photo-1055270.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/1860202/pexels-photo-1860202.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=1200',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.heroSection}>
      <div style={styles.sliderContainer}>
        {slides.map((slide, index) => (
          <div
            key={index}
            style={{
              ...styles.slide,
              opacity: currentSlide === index ? 1 : 0,
              zIndex: currentSlide === index ? 1 : 0,
            }}
          >
            <img src={slide} alt={`Slide ${index + 1}`} style={styles.slideImage} />
          </div>
        ))}
      </div>

      <div style={styles.headingSection}>
        <h1 style={styles.mainHeading}>THE WAH SWEET & BAKERS</h1>
      </div>

      <div style={styles.descriptionSection}>
        <p style={styles.description}>
          At Wah Sweets & Bakers, we bring you the freshest and most delicious cakes,
          pastries, and traditional sweets made with love and care. Our expert chefs ensure
          every bite delights your taste buds. With years of experience and a passion for
          perfection, we create memories that last a lifetime. Visit us today and taste the
          sweetness of perfection!
        </p>
        <div style={styles.buttonContainer}>
          <button
            style={styles.productsButton}
            onMouseOver={(e) => (e.target.style.transform = 'scale(1.05)')}
            onMouseOut={(e) => (e.target.style.transform = 'scale(1)')}
            onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Our Products
          </button>
          <button
            style={styles.contactButton}
            onMouseOver={(e) => (e.target.style.transform = 'scale(1.05)')}
            onMouseOut={(e) => (e.target.style.transform = 'scale(1)')}
            onClick={() => window.location.href = '#contact'}
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  heroSection: {
    marginTop: '70px',
    paddingBottom: '40px',
  },
  sliderContainer: {
    position: 'relative',
    width: '100%',
    height: '500px',
    overflow: 'hidden',
    borderRadius: '0 0 20px 20px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
  },
  slide: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    transition: 'opacity 1s ease-in-out',
  },
  slideImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  headingSection: {
    background: '#3B2A20',
    padding: '30px 0',
    textAlign: 'center',
    marginTop: '0',
  },
  mainHeading: {
    color: '#FFF',
    fontSize: '48px',
    fontWeight: 'bold',
    letterSpacing: '2px',
    margin: 0,
  },
  descriptionSection: {
    maxWidth: '900px',
    margin: '50px auto',
    padding: '0 20px',
    textAlign: 'center',
  },
  description: {
    fontSize: '18px',
    lineHeight: '1.8',
    color: '#555',
    marginBottom: '40px',
  },
  buttonContainer: {
    display: 'flex',
    gap: '20px',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  productsButton: {
    background: '#FFD700',
    color: '#333',
    padding: '15px 40px',
    fontSize: '18px',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '50px',
    cursor: 'pointer',
    transition: 'transform 0.3s',
    boxShadow: '0 5px 15px rgba(255, 215, 0, 0.4)',
  },
  contactButton: {
    background: '#4B2C20',
    color: '#FFF',
    padding: '15px 40px',
    fontSize: '18px',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '50px',
    cursor: 'pointer',
    transition: 'transform 0.3s',
    boxShadow: '0 5px 15px rgba(75, 44, 32, 0.4)',
  },
};
