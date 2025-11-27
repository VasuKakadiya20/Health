import React, { useContext, useEffect, useState } from 'react'
import HealthMetrics from '../../components/home/HealthMetrics'
import "./Dashboard.css";
import Goals from '../../components/todaygoals/goals';
import Footerpart from '../../components/sleep/footerpart';
import NutritionDashboardchart from '../../components/Nutrition/chart';
import { mycontext } from '../../App';
import { data } from 'react-router-dom';

function Dashboard() {
  const context = useContext(mycontext)
  const [last7daydata, setLast7daydata] = useState([])

  useEffect(() => {
    context.setIsHideSidebarAndHeader(false);
    if (context.sevendaysdata && context.sevendaysdata.length > 0) {
      setLast7daydata(context.sevendaysdata);
    } else {

      const storedData = JSON.parse(localStorage.getItem("sevendaysdata")) || [];
      setLast7daydata(storedData);
    }
  }, [context.sevendaysdata]);

  return (
    <>
      <div className='Dashbord-container'>
        <div className="dashboard slideDown">
          <h1>
            Hi Vasu! <img width="40" height="40" src="https://img.icons8.com/emoji/48/waving-hand-emoji.png" alt="wave" />
          </h1>
          <p>Glad to see your health a priority! 💪</p>
        </div>

        < HealthMetrics />
        <Goals />
        <Footerpart />
        <NutritionDashboardchart Data={last7daydata} />
      </div>
    </>
  )
}

export default Dashboard
