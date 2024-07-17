import { Link } from "react-router-dom"

const VerifyEmail = () => {
  return (
    <div className="auth-container">

    <section className="form-section">

       <form className="auth-form">
       <h2> Enter Your Email </h2>

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

        <div className='submit-container'>
            <Link to={"/reset-password"} className="forget-password-link">
              <button type="submit">Submit</button> 
            </Link> 
         </div>
  

       </form>

    </section>

   </div>
  )
}

export default VerifyEmail