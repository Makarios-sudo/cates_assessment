import { useState } from "react"
// import AdminSideBAr from "../../pages/admin/AdminSideBAr";
// import RegisteredPages from "../../pages/RegisteredPages";
import { BsArrowRightCircle } from "react-icons/bs";
import { BsArrowLeftCircle } from "react-icons/bs";
import "../../assets/styles/adminComponent.css"
import TeacherSideBar from "../../pages/teacher/TeacherSideBar";
import TeacherRegisteredPages from "../../pages/TeacherRegisteredPages";



const TeachersComponent = () => {

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
        {sideBarOpen && <TeacherSideBar />}

      </div>

      <div className="dashboard-right">
        {/* <RegisteredPages /> */}
        <TeacherRegisteredPages/>
      </div>




    </div>
  )
}

export default TeachersComponent