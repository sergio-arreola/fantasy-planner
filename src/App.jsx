import React, { useState } from 'react'
import Header from './components/Header'
import TabNav from './components/TabNav'
import Spreadsheet from './components/Spreadsheet'
import ExportButton from './components/ExportButton'
import { exportData } from './utils/exportData'
import { useAutoSave } from './hooks/useAutoSave'

function App() {
  useAutoSave('fantasyPlanner')
  const [activeTab, setActiveTab] = useState('worldbuilding')

  const handleTabChange = (tab) => setActiveTab(tab)
  const handleExport    = () => exportData()

  return (
    <div className="app-root">
      <Header />
      <ExportButton onExport={handleExport} />
      <TabNav activeTab={activeTab} onTabChange={handleTabChange} />
      <Spreadsheet activeTab={activeTab} />
    </div>
  )
}

export default App

