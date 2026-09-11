import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import StatCard from '../components/StatCard';
import ProgressRing from '../components/ProgressRing';
import { checklistItems, stagingTests } from '../data/migrationData';
import './home.css';

const Home = () => {
  const checklistDone = checklistItems.filter(i => i.status === 'done').length;
  const testsDone = stagingTests.filter(t => t.status === 'done').length;
  const overallPercentage = Math.round(((checklistDone + testsDone) / (checklistItems.length + stagingTests.length)) * 100);

  return (
    <main className="home-page">
      <Hero
        title="Odoo Migration Validation Toolkit"
        subtitle="A comprehensive toolkit for tracking Labocast Kenya's migration from Octaly hosting to independent infrastructure. Monitor progress, validate checkpoints, and ensure a smooth transition."
        metadata={[
          'Labocast Kenya',
          'Reuni Dent Africa Ltd',
          'Internship @ TALIAD LTD'
        ]}
      />

      <div className="container">
        {/* Overall Progress Section */}
        <section className="home-progress-section">
          <div className="progress-card">
            <ProgressRing 
              percentage={overallPercentage} 
              label="Overall Progress"
              showLive={true}
            />
            <div className="progress-info">
              <h2>Migration Status Dashboard</h2>
              <p>
                Track the complete migration journey with real-time updates on checklist 
                completion and staging test results. All progress is automatically saved 
                to your browser.
              </p>
              <Link to="/console" className="btn btn-primary">
                Open Console →
              </Link>
            </div>
          </div>
        </section>

        {/* Quick Stats Grid */}
        <section className="home-stats-grid">
          <StatCard
            label="Checklist Done"
            value={`${checklistDone}/${checklistItems.length}`}
            subtext={`${Math.round((checklistDone / checklistItems.length) * 100)}% complete`}
            type="done"
          />
          <StatCard
            label="Tests Passed"
            value={`${testsDone}/${stagingTests.length}`}
            subtext={`${Math.round((testsDone / stagingTests.length) * 100)}% complete`}
            type="done"
          />
          <StatCard
            label="Pending Items"
            value={checklistItems.filter(i => i.status === 'pending').length + tests.filter(t => t.status === 'pending').length}
            subtext="Awaiting validation"
            type="pending"
          />
          <StatCard
            label="Total Tasks"
            value={checklistItems.length + stagingTests.length}
            subtext="Migration + Testing"
            type="total"
          />
        </section>

        {/* Navigation Cards */}
        <section className="home-nav-grid">
          <Link to="/report" className="nav-card">
            <div className="nav-card-icon">📄</div>
            <h3>Validation Report</h3>
            <p>Complete written documentation covering project context, target architecture, migration checklist, and staging test registry.</p>
            <span className="nav-card-link">Read Report →</span>
          </Link>

          <Link to="/console" className="nav-card">
            <div className="nav-card-icon">🎛️</div>
            <h3>Migration Console</h3>
            <p>Interactive dashboard for tracking completion, checking off migration steps, and logging staging test results in real-time.</p>
            <span className="nav-card-link">Open Console →</span>
          </Link>

          <Link to="/verification" className="nav-card">
            <div className="nav-card-icon">✅</div>
            <h3>Infrastructure Verification</h3>
            <p>Browser-based verification log confirming the independent Odoo server is live and publicly reachable.</p>
            <span className="nav-card-link">View Log →</span>
          </Link>
        </section>
      </div>
    </main>
  );
};

export default Home;
