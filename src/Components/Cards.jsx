import React, { useState, useRef } from 'react';
import { GrLike } from "react-icons/gr";
import { FaRegComment } from "react-icons/fa";
import { RiShareForwardLine } from "react-icons/ri";
import '../App.css'; // Import component-specific CSS file

const Cards = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [comment, setComment] = useState('');
  const commentInputRef = useRef(null);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleCommentSubmit = () => {
    // Handle comment submission here
    console.log('Comment submitted:', comment);
    // Optionally, you can clear the comment field after submission
    setComment('');
  };

  const handleCommentButtonClick = () => {
    // Focus on the comment input when the comment button is clicked
    commentInputRef.current.focus();
  };

  return (
    <div className="cards-container">
      <div className="card">
        <div className="card-body">
          <a href="#" className="profile-link">
            <img src="./Images/Vishwajit Photo.jpg" alt="mdo" className="profile-image" />
            <h6 className="card-title">Vishwajit Suryawanshi</h6>
          </a>
        </div>
        <img src="./Images/MyPhoto (1).jpg" className="card-img-top" alt="CardPhoto" />
        <div className="card-body">
          <p className="card-text">While moving forward in 2024 let's cherish the best memories in 2023...❤️
            I was being honoured as a Cultural Head of my College...
          </p>
          <p className="blue-text">
            #memories #2023 #2024 #bestmemories #cultural #culturalhead
          </p>
          <div className="card-buttons">
            <button className={`btn btn-outline ${isLiked ? 'btn-primary' : ''}`} onClick={handleLikeClick}>
              <GrLike /> Like
            </button>
            <button className="btn btn-outline" onClick={handleCommentButtonClick}>
              <FaRegComment /> Comment
            </button>
            <button className="btn btn-outline"><RiShareForwardLine /> Share</button>
          </div>
          <div className="comment-section">
            <input
              ref={commentInputRef}
              type="text"
              className="form-control comment-input"
              placeholder="Write a comment..."
              value={comment}
              onChange={handleCommentChange} 
            />
            <button className="btn btn-primary comment-submit" onClick={handleCommentSubmit}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
