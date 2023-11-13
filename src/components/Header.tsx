import {Container, Nav, Navbar} from "react-bootstrap";
import { Link } from "react-router-dom";


export function Header(){
    return (
        <div className="navbar-pos">
        <Navbar className="color-nav" variant='light' >  
            <Container fluid>
                <Navbar.Brand href="/">
                    <img src="/img/logo.png" width= "230" height ="70" alt="Logo"></img>
                </Navbar.Brand>
                <Nav className="mx-auto" >
                    <h1 className="nav-text"> Find your fur-ever Friend!</h1>
                    <span><Link to={`/update/`} className="update-btn btn btn-secondary">Add Adoption</Link></span>
                </Nav>
            
        </Container>
      </Navbar>
      </div>
    )
}