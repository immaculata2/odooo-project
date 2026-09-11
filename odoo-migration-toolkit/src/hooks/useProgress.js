import { useState, useEffect } from 'react';
import { checklistItems as initialChecklist, stagingTests as initialTests } from '../data/migrationData';

const STORAGE_KEY = 'odoo-migration-state';

export const useProgress = () => {
  // Initialize state from localStorage or defaults
  const [checklist, setChecklist] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      // Merge with initial data to ensure all fields exist
      return initialChecklist.map(item => ({
        ...item,
        status: parsed.checklist?.find(p => p.id === item.id)?.status || item.status
      }));
    }
    return initialChecklist;
  });

  const [tests, setTests] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      return initialTests.map(test => ({
        ...test,
        status: parsed.tests?.find(t => t.id === test.id)?.status || test.status
      }));
    }
    return initialTests;
  });

  // Persist to localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      checklist: checklist.map(({ id, status }) => ({ id, status })),
      tests: tests.map(({ id, status }) => ({ id, status }))
    }));
  }, [checklist, tests]);

  // Calculate progress statistics
  const checklistStats = {
    total: checklist.length,
    done: checklist.filter(i => i.status === 'done').length,
    pending: checklist.filter(i => i.status === 'pending').length,
    fail: checklist.filter(i => i.status === 'fail').length,
    percentage: Math.round((checklist.filter(i => i.status === 'done').length / checklist.length) * 100)
  };

  const testStats = {
    total: tests.length,
    done: tests.filter(t => t.status === 'done').length,
    pending: tests.filter(t => t.status === 'pending').length,
    fail: tests.filter(t => t.status === 'fail').length,
    percentage: Math.round((tests.filter(t => t.status === 'done').length / tests.length) * 100)
  };

  // Toggle checklist item status
  const toggleChecklistItem = (id) => {
    setChecklist(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, status: item.status === 'done' ? 'pending' : 'done' }
          : item
      )
    );
  };

  // Cycle test status: pending -> done -> fail -> pending
  const cycleTestStatus = (id) => {
    setTests(prev =>
      prev.map(test => {
        if (test.id !== id) return test;
        const nextStatus =
          test.status === 'pending' ? 'done' :
          test.status === 'done' ? 'fail' : 'pending';
        return { ...test, status: nextStatus };
      })
    );
  };

  // Reset all progress
  const resetAll = () => {
    if (window.confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
      setChecklist(initialChecklist);
      setTests(initialTests);
      localStorage.removeItem(STORAGE_KEY);
    }
  };

  return {
    checklist,
    tests,
    checklistStats,
    testStats,
    toggleChecklistItem,
    cycleTestStatus,
    resetAll
  };
};

export default useProgress;
