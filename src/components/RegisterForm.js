import React from 'react'

const handleSubmit = async (e) => {
    e.preventDefault()
}

const RegisterForm = () => {
  return (
    <div className="wrapper">
    <div className="form">
        <h1 className="title">Create Account</h1>

        <form onSubmit={handleSubmit}>
            <input type="text"   className="input" placeholder="Username" required/>
            <input type="Email"   className="input" placeholder="Your Email Address" required/>
            <input type="password"   className="input" placeholder="Password" required/>

            <div align="center">
                <button type="submit" className="button">
                    
                    <a href="https://cerulean-liger-950852.netlify.app/">Submit</a>
                </button>
            </div>

            

        </form>

    </div>
  </div>
  )
}

export default RegisterForm