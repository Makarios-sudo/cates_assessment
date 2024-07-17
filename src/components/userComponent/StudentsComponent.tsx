import { useState } from "react"
// import AdminSideBAr from "../../pages/admin/AdminSideBAr";
// import RegisteredPages from "../../pages/RegisteredPages";
import { BsArrowRightCircle } from "react-icons/bs";
import { BsArrowLeftCircle } from "react-icons/bs";
import "../../assets/styles/adminComponent.css"
import StudentSideBar from "../../pages/student/StudentSideBar";
import StudentRegisteredPages from "../../pages/StudentRegisteredPages";

const StudentsComponent = () => {

  const [sideBarOpen, setSideBarOpen] = useState(false)

  const toggleSidebar = () => {
    setSideBarOpen(!sideBarOpen)
  }

  return (

    <div className="dashboard-container">

      <div className="dashbord-left">

        {sideBarOpen ? (
          <BsArrowLeftCircle onClick={toggleSidebar} className="toggle" />
        ) : (
          <BsArrowRightCircle onClick={toggleSidebar} className="toggle" />
        )}
        {sideBarOpen && <StudentSideBar />}

      </div>

      <div className="dashboard-right">
        <StudentRegisteredPages />
      </div>




    </div>
  )
}

export default StudentsComponent