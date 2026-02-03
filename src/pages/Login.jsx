import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState("")
    const[password, setPassword] = useState("")
    const navigate = useNavigate()

    function handleLogin(){
        if(email && password){
            localStorage.setItem("isAuth", "true")
            navigate("/dashboard")
        }
        console.log(email)
        console.log(password)
    }
  return (
    <div>
      <input
        placeholder='Enter Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}

      />
       {/* <p>Current value: {email}</p> */}

      <input 
        type="text"
        placeholder='Enter Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button 
        className='p-4 bg-danger'
        onClick={handleLogin}
      >
        Login
        </button>
    </div>
  )
}

export default Login
