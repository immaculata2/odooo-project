import { useState } from 'react';
import './checklist.css';

const Checklist = ({ items, onToggle }) => {
  const [filter, setFilter] = useState('all');

  const filteredItems = items.filter(item => {
    if (filter === 'all') return true;
    return item.status === filter;
  });

  const getStatusLabel = (status) => {
    switch (status) {
      case 'done': return 'Done';
      case 'pending': return 'Pending';
      case 'fail': return 'Failed';
      default: return status;
    }
  };

  const getCheckboxContent = (status) => {
    switch (status) {
      case 'done': return '✓';
      case 'pending': return '○';
      case 'fail': return '!';
      default: return '';
    }
  };

  return (
    <section className="checklist-section">
      <div className="checklist-header">
        <h2 className="checklist-title">Migration Checklist</h2>
        <div className="checklist-filters">
          {['all', 'done', 'pending'].map((f) => (
            <button
              key={f}
              className={`filter-btn ${filter === f ? 'active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="checklist-grid">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className={`checklist-item ${item.status}`}
            onClick={() => onToggle(item.id)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onToggle(item.id);
              }
            }}
            aria-pressed={item.status === 'done'}
          >
            <div className="checklist-checkbox">
              {getCheckboxContent(item.status)}
            </div>
            <div className="checklist-content">
              <div className="checklist-item-title">{item.title}</div>
              <div className="checklist-item-desc">{item.description}</div>
            </div>
            <span className={`checklist-status ${item.status}`}>
              {getStatusLabel(item.status)}
            </span>
          </div>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <p style={{ color: 'var(--color-text-muted)', textAlign: 'center', padding: 'var(--space-xl)' }}>
          No items match the current filter.
        </p>
      )}
    </section>
  );
};

export default Checklist;
