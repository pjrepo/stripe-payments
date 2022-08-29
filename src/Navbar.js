import React from "react";
import logo from "./images/logo.svg";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./Context";

const Navbar = () => {
  const { openSidebarHandler, openSubmenuHandler, closeSubmenuHandler } =
    useGlobalContext();

  const displaySubmenuHandler = (event) => {
    const page = event.target.textContent;
    const tempBtn = event.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    openSubmenuHandler(page, { center, bottom });
  };

  const handleSubmenu = (event) => {
    if (!event.target.classList.conatins("link-btn")) {
      closeSubmenuHandler();
    }
  };

  return (
    <nav className="nav" onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="stripe " className="nav-logo" />
          <button className="btn toggle-btn" onClick={openSidebarHandler}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button className="link-btn" onMouseOver={displaySubmenuHandler}>
              products
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenuHandler}>
              developers
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenuHandler}>
              company
            </button>
          </li>
        </ul>
        <button className="btn signin-btn">Sign In</button>
      </div>
    </nav>
  );
};

export default Navbar;
