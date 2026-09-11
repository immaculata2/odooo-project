import Hero from '../components/Hero';
import ProgressRing from '../components/ProgressRing';
import StatCard from '../components/StatCard';
import Checklist from '../components/Checklist';
import TestRegistry from '../components/TestRegistry';
import useProgress from '../hooks/useProgress';
import './console.css';

const Console = () => {
  const {
    checklist,
    tests,
    checklistStats,
    testStats,
    toggleChecklistItem,
    cycleTestStatus,
    resetAll
  } = useProgress();

  const overallPercentage = Math.round(
    ((checklistStats.done + testStats.done) / (checklistStats.total + testStats.total)) * 100
  );

  return (
    <main className="console-page">
      <Hero
        title="Migration Status Console"
        subtitle="Interactive dashboard for tracking migration progress. Click checklist items to toggle completion and click test statuses to cycle through results."
        metadata={[
          'Live Dashboard',
          'Auto-saves to browser',
          'Last: Just now'
        ]}
      />

      <div className="container console-content">
        {/* Progress Overview */}
        <section className="console-overview">
          <div className="overview-progress">
            <ProgressRing 
              percentage={overallPercentage} 
              label="Overall"
              showLive={true}
            />
          </div>
          
          <div className="overview-stats">
            <StatCard
              label="Checklist"
              value={`${checklistStats.done}/${checklistStats.total}`}
              subtext={`${checklistStats.percentage}% complete`}
              type="done"
            />
            <StatCard
              label="Tests Passed"
              value={`${testStats.done}/${testStats.total}`}
              subtext={`${testStats.percentage}% complete`}
              type="done"
            />
            <StatCard
              label="Pending"
              value={checklistStats.pending + testStats.pending}
              subtext="Items awaiting action"
              type="pending"
            />
          </div>
        </section>

        {/* Action Bar */}
        <div className="console-actions">
          <button onClick={resetAll} className="btn btn-reset">
            Reset All Progress
          </button>
          <span className="console-hint">
            💡 Tip: Click any item to update its status
          </span>
        </div>

        {/* Checklist Section */}
        <Checklist 
          items={checklist} 
          onToggle={toggleChecklistItem} 
        />

        {/* Test Registry Section */}
        <TestRegistry 
          tests={tests} 
          onCycleStatus={cycleTestStatus} 
        />
      </div>
    </main>
  );
};

export default Console;
