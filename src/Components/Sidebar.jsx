import React from 'react';
import { FaGraduationCap, FaLocationDot, FaHeart } from "react-icons/fa6";
import { IoHomeSharp } from "react-icons/io5";
import '../App.css';

const Sidebar = () => {
  return (
    <>
    <div className="sidebar-container">
      <a href="/" className="sidebar-link">
        <svg className="bi-icon" width="30" height="24"><use xlinkHref="#bootstrap"></use></svg>
        <span className="sidebar-text">Intro</span>
      </a>

      <center>
        <p>Youtuber</p>
        <p>Vishudha Beats...</p>
        <p>Tabla Player...</p>
        <button className="edit-bio-button">
          Edit Bio
        </button>
      </center>

      <div className="info-section">
        <div className="info-item">
          <FaGraduationCap className="info-icon" />
          <span className="info-text">Studies at Shivaji University</span>
        </div>
        <div className="info-item">
          <IoHomeSharp className="info-icon" />
          <span className="info-text">Lives in Karad</span>
        </div>
        <div className="info-item">
          <FaLocationDot className="info-icon" />
          <span className="info-text">From Karad</span>
        </div>
        <div className="info-item">
          <FaHeart className="info-icon" />
          <span className="info-text">Single</span>
        </div>
      </div>

      <center>
        <button className="edit-details-button">
          Edit Details
        </button>

        <button className="add-features-button">
          Add Features
        </button>
      </center>
    </div>
    </>
  );
};

export default Sidebar;
