import './progressring.css';

const ProgressRing = ({ percentage, label = 'Complete', showLive = false }) => {
  const size = 140;
  const strokeWidth = 8;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="progress-ring-container">
      <div className="progress-ring-wrapper">
        {showLive && (
          <div style={{ position: 'absolute', top: '-10px', right: '-10px' }}>
            <span className="progress-ring-live" aria-hidden="true"></span>
          </div>
        )}
        <svg className="progress-ring-svg" viewBox={`0 0 ${size} ${size}`}>
          <circle
            className="progress-ring-bg"
            cx={size / 2}
            cy={size / 2}
            r={radius}
          />
          <circle
            className="progress-ring-circle"
            cx={size / 2}
            cy={size / 2}
            r={radius}
            strokeDasharray={`${circumference} ${circumference}`}
            strokeDashoffset={offset}
          />
        </svg>
        <div className="progress-ring-text">
          <div className="progress-ring-percentage">{percentage}%</div>
          <div className="progress-ring-label">{label}</div>
        </div>
      </div>
    </div>
  );
};

export default ProgressRing;
