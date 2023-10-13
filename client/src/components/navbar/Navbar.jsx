import { useEffect, useState } from "react";
import "./Navbar.scss";
import myPic from "../../../public/assets/myPic1.jpeg";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  // for navbar color change in Home Only
  const { pathname } = useLocation();

  // change in scroll effects
  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  // condition for current user
  const currentUser = {
    id: 1,
    username: "Aaditya Jujagar",
    isSeller: true,
  };

  return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link className="link" to="/">
            <span>fiverr</span>
            <span>.</span>
          </Link>
        </div>
        <div className="links">
          <span>Fiverr Business</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sign in</span>
          {/* if current user is a seller */}
          {!currentUser?.isSeller && <span>Become a Seller</span>}
          {!currentUser && (
            <button className={active ? "active" : ""}>Join</button>
          )}
          {currentUser && (
            <div className="user" onClick={() => setOpen(!open)}>
              <img src={myPic} alt="" />
              <span>{currentUser?.username}</span>
              {open && (
                <div className="options">
                  {currentUser?.isSeller && (
                    <>
                      <Link className="link" to="/mygigs">
                        Gigs
                      </Link>
                      <Link className="link" to="/add">
                        Add New Gig
                      </Link>
                    </>
                  )}
                  <Link className="link" to="/orders">
                    Orders
                  </Link>
                  <Link className="link" to="/messages">
                    Messages
                  </Link>
                  <Link className="link" to="/">
                    Logout
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {(active || pathname !== "/") && (
        <>
          <hr />
          <div className="menu">
            <span>Graphics & Design</span>
            <span>Programming & Tech</span>
            <span>Digital Marketing</span>
            <span>Video & Animation</span>
            <span>Writing & Translation</span>
            <span>Music & Audio</span>
            <span>Business</span>
            <span>Data</span>
            <span>Photography</span>
            <span>AI Services</span>
          </div>
        </>
      )}
    </div>
  );
}

export default Navbar;
