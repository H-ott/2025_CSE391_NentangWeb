export default function Reports() {
  const reports = [
    {
      title: 'Sales Summary',
      description: 'Overview of product sales from Jan to May.',
      date: '2025-06-01',
    },
    {
      title: 'User Engagement',
      description: 'User activity and retention report.',
      date: '2025-05-25',
    },
    {
      title: 'System Health Check',
      description: 'Monthly report on server uptime and errors.',
      date: '2025-05-20',
    },
  ];

  return (
    <div style={styles.container}>
      <h3 style={styles.heading}>📄 Reports Center</h3>
      <p style={styles.subtitle}>Access detailed business and system reports below.</p>

      <div style={styles.cardGrid}>
        {reports.map((report, index) => (
          <div key={index} style={styles.card}>
            <h4 style={styles.cardTitle}>{report.title}</h4>
            <p style={styles.cardDesc}>{report.description}</p>
            <p style={styles.cardDate}>📅 {report.date}</p>
            <button style={styles.button}>View Report</button>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    color: '#333',
  },
  heading: {
    fontSize: '26px',
    marginBottom: '8px',
  },
  subtitle: {
    color: '#666',
    marginBottom: '24px',
  },
  cardGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
  },
  card: {
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
    transition: 'transform 0.2s',
  },
  cardTitle: {
    fontSize: '18px',
    marginBottom: '10px',
    color: '#007BFF',
  },
  cardDesc: {
    fontSize: '14px',
    marginBottom: '8px',
  },
  cardDate: {
    fontSize: '13px',
    color: '#999',
    marginBottom: '12px',
  },
  button: {
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    padding: '8px 14px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};
