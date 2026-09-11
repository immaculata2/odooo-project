import './testregistry.css';

const TestRegistry = ({ tests, onCycleStatus }) => {
  const getStatusLabel = (status) => {
    switch (status) {
      case 'done': return 'Pass';
      case 'pending': return 'Pending';
      case 'fail': return 'Fail';
      default: return status;
    }
  };

  return (
    <section className="test-registry-section">
      <div className="test-registry-header">
        <h2 className="test-registry-title">Staging Test Registry</h2>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>
          Click status to cycle: Pending → Pass → Fail
        </p>
      </div>

      <table className="test-registry-table">
        <thead>
          <tr>
            <th style={{ width: '25%' }}>Test Name</th>
            <th style={{ width: '45%' }}>Expectation</th>
            <th style={{ width: '30%', textAlign: 'right' }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {tests.map((test) => (
            <tr key={test.id}>
              <td>
                <span className="test-name">{test.name}</span>
              </td>
              <td>
                <span className="test-expectation">{test.expectation}</span>
              </td>
              <td style={{ textAlign: 'right' }}>
                <button
                  className={`test-status-btn ${test.status}`}
                  onClick={() => onCycleStatus(test.id)}
                  aria-label={`Mark test "${test.name}" as ${test.status === 'pending' ? 'pass' : test.status === 'done' ? 'fail' : 'pending'}`}
                >
                  {getStatusLabel(test.status)}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {tests.length === 0 && (
        <p style={{ color: 'var(--color-text-muted)', textAlign: 'center', padding: 'var(--space-xl)' }}>
          No tests registered.
        </p>
      )}
    </section>
  );
};

export default TestRegistry;
