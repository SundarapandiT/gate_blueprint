import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { auth } from "../firebase"
import { Link, useNavigate } from "react-router-dom"

function Register(props) {

  const nav = useNavigate()

  const handleSubmit = async(e) => {
    e.preventDefault()
    const displayName = e.target[0].value
    const email = e.target[1].value
    const pass = e.target[2].value
    const discipline = e.target[3].value
    const phoneNumber = e.target[4].value
    console.log(phoneNumber)
    
    try{
      const res = await createUserWithEmailAndPassword(auth, email, pass)
      await updateProfile(res.user, {
        uid: res.user.uid,
        displayName,
        email,
        discipline,
        phoneNumber
      })

      nav('/')
    }catch(error){
      console.error('error creating user: ',error)
    }
  }

  return <div className="register">
    <div className="wrapper">
      <form class="form" onSubmit={handleSubmit}>
        <h2>Register</h2>
        <input type="text" name="full_name" placeholder="Full Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <input type="password" name="password" placeholder="Password" required />
        <input type="text" name="gate_discipline" placeholder="GATE Discipline" required />
        <input type="number" name="mobile_no" placeholder="Mobile no" required />
        <button type="submit" id="registerBtn">Register</button>
        <p class="signup">Already have an account? <Link to='/login'>Login</Link></p>
      </form>
    </div>
  </div>
}

export default Register;