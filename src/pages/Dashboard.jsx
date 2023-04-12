import { useState } from "react"
import Chatbot from "../components/Chatbot"
import DashboardC from "../components/Dashboard"
import Sidebar from "../components/Sidebar"
import "../styles/dashboard.css"

const Dashboard = () => {
    const [dashboardTab, setDashboardTab] = useState(1)
    const changeDashboardTab = (tab) => {
        setDashboardTab(tab)
    }
    return (
        <div className="dashboard_page">
            <div className="sidebar_container">
                <Sidebar changeDashboardTab = {changeDashboardTab} />
            </div>
            {dashboardTab === 1 && <div className="dashboard_tab_container"><DashboardC /></div>}
            {dashboardTab === 2 && <div className="dashboard_tab_container"><Chatbot /></div>}
        </div>
    )
}

export default Dashboard