import React from 'react'
import DB_Tab_1 from './dashboard-tabs/DB_Tab_1'
import HomePage from './HomePage/HomePage'
import HomePageV2 from './HomePage/HomePageV2'

const DashboardC = () => {
  const [dashboardTab, setDashboardTab] = React.useState(2)
  const changeDashboardTab = (tab) => {
    setDashboardTab(tab)
  }
  return (
    <div>
      {/* {dashboardTab === 1 && <HomePage changeDashboardTab = {changeDashboardTab} />} */}
      {dashboardTab === 2 && <HomePageV2 changeDashboardTab = {changeDashboardTab} />}
    </div>
  )
}

export default DashboardC