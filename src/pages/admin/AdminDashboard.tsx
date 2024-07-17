import { FaPhoneAlt } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { LuTwitter } from "react-icons/lu";
import { CiLinkedin } from "react-icons/ci";
import { SlPeople } from "react-icons/sl";
import { FaPeopleRoof } from "react-icons/fa6";
import { ImBooks } from "react-icons/im";
import { GoDot } from "react-icons/go";
import { VscFeedback } from "react-icons/vsc";
import { SiGoogleclassroom } from "react-icons/si";
import sch_logo from "../../assets/images/school-admin/dashboard/sch_logo.webp"
import "../../assets/styles/dashboard.css"
// import { useEffect, useState } from "react";
// import axios from "axios";


const AdminDashboard = () => {
    
  return (
    <div className="Admindashboard-container">

      <section className="dashboard-top">

        <div className="school-details"> 

            <div className="dashboard-school">
              <img src={sch_logo} alt="school_logo" />
              <h2> Stoltenberg Group </h2>
            </div>

            <div className="dashbboard-levels">  
              <p> <GoDot className="dashboard-level-icon" />  Day Care </p>
              <p> <GoDot className="dashboard-level-icon" /> Nusery </p>
              <p> <GoDot className="dashboard-level-icon" /> Primary </p>
            </div>

            <div className="dashboard-vision-mission">
              <h5> Mission </h5>
              <p> magnam recusandae consequatur  magnam recusandae consequatur </p>
              <h5> Vision </h5>
              <p> magnam recusandae consequatur  magnam recusandae consequatur </p>
            </div>  

            <div className="dashboard-phones">
                <p> <FaPhoneAlt />  928-326-4456 </p>
                <p> <FaPhoneAlt />  334-691-7947 </p>
            </div> 
        
            <div className="dashboard-sch-socials"> 
              <Link to={""}>  <FiFacebook className="dashboard-social-icon"/>  </Link>
              <Link to={""}>  <FaInstagram className="dashboard-social-icon"/>  </Link>
              <Link to={""}>  <LuTwitter className="dashboard-social-icon"/>  </Link>
              <Link to={""}>  <CiLinkedin className="dashboard-social-icon"/>  </Link>
            </div>
        
        </div>

        <Link to={""} className="school-details-edit">
            <button>Edit</button>
        </Link>
           
        
      </section>
      <hr/>

      <section className="dashboard-bottom">

        <div className="dashboard-bottom-container">
          <h3>   <SlPeople className="dashboard-bottom-icon" /> Teachers </h3>
          <p>500</p>
        </div>

        <div className="dashboard-bottom-container">
          <h3>   <FaPeopleRoof className="dashboard-bottom-icon" /> Students </h3>
          <p> 5000</p> 
        </div>

        <div className="dashboard-bottom-container">
          <h3>   <SiGoogleclassroom className="dashboard-bottom-icon" /> Classrooms </h3>
          <p> 40</p>
        </div>

        <div className="dashboard-bottom-container">
          <h3>   <ImBooks className="dashboard-bottom-icon" /> Subjects </h3>
          <p> 100</p>
        </div>

        <div className="dashboard-bottom-container">
          <h3>   <VscFeedback className="dashboard-bottom-icon" /> FeedBack </h3>
          <p> 1200</p>
        </div>

      </section>
        
    </div>
  )
}

export default AdminDashboard