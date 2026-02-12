import React, {  useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

const Login = ({setUser}) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  function handleLogin(e) {
    e.preventDefault()

    if (!email || !password) {
      alert("Please fill all fields")
      return
    }

    const storedUser = JSON.parse(localStorage.getItem("user"))

    if (!storedUser) {
      alert("No User Found , Register First")
      return
    }

    if (storedUser.email === email && storedUser.password === password) {
      setUser(storedUser)
      localStorage.setItem("isAuth", "true")
      alert("Login Successful")
      navigate("/dashboard")
    } else {
      alert("Invalid Email or Password")
    }
  }

 


  return (
    <div className="container w-50 mx-auto mt-5">
      <h3>Login here</h3>

      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Login
        </button>

        <Link to="/register" className="ms-3">
          Not registered?
        </Link>
      </form>
    </div>
  );
};


export default Login
