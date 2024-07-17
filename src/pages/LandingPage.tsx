import "../assets/styles/Landingpage.css"
import { Link } from "react-router-dom"

const LandingPage = () => {

  return (

    <div className="landingpage">

      <div className="landingContainer">

        <div className="landing-header">
          <h2>
              Welcome to virtual Classroom
          </h2>
          <p>
            Unlock the power of online learning. Connect with educators, 
            explore courses, and dive into a world of knowledge
          </p>

          <div className="landing-cta">
            
              <Link to={"/register"} className="landing-button-link"> Register</Link>
              <Link to={"/login"} className="landing-button-link"> Login</Link>
        
          </div>



        </div>

      </div>
      
    </div>
  )
}

export default LandingPage