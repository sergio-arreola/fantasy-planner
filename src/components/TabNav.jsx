import React from 'react';

// Define your tabs here
const TABS = [
  { key: 'worldbuilding', label: 'Worldbuilding' },
  { key: 'characters', label: 'Characters' },
  { key: 'magic', label: 'Magic System' },
  { key: 'structure', label: 'Story Structure' },
  { key: 'trilogy', label: 'Trilogy Arc' },
  { key: 'timeline', label: 'Timeline' }
];

function TabNav({ activeTab, onTabChange }) {
  return (
    <nav className="tabs">
      {TABS.map(tab => (
        <button
          key={tab.key}
          className={`tab ${activeTab === tab.key ? 'active' : ''}`}
          onClick={() => onTabChange(tab.key)}
        >
          {tab.label}
        </button>
      ))}
    </nav>
  );
}

export default TabNav;
