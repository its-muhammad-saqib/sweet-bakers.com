import React, { useState, useEffect } from 'react';

export default function ChooseCake() {
  const [cakes, setCakes] = useState([
    {
      id: 1,
      name: 'Chocolate Delight',
      description: 'Rich chocolate cake with creamy frosting',
      price: 1200,
      image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=400',
      pounds: 2,
      ingredients: 'Chocolate, Butter, Eggs, Flour, Sugar',
    },
    {
      id: 2,
      name: 'Vanilla Dream',
      description: 'Classic vanilla cake with buttercream',
      price: 1000,
      image: 'https://images.pexels.com/photos/1055270/pexels-photo-1055270.jpeg?auto=compress&cs=tinysrgb&w=400',
      pounds: 2,
      ingredients: 'Vanilla, Butter, Eggs, Flour, Sugar',
    },
    {
      id: 3,
      name: 'Red Velvet',
      description: 'Smooth red velvet with cream cheese',
      price: 1400,
      image: 'https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=400',
      pounds: 2,
      ingredients: 'Cocoa, Butter, Eggs, Flour, Cream Cheese',
    },
    {
      id: 4,
      name: 'Strawberry Bliss',
      description: 'Fresh strawberry cake with whipped cream',
      price: 1300,
      image: 'https://images.pexels.com/photos/1860202/pexels-photo-1860202.jpeg?auto=compress&cs=tinysrgb&w=400',
      pounds: 2,
      ingredients: 'Strawberries, Butter, Eggs, Flour, Cream',
    },
    {
      id: 5,
      name: 'Black Forest',
      description: 'Classic black forest with cherries',
      price: 1500,
      image: 'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=400',
      pounds: 2,
      ingredients: 'Chocolate, Cherries, Butter, Eggs, Flour',
    },
    {
      id: 6,
      name: 'Caramel Heaven',
      description: 'Caramel layered cake with nuts',
      price: 1350,
      image: 'https://images.pexels.com/photos/140831/pexels-photo-140831.jpeg?auto=compress&cs=tinysrgb&w=400',
      pounds: 2,
      ingredients: 'Caramel, Nuts, Butter, Eggs, Flour',
    },
    {
      id: 7,
      name: 'Coffee Mocha',
      description: 'Rich coffee flavored mocha cake',
      price: 1250,
      image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=400',
      pounds: 2,
      ingredients: 'Coffee, Chocolate, Butter, Eggs, Flour',
    },
    {
      id: 8,
      name: 'Lemon Zest',
      description: 'Tangy lemon cake with citrus frosting',
      price: 1100,
      image: 'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=400',
      pounds: 2,
      ingredients: 'Lemon, Butter, Eggs, Flour, Sugar',
    },
    {
      id: 9,
      name: 'Pineapple Paradise',
      description: 'Tropical pineapple upside-down cake',
      price: 1150,
      image: 'https://images.pexels.com/photos/827513/pexels-photo-827513.jpeg?auto=compress&cs=tinysrgb&w=400',
      pounds: 2,
      ingredients: 'Pineapple, Butter, Eggs, Flour, Brown Sugar',
    },
  ]);

  const [modalData, setModalData] = useState(null);

  useEffect(() => {
    updateCartCount();
  }, []);

  const updateCartCount = () => {
    const cart = JSON.parse(localStorage.getItem('cartItems') || '[]');
    const count = cart.reduce((sum, item) => sum + item.pounds, 0);
    const cartCountEl = document.getElementById('cartCount');
    if (cartCountEl) cartCountEl.textContent = count;
  };

  const handlePoundsChange = (id, change) => {
    setCakes(
      cakes.map((cake) => {
        if (cake.id === id) {
          const newPounds = Math.max(1, Math.min(10, cake.pounds + change));
          return { ...cake, pounds: newPounds };
        }
        return cake;
      })
    );
  };

  const addToCart = (cake) => {
    const cart = JSON.parse(localStorage.getItem('cartItems') || '[]');
    const totalCost = cake.price * cake.pounds;
    cart.push({
      id: cake.id,
      name: cake.name,
      pricePerPound: cake.price,
      pounds: cake.pounds,
      totalCost: totalCost,
    });
    localStorage.setItem('cartItems', JSON.stringify(cart));
    alert('Added to cart successfully!');
    updateCartCount();
  };

  const openModal = (cake) => {
    setModalData(cake);
  };

  const closeModal = () => {
    setModalData(null);
  };

  return (
    <div id="products" style={styles.section}>
      <div style={styles.header}>
        <h2 style={styles.title}>Choose Our Cakes</h2>
        <p style={styles.subtitle}>Discover our wide range of premium cakes</p>
      </div>

      <div style={styles.grid}>
        {cakes.map((cake) => (
          <div key={cake.id} style={styles.card}>
            <img src={cake.image} alt={cake.name} style={styles.cakeImage} />
            <h3 style={styles.cakeName}>{cake.name}</h3>
            <p style={styles.cakeDescription}>{cake.description}</p>
            <p style={styles.cakePrice}>Rs. {cake.price} per Pound</p>

            <div style={styles.quantitySelector}>
              <button
                style={styles.quantityButton}
                onClick={() => handlePoundsChange(cake.id, -1)}
              >
                <i className="fas fa-minus"></i>
              </button>
              <span style={styles.quantityDisplay}>{cake.pounds} lbs</span>
              <button
                style={styles.quantityButton}
                onClick={() => handlePoundsChange(cake.id, 1)}
              >
                <i className="fas fa-plus"></i>
              </button>
            </div>

            <p style={styles.totalPrice}>Total: Rs. {cake.price * cake.pounds}</p>

            <div style={styles.buttonGroup}>
              <button
                style={styles.addToCartButton}
                onClick={() => addToCart(cake)}
                onMouseOver={(e) => (e.target.style.background = '#218838')}
                onMouseOut={(e) => (e.target.style.background = '#28A745')}
              >
                Add to Cart
              </button>
              <button
                style={styles.viewDetailsButton}
                onClick={() => openModal(cake)}
                onMouseOver={(e) => (e.target.style.background = '#138496')}
                onMouseOut={(e) => (e.target.style.background = '#17A2B8')}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {modalData && (
        <div style={styles.modalOverlay} onClick={closeModal}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button style={styles.closeButton} onClick={closeModal}>
              <i className="fas fa-times"></i>
            </button>
            <img src={modalData.image} alt={modalData.name} style={styles.modalImage} />
            <h2 style={styles.modalTitle}>{modalData.name}</h2>
            <p style={styles.modalPrice}>Rs. {modalData.price} per Pound</p>
            <p style={styles.modalDescription}>{modalData.description}</p>
            <p style={styles.modalIngredients}>
              <strong>Ingredients:</strong> {modalData.ingredients}
            </p>
            <button
              style={styles.modalAddToCart}
              onClick={() => {
                addToCart(modalData);
                closeModal();
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  section: {
    padding: '60px 20px',
    background: '#F9F9F9',
  },
  header: {
    textAlign: 'center',
    marginBottom: '50px',
  },
  title: {
    fontSize: '42px',
    fontWeight: 'bold',
    color: '#5C2C10',
    marginBottom: '10px',
  },
  subtitle: {
    fontSize: '18px',
    color: '#6C757D',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '30px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  card: {
    background: '#FFF',
    borderRadius: '15px',
    padding: '20px',
    boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s',
    cursor: 'pointer',
  },
  cakeImage: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '10px',
    marginBottom: '15px',
  },
  cakeName: {
    fontSize: '22px',
    fontWeight: 'bold',
    color: '#5C2C10',
    marginBottom: '10px',
  },
  cakeDescription: {
    fontSize: '14px',
    color: '#888',
    marginBottom: '10px',
  },
  cakePrice: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#5C2C10',
    marginBottom: '15px',
  },
  quantitySelector: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '15px',
    marginBottom: '10px',
  },
  quantityButton: {
    width: '35px',
    height: '35px',
    borderRadius: '50%',
    background: '#6B3E26',
    color: '#FFF',
    border: 'none',
    cursor: 'pointer',
    fontSize: '14px',
  },
  quantityDisplay: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#333',
  },
  totalPrice: {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#28A745',
    textAlign: 'center',
    marginBottom: '15px',
  },
  buttonGroup: {
    display: 'flex',
    gap: '10px',
  },
  addToCartButton: {
    flex: 1,
    background: '#28A745',
    color: '#FFF',
    padding: '12px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'background 0.3s',
  },
  viewDetailsButton: {
    flex: 1,
    background: '#17A2B8',
    color: '#FFF',
    padding: '12px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'background 0.3s',
  },
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0,0,0,0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2000,
  },
  modalContent: {
    background: '#FFF',
    borderRadius: '15px',
    padding: '30px',
    maxWidth: '500px',
    width: '90%',
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    top: '15px',
    right: '15px',
    background: '#FF4500',
    color: '#FFF',
    border: 'none',
    width: '35px',
    height: '35px',
    borderRadius: '50%',
    cursor: 'pointer',
    fontSize: '18px',
  },
  modalImage: {
    width: '100%',
    height: '250px',
    objectFit: 'cover',
    borderRadius: '10px',
    marginBottom: '20px',
  },
  modalTitle: {
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#5C2C10',
    marginBottom: '10px',
  },
  modalPrice: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#28A745',
    marginBottom: '15px',
  },
  modalDescription: {
    fontSize: '16px',
    color: '#555',
    marginBottom: '15px',
  },
  modalIngredients: {
    fontSize: '14px',
    color: '#666',
    marginBottom: '20px',
  },
  modalAddToCart: {
    width: '100%',
    background: '#28A745',
    color: '#FFF',
    padding: '15px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '16px',
  },
};
