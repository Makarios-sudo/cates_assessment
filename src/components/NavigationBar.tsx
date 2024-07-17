import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import profile from "../assets/images/school-admin/profile.jpg"
import { Link } from 'react-router-dom';
import "../assets/styles/NavBar_SideBars.css"

interface NavigationBarProps {
  title: string;
}

const NavigationBar: React.FC<NavigationBarProps> = ({title}) => {

  return (
    <Navbar expand="lg" className="navbar">
      <Container fluid>
        <Navbar.Brand href="#" className='nav-header'>{title}</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className='nav-details'>
            <img src={profile} alt="profile" className='profile-pix' />
            <Link to="/logout" className='logout'> LogOut </Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavigationBar