// import React from 'react'

import { motion } from "framer-motion"
import { FaPeopleRoof } from "react-icons/fa6"
import { ImBooks } from "react-icons/im"
import { IoAnalyticsOutline } from "react-icons/io5"
import { SiGoogleclassroom } from "react-icons/si"
import { SlPeople } from "react-icons/sl"
import { TfiDashboard } from "react-icons/tfi"
import { VscFeedback } from "react-icons/vsc"
import { Link } from "react-router-dom"

const StudentSideBar = () => {
    return (
        <motion.div
            className="sidebar-container"
            initial={{ x: '-5%' }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 120 }}
        >
            <ul>

                <li><Link to={"student/dashboard"} className="list-link"> DashBoard <TfiDashboard className="list-link-icon" /> </Link> </li>
                <li><Link to={"student/classroom"} className="list-link"> ClassRoom <TfiDashboard className="list-link-icon" /> </Link> </li>
                <li><Link to={"student/class_mates"} className="list-link"> ClassMates <TfiDashboard className="list-link-icon" /> </Link> </li>
                <li><Link to={"student/assignments"} className="list-link"> Assignments  <SlPeople className="list-link-icon" /> </Link> </li>
                <li><Link to={"student/submitted_assignments"} className="list-link"> Submitted Assignments <FaPeopleRoof className="list-link-icon" /> </Link> </li>
                <li><Link to={"student/ongoing_assignments"} className="list-link"> Ongoing Assignments  <SiGoogleclassroom className="list-link-icon" /> </Link> </li>
                <li><Link to={"student/pending_assignments"} className="list-link"> Pending Assignments  <ImBooks className="list-link-icon" /> </Link> </li>
                <li><Link to={"student/missed_assignment"} className="list-link"> Missed Assignments  <ImBooks className="list-link-icon" /> </Link> </li>
                <li><Link to={"student/teacher_reports"} className="list-link"> Reports  <VscFeedback className="list-link-icon" /> </Link> </li>
                <li><Link to={"student/teacher_analytics"} className="list-link"> Analytics  <IoAnalyticsOutline className="list-link-icon" /> </Link> </li>

            </ul>
        </motion.div>
    )
}

export default StudentSideBar
