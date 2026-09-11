import './statcard.css';

const StatCard = ({ label, value, subtext, type = 'total' }) => {
  const icons = {
    done: '✓',
    pending: '○',
    fail: '✕',
    total: '●'
  };

  return (
    <div className="stat-card">
      <div className="stat-card-header">
        <span className="stat-card-label">{label}</span>
        <div className={`stat-card-icon ${type}`}>
          {icons[type] || icons.total}
        </div>
      </div>
      <div className="stat-card-value">{value}</div>
      {subtext && <div className="stat-card-subtext">{subtext}</div>}
    </div>
  );
};

export default StatCard;
