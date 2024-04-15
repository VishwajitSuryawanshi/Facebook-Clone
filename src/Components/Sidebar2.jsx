import React, { useState } from 'react';
import '../App.css'; // Import component-specific CSS file

const Sidebar2 = ({ onSeeAllPhotos }) => {
  const [showAllPhotos, setShowAllPhotos] = useState(false);

  const handleSeeAllPhotos = () => {
    setShowAllPhotos(true);
    onSeeAllPhotos(); // Call the onSeeAllPhotos callback if provided
  };

  return (
    <div className="sidebar2-container">
      <a href="/" className="sidebar2-link">
        <svg className="bi-icon" width="30" height="24"><use xlinkHref="#bootstrap"></use></svg>
        <span className="sidebar2-text">Photos</span>
      </a>

      <div className="row mx-n2">
        <div className="col-md-6 mb-3 px-1">
          <img src="./Images/MyPhoto (1).jpg" className="img-fluid rounded" alt="Placeholder" />
        </div>
        <div className="col-md-6 mb-3 px-1">
          <img src="./Images/MyPhoto (2).jpg" className="img-fluid rounded" alt="Placeholder" />
        </div>
      </div>
      <div className="row mx-n2">
        <div className="col-md-6 mb-3 px-1">
          <img src="./Images/MyPhoto (3).jpg" className="img-fluid rounded" alt="Placeholder" />
        </div>
        <div className="col-md-6 mb-3 px-1">
          <img src="./Images/MyPhoto (4).jpg" className="img-fluid rounded" alt="Placeholder" />
        </div>
      </div>

      <button className="see-all-button" onClick={handleSeeAllPhotos}>See All Photos</button>
    </div>
  );
};

export default Sidebar2;
