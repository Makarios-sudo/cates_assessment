import { useState } from "react"
import AdminSideBAr from "../../pages/admin/AdminSideBAr";
import RegisteredPages from "../../pages/RegisteredPages";
import { BsArrowRightCircle } from "react-icons/bs";
import { BsArrowLeftCircle } from "react-icons/bs";
import "../../assets/styles/adminComponent.css"

const SchoolAdmin = () => {
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
        {sideBarOpen && <AdminSideBAr />}

      </div>

      <div className="dashboard-right">
        <RegisteredPages />
      </div>




    </div>
  )
}

export default SchoolAdmin