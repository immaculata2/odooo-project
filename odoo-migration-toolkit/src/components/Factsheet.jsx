import './factsheet.css';

const Factsheet = ({ title, facts }) => {
  return (
    <section className="factsheet-section">
      <h2 className="factsheet-title">{title}</h2>
      
      <div className="factsheet-grid">
        {facts.map((fact, index) => (
          <div key={index} className="factsheet-item">
            <div className="factsheet-label">{fact.label}</div>
            <div className="factsheet-value">{fact.value}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Factsheet;
