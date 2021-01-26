import './Navigation.css'
import { Link } from 'react-router-dom'
import { Navbar, Nav, Image } from 'react-bootstrap'


const Navigation = () => {

    return (


        <Navbar bg="light" expand="md" className="menu" style={{ borderBottom: '1px solid #ddd' }}>
            <Link to="/">
                <Navbar.Brand>Mern e-commerce</Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Link to="/cart" className="btn-cart">
                        <i className="fas fa-shopping-cart mr-2" />Shopping Cart<span className="cart-counter"> </span>
                    </Link>
                    <Link to="/signin" className="btn-cart">
                    </Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>


    )
}

export default Navigation