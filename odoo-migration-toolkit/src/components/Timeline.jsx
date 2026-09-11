import './timeline.css';

const Timeline = ({ events }) => {
  return (
    <section className="timeline-section">
      <h2 className="timeline-title">Project Timeline</h2>
      
      <div className="timeline">
        {events.map((event, index) => (
          <div 
            key={index} 
            className={`timeline-item ${event.status}`}
          >
            <div className="timeline-dot"></div>
            <div className="timeline-date">{event.date}</div>
            <div className="timeline-content">
              <div className="timeline-title-item">{event.title}</div>
              <div className="timeline-description">{event.description}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
