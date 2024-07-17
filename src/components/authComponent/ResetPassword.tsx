import { Link } from "react-router-dom"

const ResetPassword = () => {
  return (
    <div className="auth-container">

    <section className="form-section">

       <form className="auth-form">
       <h2> Reset Password </h2>

         <div className="form-container">
           <label>Password:</label>
           <input
                 type="password"
                 name="password"
                 // value={registerData.firstName}
                 // onChange={handleRegister}
                 required
               />
         </div>

         <div className="form-container">
           <label>Confirm Password:</label>
           <input
                 type="password"
                 name="password"
                 // value={registerData.firstName}
                 // onChange={handleRegister}
                 required
               />
         </div>

        <div className='submit-container'>
          <Link to={"/profile"} className="forget-password-link">
              <button type="submit">Submit</button> 
          </Link> 
         </div>

       

       </form>

    </section>

   </div>
  )
}

export default ResetPassword