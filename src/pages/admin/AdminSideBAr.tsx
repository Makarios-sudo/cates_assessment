// import React from 'react'
import { Link } from "react-router-dom"
import "../../assets/styles/NavBar_SideBars.css"
import { motion } from 'framer-motion';
import { TfiDashboard } from "react-icons/tfi";
import { SlPeople } from "react-icons/sl";
import { FaPeopleRoof } from "react-icons/fa6";
import { ImBooks } from "react-icons/im";
import { GiBookshelf } from "react-icons/gi";
import { IoAnalyticsOutline } from "react-icons/io5";
import { VscFeedback } from "react-icons/vsc";
import { SiGoogleclassroom } from "react-icons/si";


const AdminSideBAr = () => {
  return (
    <motion.div 
        className="sidebar-container"
        initial={{ x: '-5%' }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', stiffness: 120 }}
    >
        <ul>
            <li><Link to={"admin/dashboard"} className="list-link"> DashBoard <TfiDashboard className="list-link-icon" /> </Link> </li>
            <li><Link to={"admin/teachers"} className="list-link"> Teachers  <SlPeople className="list-link-icon" /> </Link> </li>
            <li><Link to={"admin/students"} className="list-link"> Students <FaPeopleRoof className="list-link-icon" /> </Link> </li>
            <li><Link to={"admin/classrooms"} className="list-link"> ClassRooms  <SiGoogleclassroom className="list-link-icon" /> </Link> </li>
            <li><Link to={"admin/subjects"} className="list-link"> Subjects  <ImBooks className="list-link-icon" /> </Link> </li>
            <li><Link to={"admin/topics"} className="list-link"> Topics  <GiBookshelf className="list-link-icon" /> </Link> </li>
            <li><Link to={"admin/analytics"} className="list-link"> Analytics  <IoAnalyticsOutline className="list-link-icon" /> </Link> </li>
            <li><Link to={"admin/complaint"} className="list-link"> Complaints  <VscFeedback className="list-link-icon" /> </Link> </li>
            <li><Link to={"admin/complaint"} className="list-link"> Settings  <VscFeedback className="list-link-icon" /> </Link> </li>
        </ul>
    </motion.div>
  )
}

export default AdminSideBAr