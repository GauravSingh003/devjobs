import { Link } from "react-router-dom"
import "./Navbar.css"
const Navbar = () => {
  return (
    <>
      <nav className=''>
        <h1>DevJobs</h1>
            <ul>
                <li><Link to="/">Home</Link> </li>
                <li><Link to="/jobs">Jobs</Link></li>
                <li><Link to="/saved">Saved</Link> </li>
            </ul>
      </nav>
    </>
  )
}

export default Navbar