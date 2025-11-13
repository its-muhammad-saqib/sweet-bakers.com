import React, { useState, useEffect } from 'react';

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState('cakes');
  const [cakes, setCakes] = useState([]);
  const [orders, setOrders] = useState([]);
  const [editingCake, setEditingCake] = useState(null);
  const [newCake, setNewCake] = useState({
    name: '',
    description: '',
    price: 0,
    image: '',
    ingredients: '',
  });

  useEffect(() => {
    if (isAuthenticated) {
      loadCakes();
      loadOrders();
    }
  }, [isAuthenticated]);

  const loadCakes = () => {
    const savedCakes = localStorage.getItem('adminCakes');
    if (savedCakes) {
      setCakes(JSON.parse(savedCakes));
    } else {
      const defaultCakes = [
        {
          id: 1,
          name: 'Chocolate Delight',
          description: 'Rich chocolate cake with creamy frosting',
          price: 1200,
          image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=400',
          ingredients: 'Chocolate, Butter, Eggs, Flour, Sugar',
        },
        {
          id: 2,
          name: 'Vanilla Dream',
          description: 'Classic vanilla cake with buttercream',
          price: 1000,
          image: 'https://images.pexels.com/photos/1055270/pexels-photo-1055270.jpeg?auto=compress&cs=tinysrgb&w=400',
          ingredients: 'Vanilla, Butter, Eggs, Flour, Sugar',
        },
      ];
      setCakes(defaultCakes);
      localStorage.setItem('adminCakes', JSON.stringify(defaultCakes));
    }
  };

  const loadOrders = () => {
    const cart = JSON.parse(localStorage.getItem('cartItems') || '[]');
    setOrders(cart);
  };

  const handleLogin = () => {
    if (password === 'admin123') {
      setIsAuthenticated(true);
    } else {
      alert('Invalid password!');
    }
  };

  const handleAddCake = () => {
    if (!newCake.name || !newCake.price) {
      alert('Please fill in all required fields');
      return;
    }
    const cakeToAdd = {
      ...newCake,
      id: Date.now(),
      price: Number(newCake.price),
    };
    const updatedCakes = [...cakes, cakeToAdd];
    setCakes(updatedCakes);
    localStorage.setItem('adminCakes', JSON.stringify(updatedCakes));
    setNewCake({ name: '', description: '', price: 0, image: '', ingredients: '' });
    alert('Cake added successfully!');
  };

  const handleUpdateCake = () => {
    const updatedCakes = cakes.map((cake) =>
      cake.id === editingCake.id ? { ...editingCake, price: Number(editingCake.price) } : cake
    );
    setCakes(updatedCakes);
    localStorage.setItem('adminCakes', JSON.stringify(updatedCakes));
    setEditingCake(null);
    alert('Cake updated successfully!');
  };

  const handleDeleteCake = (id) => {
    if (window.confirm('Are you sure you want to delete this cake?')) {
      const updatedCakes = cakes.filter((cake) => cake.id !== id);
      setCakes(updatedCakes);
      localStorage.setItem('adminCakes', JSON.stringify(updatedCakes));
      alert('Cake deleted successfully!');
    }
  };

  const handleClearOrders = () => {
    if (window.confirm('Are you sure you want to clear all orders?')) {
      localStorage.removeItem('cartItems');
      setOrders([]);
      alert('Orders cleared successfully!');
    }
  };

  if (!isAuthenticated) {
    return (
      <div style={styles.loginContainer}>
        <div style={styles.loginBox}>
          <h1 style={styles.loginTitle}>
            <i className="fas fa-lock"></i> Admin Login
          </h1>
          <input
            type="password"
            placeholder="Enter admin password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
            style={styles.loginInput}
          />
          <button onClick={handleLogin} style={styles.loginButton}>
            Login
          </button>
          <p style={styles.loginHint}>Default password: admin123</p>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.adminContainer}>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />
      <div style={styles.header}>
        <h1 style={styles.title}>
          <i className="fas fa-shield-alt"></i> Admin Dashboard
        </h1>
        <button
          onClick={() => setIsAuthenticated(false)}
          style={styles.logoutButton}
        >
          <i className="fas fa-sign-out-alt"></i> Logout
        </button>
      </div>

      <div style={styles.tabs}>
        <button
          onClick={() => setActiveTab('cakes')}
          style={activeTab === 'cakes' ? styles.activeTab : styles.tab}
        >
          <i className="fas fa-cake-candles"></i> Manage Cakes
        </button>
        <button
          onClick={() => setActiveTab('orders')}
          style={activeTab === 'orders' ? styles.activeTab : styles.tab}
        >
          <i className="fas fa-shopping-cart"></i> View Orders ({orders.length})
        </button>
      </div>

      {activeTab === 'cakes' && (
        <div style={styles.content}>
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>Add New Cake</h2>
            <div style={styles.form}>
              <input
                type="text"
                placeholder="Cake Name"
                value={newCake.name}
                onChange={(e) => setNewCake({ ...newCake, name: e.target.value })}
                style={styles.input}
              />
              <input
                type="text"
                placeholder="Description"
                value={newCake.description}
                onChange={(e) => setNewCake({ ...newCake, description: e.target.value })}
                style={styles.input}
              />
              <input
                type="number"
                placeholder="Price per Pound (Rs.)"
                value={newCake.price}
                onChange={(e) => setNewCake({ ...newCake, price: e.target.value })}
                style={styles.input}
              />
              <input
                type="text"
                placeholder="Image URL"
                value={newCake.image}
                onChange={(e) => setNewCake({ ...newCake, image: e.target.value })}
                style={styles.input}
              />
              <input
                type="text"
                placeholder="Ingredients"
                value={newCake.ingredients}
                onChange={(e) => setNewCake({ ...newCake, ingredients: e.target.value })}
                style={styles.input}
              />
              <button onClick={handleAddCake} style={styles.addButton}>
                <i className="fas fa-plus"></i> Add Cake
              </button>
            </div>
          </div>

          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>Existing Cakes</h2>
            <div style={styles.cakeGrid}>
              {cakes.map((cake) => (
                <div key={cake.id} style={styles.cakeCard}>
                  {editingCake?.id === cake.id ? (
                    <div style={styles.editForm}>
                      <input
                        type="text"
                        value={editingCake.name}
                        onChange={(e) =>
                          setEditingCake({ ...editingCake, name: e.target.value })
                        }
                        style={styles.editInput}
                      />
                      <input
                        type="text"
                        value={editingCake.description}
                        onChange={(e) =>
                          setEditingCake({ ...editingCake, description: e.target.value })
                        }
                        style={styles.editInput}
                      />
                      <input
                        type="number"
                        value={editingCake.price}
                        onChange={(e) =>
                          setEditingCake({ ...editingCake, price: e.target.value })
                        }
                        style={styles.editInput}
                      />
                      <input
                        type="text"
                        value={editingCake.ingredients}
                        onChange={(e) =>
                          setEditingCake({ ...editingCake, ingredients: e.target.value })
                        }
                        style={styles.editInput}
                      />
                      <div style={styles.editButtons}>
                        <button onClick={handleUpdateCake} style={styles.saveButton}>
                          Save
                        </button>
                        <button
                          onClick={() => setEditingCake(null)}
                          style={styles.cancelButton}
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <>
                      <img src={cake.image} alt={cake.name} style={styles.cakeImage} />
                      <h3 style={styles.cakeName}>{cake.name}</h3>
                      <p style={styles.cakeDescription}>{cake.description}</p>
                      <p style={styles.cakePrice}>Rs. {cake.price}/lb</p>
                      <div style={styles.cakeActions}>
                        <button
                          onClick={() => setEditingCake(cake)}
                          style={styles.editButton}
                        >
                          <i className="fas fa-edit"></i> Edit
                        </button>
                        <button
                          onClick={() => handleDeleteCake(cake.id)}
                          style={styles.deleteButton}
                        >
                          <i className="fas fa-trash"></i> Delete
                        </button>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'orders' && (
        <div style={styles.content}>
          <div style={styles.section}>
            <div style={styles.ordersHeader}>
              <h2 style={styles.sectionTitle}>Customer Orders</h2>
              <button onClick={handleClearOrders} style={styles.clearButton}>
                <i className="fas fa-trash-alt"></i> Clear All Orders
              </button>
            </div>
            {orders.length === 0 ? (
              <p style={styles.noOrders}>No orders yet</p>
            ) : (
              <div style={styles.ordersTable}>
                {orders.map((order, index) => (
                  <div key={index} style={styles.orderCard}>
                    <div style={styles.orderInfo}>
                      <h3 style={styles.orderName}>{order.name}</h3>
                      <p style={styles.orderDetail}>
                        <strong>Quantity:</strong> {order.pounds} lbs
                      </p>
                      <p style={styles.orderDetail}>
                        <strong>Price per lb:</strong> Rs. {order.pricePerPound}
                      </p>
                      <p style={styles.orderTotal}>
                        <strong>Total:</strong> Rs. {order.totalCost}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  loginContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #4B2C20 0%, #A0522D 100%)',
  },
  loginBox: {
    background: '#FFF',
    padding: '50px',
    borderRadius: '15px',
    boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
    textAlign: 'center',
    minWidth: '350px',
  },
  loginTitle: {
    color: '#4B2C20',
    marginBottom: '30px',
    fontSize: '28px',
  },
  loginInput: {
    width: '100%',
    padding: '15px',
    fontSize: '16px',
    border: '2px solid #DDD',
    borderRadius: '8px',
    marginBottom: '20px',
    boxSizing: 'border-box',
  },
  loginButton: {
    width: '100%',
    padding: '15px',
    fontSize: '18px',
    fontWeight: 'bold',
    background: '#4B2C20',
    color: '#FFF',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
  },
  loginHint: {
    marginTop: '15px',
    color: '#888',
    fontSize: '14px',
  },
  adminContainer: {
    minHeight: '100vh',
    background: '#F5F5F5',
    fontFamily: "'Poppins', sans-serif",
  },
  header: {
    background: 'linear-gradient(90deg, #4B2C20 0%, #A0522D 100%)',
    padding: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
  },
  title: {
    color: '#FFF',
    margin: 0,
    fontSize: '32px',
  },
  logoutButton: {
    background: '#FF4500',
    color: '#FFF',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
  },
  tabs: {
    display: 'flex',
    background: '#FFF',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
  },
  tab: {
    flex: 1,
    padding: '20px',
    background: '#FFF',
    border: 'none',
    fontSize: '18px',
    cursor: 'pointer',
    borderBottom: '3px solid transparent',
    transition: 'all 0.3s',
  },
  activeTab: {
    flex: 1,
    padding: '20px',
    background: '#FFF',
    border: 'none',
    fontSize: '18px',
    fontWeight: 'bold',
    cursor: 'pointer',
    borderBottom: '3px solid #4B2C20',
    color: '#4B2C20',
  },
  content: {
    padding: '30px',
    maxWidth: '1400px',
    margin: '0 auto',
  },
  section: {
    background: '#FFF',
    padding: '30px',
    borderRadius: '10px',
    marginBottom: '30px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  },
  sectionTitle: {
    fontSize: '24px',
    color: '#4B2C20',
    marginBottom: '20px',
  },
  form: {
    display: 'grid',
    gap: '15px',
  },
  input: {
    padding: '12px',
    fontSize: '16px',
    border: '2px solid #DDD',
    borderRadius: '8px',
  },
  addButton: {
    padding: '15px',
    fontSize: '18px',
    fontWeight: 'bold',
    background: '#28A745',
    color: '#FFF',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
  },
  cakeGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '20px',
  },
  cakeCard: {
    background: '#F9F9F9',
    padding: '15px',
    borderRadius: '10px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  },
  cakeImage: {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '8px',
    marginBottom: '10px',
  },
  cakeName: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#4B2C20',
    marginBottom: '5px',
  },
  cakeDescription: {
    fontSize: '14px',
    color: '#666',
    marginBottom: '10px',
  },
  cakePrice: {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#28A745',
    marginBottom: '10px',
  },
  cakeActions: {
    display: 'flex',
    gap: '10px',
  },
  editButton: {
    flex: 1,
    padding: '8px',
    background: '#17A2B8',
    color: '#FFF',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  deleteButton: {
    flex: 1,
    padding: '8px',
    background: '#DC3545',
    color: '#FFF',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  editForm: {
    display: 'grid',
    gap: '10px',
  },
  editInput: {
    padding: '8px',
    fontSize: '14px',
    border: '2px solid #DDD',
    borderRadius: '5px',
  },
  editButtons: {
    display: 'flex',
    gap: '10px',
  },
  saveButton: {
    flex: 1,
    padding: '10px',
    background: '#28A745',
    color: '#FFF',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  cancelButton: {
    flex: 1,
    padding: '10px',
    background: '#6C757D',
    color: '#FFF',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  ordersHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },
  clearButton: {
    padding: '10px 20px',
    background: '#DC3545',
    color: '#FFF',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  ordersTable: {
    display: 'grid',
    gap: '15px',
  },
  orderCard: {
    background: '#F9F9F9',
    padding: '20px',
    borderRadius: '8px',
    borderLeft: '4px solid #4B2C20',
  },
  orderInfo: {
    display: 'grid',
    gap: '5px',
  },
  orderName: {
    fontSize: '20px',
    color: '#4B2C20',
    marginBottom: '10px',
  },
  orderDetail: {
    fontSize: '16px',
    color: '#555',
  },
  orderTotal: {
    fontSize: '18px',
    color: '#28A745',
    fontWeight: 'bold',
    marginTop: '10px',
  },
  noOrders: {
    textAlign: 'center',
    fontSize: '18px',
    color: '#888',
    padding: '40px',
  },
};
