// import React from 'react'

import { FaPeopleRoof } from "react-icons/fa6"
import { ImBooks } from "react-icons/im"
import { SiGoogleclassroom } from "react-icons/si"
import { SlPeople } from "react-icons/sl"
import { VscFeedback } from "react-icons/vsc"

const StudentDashboard = () => {
    return (
        <div className="teacher_dashboard_container">

            <section className="teacher_details">
                <h1>Kelvin McClurkin</h1>
                <h5><b> Junior School 2 Student   </b></h5>
            </section>

            <hr />

            <section className="teacher_dashboard_bottom">

                <div className="teacher_dashboard_bottom_container">
                    <h3>   <SlPeople className="dashboard-bottom-icon" /> ClassRoom Subjects </h3>
                    <p>20</p>
                </div>

                <div className="teacher_dashboard_bottom_container">
                    <h3>   <SlPeople className="dashboard-bottom-icon" /> ClassRoom Sudents </h3>
                    <p>40</p>
                </div>

                <div className="teacher_dashboard_bottom_container">
                    <h3>   <SlPeople className="dashboard-bottom-icon" /> Assignments </h3>
                    <p>100</p>
                </div>

                <div className="teacher_dashboard_bottom_container">
                    <h3>   <FaPeopleRoof className="dashboard-bottom-icon" /> Submitted Assignments </h3>
                    <p> 35</p>
                </div>

                <div className="teacher_dashboard_bottom_container">
                    <h3>  <SiGoogleclassroom className="dashboard-bottom-icon" /> Ongoing Assignments </h3>
                    <p> 20</p>
                </div>

                <div className="teacher_dashboard_bottom_container">
                    <h3>   <ImBooks className="dashboard-bottom-icon" /> Pending Assignments </h3>
                    <p> 15</p>
                </div>

                <div className="teacher_dashboard_bottom_container">
                    <h3>   <ImBooks className="dashboard-bottom-icon" /> Missed Assignments </h3>
                    <p> 10</p>
                </div>

                <div className="teacher_dashboard_bottom_container">
                    <h3>   <ImBooks className="dashboard-bottom-icon" /> Analytics </h3>
                    <p> 100</p>
                </div>

                <div className="teacher_dashboard_bottom_container">
                    <h3>   <VscFeedback className="dashboard-bottom-icon" /> Reports </h3>
                    <p> 100</p>
                </div>

                <div className="teacher_dashboard_bottom_container">
                    <h3>   <VscFeedback className="dashboard-bottom-icon" /> Study Group </h3>
                    <p> 8 </p>
                </div>



            </section>

        </div>
    )
}

export default StudentDashboard
