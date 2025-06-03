export default function Analytics() {
  const stats = [
    { label: 'Total Users', value: '8,450' },
    { label: 'New Signups', value: '1,230' },
    { label: 'Revenue', value: '$12,400' },
    { label: 'Active Sessions', value: '540' },
  ];

  const chartData = [
    { label: 'Jan', value: 40 },
    { label: 'Feb', value: 65 },
    { label: 'Mar', value: 30 },
    { label: 'Apr', value: 80 },
    { label: 'May', value: 55 },
  ];

  return (
    <div style={styles.container}>
      <h3 style={styles.heading}>📊 Analytics Overview</h3>
      <p style={styles.subheading}>Summary of user activity and sales data</p>

      {/* Stat cards */}
      <div style={styles.statsGrid}>
        {stats.map((stat, index) => (
          <div key={index} style={styles.statCard}>
            <div style={styles.statValue}>{stat.value}</div>
            <div style={styles.statLabel}>{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Simple bar chart */}
      <h4 style={styles.chartTitle}>Monthly Sales Chart</h4>
      <div style={styles.chart}>
        {chartData.map((item, index) => (
          <div key={index} style={styles.barGroup}>
            <div
              style={{
                ...styles.bar,
                height: `${item.value * 2}px`,
              }}
            >
              <span style={styles.barValue}>{item.value}</span>
            </div>
            <span style={styles.barLabel}>{item.label}</span>
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
    fontSize: '28px',
    marginBottom: '6px',
  },
  subheading: {
    fontSize: '14px',
    color: '#777',
    marginBottom: '24px',
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '20px',
    marginBottom: '30px',
  },
  statCard: {
    backgroundColor: '#f1f5ff',
    padding: '18px',
    borderRadius: '10px',
    textAlign: 'center',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
  },
  statValue: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#007BFF',
  },
  statLabel: {
    fontSize: '14px',
    color: '#555',
    marginTop: '6px',
  },
  chartTitle: {
    fontSize: '20px',
    marginBottom: '16px',
  },
  chart: {
    display: 'flex',
    alignItems: 'flex-end',
    gap: '20px',
    height: '200px',
    backgroundColor: '#f8f9fa',
    padding: '10px',
    borderRadius: '8px',
    border: '1px solid #ddd',
  },
  barGroup: {
    textAlign: 'center',
    width: '40px',
  },
  bar: {
    backgroundColor: '#007BFF',
    width: '100%',
    position: 'relative',
    borderRadius: '6px 6px 0 0',
    transition: 'height 0.3s ease',
  },
  barValue: {
    position: 'absolute',
    top: '-20px',
    width: '100%',
    fontSize: '12px',
    color: '#007BFF',
  },
  barLabel: {
    marginTop: '8px',
    fontSize: '13px',
  },
};
