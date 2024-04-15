import React from 'react';
import '../App.css';
import { FaFacebook } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { MdGroups } from "react-icons/md";
import { VscGame } from "react-icons/vsc";
import { CgMenuGridO } from "react-icons/cg";
import { FaFacebookMessenger } from "react-icons/fa";
import { BsBellFill } from "react-icons/bs";

const Header = () => {
  return (
    <header className="p-3 mb-3 border-bottom">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <a href="/" className="link-body-emphasis text-decoration-none" style={{ marginRight: "1rem" }}>
              <FaFacebook className="facebook-icon" />
            </a>

            <form className="col-lg-auto me-lg-3" role="search">
              <input type="search" className="form-control" placeholder="Search Facebook" aria-label="Search"/>
            </form>
          </div>

          <div className="d-flex align-items-center">
            <button className="header-btn1">
              <IoHome className="icon" />
            </button>
            <button className="header-btn1">
              <MdOutlineOndemandVideo className="icon" />
            </button>
            <button className="header-btn1">
              <MdGroups className="icon" />
            </button>
            <button className="header-btn1">
              <VscGame className="icon" />
            </button>
          </div>

          <div className="d-flex align-items-center">
            <button className="header-btn">
              <CgMenuGridO className="icon" />
            </button>
            <button className="header-btn">
              <FaFacebookMessenger className="icon" />
            </button>
            <button className="header-btn">
              <BsBellFill className="icon" />
            </button>

            <div className="dropdown">
              <a href="#" className="link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="./Images/Vishwajit Photo.jpg" alt="mdo" width="32" height="32" className="rounded-circle"/>
              </a>
              <ul className="dropdown-menu text-small">
                <li><a className="dropdown-item" href="#">New project...</a></li>
                <li><a className="dropdown-item" href="#">Settings</a></li>
                <li><a className="dropdown-item" href="#">Profile</a></li>
                <li><hr className="dropdown-divider"/></li>
                <li><a className="dropdown-item" href="#">Sign out</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
