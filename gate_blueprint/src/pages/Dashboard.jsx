import { signOut } from "firebase/auth"
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"
import { auth } from "../firebase"

function Dashboard(props) { 

  const {currentUser} = useContext(AuthContext)
  const nav = useNavigate()

  const signout = async(e) => {
    try{
      await signOut(auth)
      console.log('logging out')
      nav('/login')
    }catch(error){
      console.error('error signing out: ',error)
    }
  }

  return currentUser && <div className="dashboard">
    <header>
      <nav class="navbar">
        <div class="navbar-left">
          <div class="menu-toggle" onclick="toggleMenu()">&#9776;</div>
        </div>
        <a href="#" class="navbar-brand"><i><span>G</span>ate <span>B</span>lueprint</i></a>
        <div class="navbar-right">
          <ul>
            <li><a href="">About</a></li>
            <li><a href="">Help</a></li>
            <li><a href="">Contact</a></li>
            <li><a onClick={signout}>Logout</a></li>
          </ul>
        </div>
      </nav>
    </header>

    <div class="slide-menu" id="slideMenu">
      <div class="menu-content">
        <ul>
          <img src="Gate.png" alt="logo" width="100px" height="100px" />
          <li><a href="User_Dashboard.html">Home</a></li>
          <li><a href="editprofile.html">Profile Information</a></li>
        </ul>
      </div>
    </div>

    <div class="container">
      <div class="profile">
        <div class="profile-data">
          <h2>Profile Information</h2>
          <div class="profile-info">
            <p><strong>Name:</strong> {currentUser.displayName}</p>
            <p><strong>Email:</strong> {currentUser.email}</p>
          </div>
        </div>

        <div class="profile-progress">
          <h2>Progress Report</h2>
        </div>
      </div>

      <div class="material">
        <h2>Study Materials</h2>
        <div class="material-item">
          <h3>Syllabus</h3>
          <p>View the complete GATE syllabus</p>
          <a href="#">View Syllabus</a>
        </div>
        <div class="material-item">
          <h3>Previous Questions</h3>
          <p>Access previous year's GATE questions</p>
          <a href="#">View Previous Questions</a>
        </div>
        <div class="material-item">
          <h3>Mock Test</h3>
          <p>Practice with mock tests for GATE preparation</p>
          <a href="#">Take Mock Test</a>
        </div>
      </div>
    </div>
    <footer>
      <div class="footer-content">
        <div class="footer-section contact-info">
          <h3 id="contact">Contact Us</h3>
          <p>Email: contact@example.com</p>
          <p>Phone: +1234567890</p>
          <p>Address: 123 Street, City, Country</p>
        </div>
        <div class="footer-section site-info">
          <h3>Website Information</h3>
          <p>&copy; 2024 Gate Blueprint.com</p>
          <p>BE-CSE 3rd year</p>
        </div>
      </div>

    </footer>
  </div>
}

export default Dashboard