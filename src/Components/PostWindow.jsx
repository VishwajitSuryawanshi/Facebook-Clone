import React from 'react';
import '../App.css';  // Import component-specific CSS file
import { IoIosMore } from "react-icons/io";

const PostWindow = () => {
  return (
    <header className="post-window-header">
      <ul className="nav-links">
        <li><a href="#" className="nav-link px-2 post">Post</a></li>
        <li><a href="#" className="nav-link px-2 link-secondary">About</a></li>
        <li><a href="#" className="nav-link px-2 link-secondary">Friends</a></li>
        <li><a href="#" className="nav-link px-2 link-secondary">Photos</a></li>
        <li><a href="#" className="nav-link px-2 link-secondary">Videos</a></li>
        <li><a href="#" className="nav-link px-2 link-secondary">Reels</a></li>
        <li>
          <a href="#" className="more-dropdown nav-link px-2 link-secondary link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">More</a>
        </li>
      </ul>
      <div className="more-button">
        <button type="button" className="more-button-icon">
          <IoIosMore />
        </button>
      </div>
    </header>
  );
};

export default PostWindow;
