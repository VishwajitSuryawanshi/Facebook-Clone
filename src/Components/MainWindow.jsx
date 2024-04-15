import React from 'react';
import { HiCamera } from "react-icons/hi2";
import { FaPlus } from "react-icons/fa6";
import { RiPencilFill } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import '../App.css'; // Import component-specific CSS file

const MainWindow = () => {
  const handleEditProfilePhoto = () => {
    console.log("Edit profile photo clicked");
  };

  const handleEditCoverPhoto = () => {
    console.log("Edit cover photo clicked");
  };

  return (
    <>
      <div className="cover-photo-container">
        <div className="cover-photo-wrapper">
          <center>
            <img 
              src="./Images/Cover Photo.jpg" 
              alt="Cover Photo" 
              className="cover-photo"
            />
          </center>
          <button 
            className="edit-cover-button"
            onClick={handleEditCoverPhoto}
          >
            <HiCamera className="camera-icon" />
            Edit Cover Photo
          </button>
        </div>
      </div>

      <div className="profile-photo-container">
        <img 
          src="./Images/Vishwajit Photo.jpg" 
          alt="mdo" 
          className="profile-photo"
        />
        <button 
          className="edit-profile-button1"
          onClick={handleEditProfilePhoto}
        >
          <HiCamera className="camera-icon1" />
        </button>
      </div>

      <div className="user-info">
        <h1 className="user-name">Vishwajit</h1>
        <h1 className="user-surname">Suryawanshi</h1>
        <p className="user-friends">1.6k friends</p>
      </div>

      <div className="action-buttons">
        <button 
          className="add-to-story-button"
          onClick={handleEditCoverPhoto}
        >
          <FaPlus className="plus-icon" />
          Add to story
        </button>

        <button 
          className="edit-profile-button"
          onClick={handleEditCoverPhoto}
        >
          <RiPencilFill className="pencil-icon" />
          Edit Profile
        </button>

        <button className="arrow-button">
          <IoIosArrowDown className="arrow-icon" />
        </button>
      </div>

      <div className="profile-images">
        {/* Add profile images here */}
        <img src="./Images/Image1.jpg" alt="mdo" width="35" height="35" className="rounded-circle"/>
        <img src="./Images/Image2.jpg" alt="mdo" width="35" height="35" className="rounded-circle"/>
        <img src="./Images/Image3.jpg" alt="mdo" width="35" height="35" className="rounded-circle"/>
        <img src="./Images/Image4.jpg" alt="mdo" width="35" height="35" className="rounded-circle"/>
        <img src="./Images/Image5.jpg" alt="mdo" width="35" height="35" className="rounded-circle"/>
        <img src="./Images/Image6.jpg" alt="mdo" width="35" height="35" className="rounded-circle"/>
        <img src="./Images/Image7.jpg" alt="mdo" width="35" height="35" className="rounded-circle"/>
        <img src="./Images/Image8.jpg" alt="mdo" width="35" height="35" className="rounded-circle"/>
      </div>
    </>
  );
};

export default MainWindow;
