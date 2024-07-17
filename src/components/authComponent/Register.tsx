import { Link } from "react-router-dom"
import "../../assets/styles/auth.css"

const Register = () => {
  return (
    <div className="auth-container">

     <section className="form-section">

        <form className="auth-form">
        <h2> Register </h2>

          <div className="form-container">
            <label>First Name:</label>
            <input
                  type="text"
                  name="firstName"
                  // value={registerData.firstName}
                  // onChange={handleRegister}
                  required
                />
          </div>

          <div className="form-container">
            <label> Last Name: </label>
            <input
                  type="text"
                  name="firstName"
                  // value={registerData.firstName}
                  // onChange={handleRegister}
                  required
                />
          </div>

          <div className="form-container">
            <label>Email:</label>
            <input
                  type="email"
                  name="email"
                  // value={registerData.firstName}
                  // onChange={handleRegister}
                  required
                />
          </div>

         <div className="form-container">
          <label>PassWord:</label>
          <input
                type="password"
                name="password"
                // value={registerData.firstName}
                // onChange={handleRegister}
                required
              />
         </div>

         <div className="form-container">
            <label>Confirm PassWord:</label>
            <input
                  type="password"
                  name="confirmPassword"
                  // value={registerData.firstName}
                  // onChange={handleRegister}
                  required
                />
         </div>

          <div className='submit-container'>
            <Link to={"/profile"} className="forget-password-link">
                <button type="submit">Login</button> 
            </Link>    
          </div>

        </form>

     </section>

    </div>
  )
}

export default Register