import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom"


const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  const submit = async () => {
    // e.preventDefault();

    try {
      const user = {
        email: email,
        password: password,
      };

      const { data } = await axios.post(
        "http://127.0.0.1:8000/class_assessment/v1/login/",
          user,
        {
          headers: { "Content-Type": "application/json" },
          // withCredentials: true,
        }
      );

      localStorage.setItem("access_token", data.access_token);
      localStorage.setItem("refresh_token", data.refresh_token);
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${data["access_token"]}`;

      // history.push("/");

      window.location.href = "/admin/dashboard";
    } catch (error) {
      console.error("Login failed:", error);
    }
  };


  return (
    <div className="auth-container">

      <section className="form-section">

        <form className="auth-form" onSubmit={submit}>
        <h2> Login </h2>

          <div className="form-container">
            <label>Email:</label>
            <input
                type="email"
                name="email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
                />
          </div>

          <div className="form-container">
          <label>PassWord:</label>
          <input
                type="password"
                name="password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)} 
              />
          </div>

          <div className='submit-container'>
            <button type="submit">Login</button> 
            {/* <Link to={"/admin"} className="forget-password-link"> 
            </Link>  */}
          </div>

          <div className="forget-password">
            <span>Forget Password? </span>
            <Link to={"/verify-email"} className="forget-password-link"> Click here </Link>
          </div>
          

        </form>

      </section>

   </div>
  )
}

export default Login