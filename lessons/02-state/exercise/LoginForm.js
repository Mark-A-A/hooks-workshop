import React, { useState } from "react"
import VisuallyHidden from "@reach/visually-hidden"
import { FaSignInAlt } from "react-icons/fa"
import TabsButton from "app/TabsButton"
import { login } from "app/utils"

// import LoginFormFinal from './LoginForm.final'
// export default LoginFormFinal

export default function LoginForm() {
  const [showPassword, togglePassword] = useState(false)
  const [loading, toggleLoading] = useState(false)
  const [error, toggleError] = useState(false)
  
  const handlePasswordCheckBox = () => togglePassword(!showPassword)
  
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log("events")
    console.dir(e.target)
    const [email, password]= e.target.elements
    console.log(login)
    toggleLoading(true)
    login(email.value, password.value)
      .then(()=>{
        toggleLoading(false)
      })
      .catch((error)=>{
        console.error(error)
      })
  }

  return (
    <form onSubmit={handleLoginSubmit}>
      <VisuallyHidden>
        <label htmlFor="login:email">Email:</label>
      </VisuallyHidden>
      <input
        type="text"
        id="login:email"
        className="inputField"
        placeholder="you@example.com"
      />

      <VisuallyHidden>
        <label htmlFor="login:password">Password:</label>
      </VisuallyHidden>
      <input
        id="login:password"
        type={showPassword ? "text" : "password"}
        className="inputField"
        placeholder="Password"
      />

      <div>
        <label>
          <input
            className="passwordCheckbox"
            type="checkbox"
            defaultChecked={showPassword}
            onClick={handlePasswordCheckBox}
          />{" "}
          show password
        </label>
      </div>

      <TabsButton >
        <FaSignInAlt />
        <span>{loading ? "Loading..." : "Login"}</span>
      </TabsButton>
    </form>
  )
}
