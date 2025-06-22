import React from 'react';

function ExportButton({ onExport }) {
  return (
    <div className="export-container">
      <button className="export-btn" onClick={onExport}>
        Export Novel Data
      </button>
    </div>
  );
}

export default ExportButton;

