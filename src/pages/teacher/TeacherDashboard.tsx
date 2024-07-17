import { FaPeopleRoof } from "react-icons/fa6"
import { ImBooks } from "react-icons/im"
import { SiGoogleclassroom } from "react-icons/si"
import { SlPeople } from "react-icons/sl"
import { VscFeedback } from "react-icons/vsc"
import "../../assets/styles/teacher.css"

const TeacherDashboard = () => {
    return (
        <div className="teacher_dashboard_container">

            <section className="teacher_details">
                <h1>Mr Michael Thompson</h1>
                <h5><b> Senior School 2 Teacher   </b></h5>
                <h5><b>Biology </b>(Junior School 1) || <b> Physic</b> (Senior School 3) </h5>
            </section> 

            <hr />

            <section className="teacher_dashboard_bottom">

                <div className="teacher_dashboard_bottom_container">
                    <h3>   <SlPeople className="dashboard-bottom-icon" /> Assignments </h3>
                    <p>500</p>
                </div>

                <div className="teacher_dashboard_bottom_container">
                    <h3>   <FaPeopleRoof className="dashboard-bottom-icon" /> Submitted Assignments </h3>
                    <p> 5000</p>
                </div>

                <div className="teacher_dashboard_bottom_container">
                    <h3>   <SiGoogleclassroom className="dashboard-bottom-icon" /> Ongoing Assignments </h3>
                    <p> 40</p>
                </div>

                <div className="teacher_dashboard_bottom_container">
                    <h3>   <ImBooks className="dashboard-bottom-icon" /> Pending Assignments </h3>
                    <p> 100</p>
                </div>

                <div className="teacher_dashboard_bottom_container">
                    <h3>   <ImBooks className="dashboard-bottom-icon" /> Analytics </h3>
                    <p> 100</p>
                </div>

                <div className="teacher_dashboard_bottom_container">
                    <h3>   <VscFeedback className="dashboard-bottom-icon" /> Reports </h3>
                    <p> 1200</p>
                </div>

                <div className="teacher_dashboard_bottom_container">
                    <h3>   <VscFeedback className="dashboard-bottom-icon" /> Study Group </h3>
                    <p> 1200</p>
                </div>



            </section>

        </div>
    )
}

export default TeacherDashboard
