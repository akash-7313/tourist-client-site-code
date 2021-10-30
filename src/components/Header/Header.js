import React from "react";
import { Container, Dropdown, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useAuth();

  const logo = {
    fontFamily: "'Gluten', cursive",
    marginRight: "10px",
    cursor: "pointer",
  };

  return (
    <div className="banner">
      <div className="mb-5 mt-3">
        <Navbar sticky="top" expand="lg" variant="light">
          <Container>
            <Navbar.Brand>
              <span style={logo} className="name me-3 fs-3">
                <b className="text-primary">To</b>
                <b className="text-warning">u</b>
                <b className="text-primary">ri</b>
                <b className="text-success">s</b>
                <b className="text-warning">t</b>
                <b className="text-primary">O</b>
              </span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse
              id="basic-navbar-nav"
              className="justify-content-end"
            >
              <Nav>
                <NavLink
                  className="text-decoration-none me-4 text-primary py-2"
                  exact
                  to="/home"
                >
                  Home
                </NavLink>
                <NavLink
                  className="text-decoration-none me-4 text-primary py-2"
                  exact
                  to="/bestDestination"
                >
                  Best Destination
                </NavLink>
                <NavLink
                  className="text-decoration-none me-4 text-primary py-2"
                  exact
                  to="/blogs"
                >
                  Blogs
                </NavLink>

                {user?.email && (
                  <Dropdown className="me-3 mb-2">
                    <Dropdown.Toggle
                      id="dropdown-button-dark-example1"
                      variant="secondary"
                    >
                      <Navbar.Text className="text-white">
                        {user?.displayName}
                      </Navbar.Text>
                    </Dropdown.Toggle>

                    <Dropdown.Menu variant="dark">
                      <Dropdown.Item>
                        <NavLink
                          className="text-decoration-none me-4 text-white py-2"
                          exact
                          to="/addDestination"
                        >
                          Add a Destination
                        </NavLink>
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item>
                        <NavLink
                          className="text-decoration-none me-4 text-white py-2"
                          exact
                          to="/myOrders"
                        >
                          My Orders
                        </NavLink>
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item>
                        <NavLink
                          className="text-decoration-none me-4 text-white py-2"
                          exact
                          to="/manageAllOrders"
                        >
                          Manage All Orders
                        </NavLink>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                )}
                {user?.email ? (
                  <button
                    onClick={logOut}
                    className="btn btn-sm btn-primary rounded-3 px-3 py-2 mb-2"
                  >
                    Log out
                  </button>
                ) : (
                  <div>
                    <NavLink
                      className="text-decoration-none me-4 text-primary py-2"
                      exact
                      to="/login"
                    >
                      Login
                    </NavLink>
                    <NavLink
                      className="text-decoration-none me-4 text-primary py-2"
                      exact
                      to="/register"
                    >
                      <button className="btn btn-sm btn-primary rounded-3 me-4 py-2 mt-1">
                        Register
                      </button>
                    </NavLink>
                  </div>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div className="py-5 d-flex justify-content-center align-items-center">
        <div className="py-5">
          <div className="py-5">
            <div className="py-5 text-center">
              <h1 className="text-white text-size">SWISS</h1>
              <p className="text-white">Dream, Explore, Discover</p>
              <button className="mb-5 btn btn-sm btn-warning rounded-pill px-5 ">
                GO
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

/*
<NavLink
                  className="text-decoration-none me-4 text-primary py-2"
                  exact
                  to="/home"
                >
                  My Orders
                </NavLink>
                <NavLink
                  className="text-decoration-none me-4 text-primary py-2"
                  exact
                  to="/home"
                >
                  Manage Orders
                </NavLink>


<NavLink
                  className="text-decoration-none me-4 text-primary py-2"
                  exact
                  to="/blog"
                >
                  Blogs
                </NavLink>
                <NavLink
                  className="text-decoration-none me-4 text-primary py-2"
                  exact
                  to="/about"
                >
                  About
                </NavLink>

*/
