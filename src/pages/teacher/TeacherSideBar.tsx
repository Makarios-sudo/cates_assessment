import { Link } from "react-router-dom"
import "../../assets/styles/NavBar_SideBars.css"
import { motion } from 'framer-motion';
import { TfiDashboard } from "react-icons/tfi";
import { SlPeople } from "react-icons/sl";
import { FaPeopleRoof } from "react-icons/fa6";
import { ImBooks } from "react-icons/im";
// import { GiBookshelf } from "react-icons/gi";
import { IoAnalyticsOutline } from "react-icons/io5";
import { VscFeedback } from "react-icons/vsc";
import { SiGoogleclassroom } from "react-icons/si";

const TeacherSideBar = () => {
    return (
        <motion.div
            className="sidebar-container"
            initial={{ x: '-5%' }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 120 }}
        >
            <ul>

                <li><Link to={"teacher/dashboard"} className="list-link"> DashBoard <TfiDashboard className="list-link-icon" /> </Link> </li>
                <li><Link to={"teacher/assignments"} className="list-link"> Assignments  <SlPeople className="list-link-icon" /> </Link> </li>
                <li><Link to={"teacher/submitted_assignments"} className="list-link"> Submitted Assignments <FaPeopleRoof className="list-link-icon" /> </Link> </li>
                <li><Link to={"teacher/ongoing_assignments"} className="list-link"> Ongoing Assignments  <SiGoogleclassroom className="list-link-icon" /> </Link> </li>
                <li><Link to={"teacher/pending_assignments"} className="list-link"> Pending Assignments  <ImBooks className="list-link-icon" /> </Link> </li>
                <li><Link to={"teacher/teacher_reports"} className="list-link"> Reports  <VscFeedback className="list-link-icon" /> </Link> </li>
                <li><Link to={"teacher/teacher_analytics"} className="list-link"> Analytics  <IoAnalyticsOutline className="list-link-icon" /> </Link> </li>
        
            </ul>
        </motion.div>
    )
}

export default TeacherSideBar
