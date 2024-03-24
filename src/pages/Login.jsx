import { Link, useNavigate } from "react-router-dom"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase"
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"

function Login(props) {

  const {currrentUser} = useContext(AuthContext)
  const nav = useNavigate()
  const handleSubmit = async(e) => {
    e.preventDefault()
    const email = e.target[0].value
    const pass = e.target[1].value

    try{
      await signInWithEmailAndPassword(auth, email, pass)
      nav('/dashboard')
    }catch(error){
      console.error('error signing in: ', error)
    }
  }

  return (
    <div className="login">
      <div className="wrapper">
        <form class="form" onSubmit={handleSubmit}>
          <h2>Login</h2>
          <input type="email" name="email" placeholder="Email" required />
          <input type="password" name="password" placeholder="Password" required />
          <button type="submit" name="login">Login</button><br /><br /><br />
          <p class="signup">Don't have an account? <Link to='/register'>Sign up</Link></p>
        </form>
      </div>
    </div>
  )
}

export default Login