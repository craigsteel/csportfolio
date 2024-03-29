'use client'
import { Navbar, Nav } from 'react-bootstrap';
import Link from 'next/link';

const BlogNavbar = () => {
  return (
    <Navbar
      className="fj-navbar fj-nav-base px-5"
      bg="black"
      expand="lg" >
      <Navbar.Brand className="fj-navbar-brand">
        <Link href="/">
          <a>CRAIG PARFITT - 0786 656 2170</a>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link
            as={() =>
              <Link href='/'>
               <a className="fj-navbar-item fj-navbar-link">Home</a>
              </Link>
            }
          />
          <Nav.Link
            as={() =>
              <Link href='/about'>
               <a className="fj-navbar-item fj-navbar-link">About</a>
              </Link>
            }
          />
          <Nav.Link
            as={() =>
              <Link href="mailto:info@craigparfitt.com"
              target="_blank"
              rel="noopener noreferrer"
              >
               <a className="fj-navbar-item fj-navbar-link">Contact</a>
              </Link>
            }
          />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
export default BlogNavbar;
