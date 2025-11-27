import React from "react";
import "./Sidebar.css";
import { CgGym } from "react-icons/cg";
import { GoGoal } from "react-icons/go";
import { SlPeople } from "react-icons/sl";
import { FiLogOut } from "react-icons/fi";
import { RiCupLine } from "react-icons/ri";
import Userlogo from "../../assets/user.jpg";
import { FaRegHeart } from "react-icons/fa6";
import { AiOutlineGift } from "react-icons/ai";
import logo from "../../assets/companylogo.png";
import { BsClipboardData } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineLeaderboard } from "react-icons/md";
import { GiTrophyCup, GiNightSleep } from "react-icons/gi";
import { LuApple, LuLayoutDashboard } from "react-icons/lu";
import { Dumbbell } from "lucide-react";

export default function Sidebar() {
  const navigate = useNavigate()
  const goingprofile = () => {
    navigate("/profile")
  }

  const Logout = () => {
    navigate("/login")
    console.log("Logout Succefully!")
  }

  return (
 <>
     <div className="sidebar">
      <div className="sidebar-header">
        <img
          src={logo}
          alt="Healthx Logo"
          className="sidebar-logo"
        />
      </div>

      <div className="sidebar-menu">
        <ul className="menu">
          <li><Link to="/"><button className="dropdown-btn"><LuLayoutDashboard /> Dashboard</button></Link></li>
          <li><Link to="/workout"><button className="dropdown-btn"><Dumbbell /> My Workout</button></Link></li>
          <li><Link to="/nutrition"><button className="dropdown-btn"><LuApple /> My Nutrition</button></Link></li>
          {/* <li><Link to="/Wellness"><button className="dropdown-btn"><FaRegHeart /> My Wellness</button></Link></li> */}
          {/* <li><button className="dropdown-btn"><RiCupLine /> Lifestyle & Habits</button></li> */}
          {/* <li><button className="dropdown-btn"><BsClipboardData /> Medical Records</button></li> */}
          {/* <li><button className="dropdown-btn"><SlPeople /> Family Dashboard</button></li> */}
          {/* <li><button className="dropdown-btn"><GiTrophyCup /> My Challenges</button></li> */}
          <li><Link to="/Sleep"><button className="dropdown-btn"><GiNightSleep /> Sleep Tracking</button></Link></li>
          <li><Link to="/fitnes"><button className="dropdown-btn"><GoGoal /> Fitness Goals</button></Link></li>
          {/* <li><Link to="/metrics"><button className="dropdown-btn"><BsClipboardData /> Health Metrics</button></Link></li> */}
        </ul>
      </div>

      <div className="sidebar-footer" >
        <div className="user-info" onClick={goingprofile}>
          <img src={Userlogo} alt="User" className="user-img" />
          <div>
            <h4>Vasu Kakadiya</h4>
            <p>vasukakadiya...</p>
          </div>
        </div>
        <button className="logout-btn" onClick={Logout}>
          <FiLogOut /> Logout
        </button>
      </div>
      
    </div>
 </>
  );
}
