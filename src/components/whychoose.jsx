export default function WhyChoose() {
  const features = [
    {
      icon: 'fa-clock',
      title: 'Perfection Anytime',
      description: 'Everyday: 9AM – 12AM',
      subtitle: 'Always fresh, always perfect',
    },
    {
      icon: 'fa-headset',
      title: '24/7 Communication',
      description: 'For any issues or complaints, please call us at',
      subtitle: '+92 51 4916068',
    },
    {
      icon: 'fa-location-dot',
      title: 'Multiple Locations',
      description: 'We are proud to have multiple branches',
      subtitle: 'to serve you better',
    },
    {
      icon: 'fa-truck',
      title: 'Convenient Delivery',
      description: 'Fast and reliable delivery service',
      subtitle: 'to your doorstep',
    },
  ];

  return (
    <section style={styles.section}>
      <div style={styles.header}>
        <span style={styles.title}>
          <i className="fas fa-star" style={styles.titleIcon}></i>
          Why Choose Us?
        </span>
        <div style={styles.subtitle}>
          We deliver quality, convenience, and care every day.
        </div>
      </div>
      <div style={styles.cardsContainer}>
        {features.map((feature, idx) => (
          <div key={idx} style={styles.card}>
            <i className={`fas ${feature.icon}`} style={styles.cardIcon}></i>
            <div style={styles.cardTitle}>{feature.title}</div>
            <div style={styles.cardDescription}>{feature.description}</div>
            <div style={styles.cardSubtitle}>{feature.subtitle}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '80px 20px',
    background: '#FFF',
  },
  header: {
    textAlign: 'center',
    marginBottom: '50px',
  },
  title: {
    fontSize: '42px',
    fontWeight: 'bold',
    color: '#6B3E26',
    marginBottom: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '15px',
  },
  titleIcon: {
    fontSize: '38px',
    color: '#D2691E',
  },
  subtitle: {
    fontSize: '18px',
    color: '#6C757D',
  },
  cardsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '30px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  card: {
    background: '#FFF',
    padding: '40px 20px',
    borderRadius: '15px',
    boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
    textAlign: 'center',
    transition: 'all 0.3s',
    border: '2px solid transparent',
  },
  cardIcon: {
    fontSize: '48px',
    color: '#D2691E',
    marginBottom: '20px',
  },
  cardTitle: {
    fontSize: '22px',
    fontWeight: 'bold',
    color: '#6B3E26',
    marginBottom: '15px',
  },
  cardDescription: {
    fontSize: '16px',
    color: '#6C757D',
    marginBottom: '5px',
  },
  cardSubtitle: {
    fontSize: '16px',
    color: '#6C757D',
  },
};