import React from 'react';

const AllPhotos = () => {
  const photos = [
    "./Images/MyPhoto (5).jpg",
    "./Images/MyPhoto (6).jpg",
    "./Images/MyPhoto (7).jpg",
    "./Images/MyPhoto (8).jpg",
    "./Images/MyPhoto (9).jpg",
    "./Images/MyPhoto (10).jpg",
    "./Images/MyPhoto (11).jpg",
    "./Images/MyPhoto (12).jpg",
    "./Images/MyPhoto (13).jpg",
    "./Images/MyPhoto (14).jpg",
    "./Images/MyPhoto (15).jpg",
    "./Images/MyPhoto (16).jpg",
    "./Images/MyPhoto (17).jpg",
    "./Images/MyPhoto (18).jpg",
    "./Images/MyPhoto (19).jpg",
    "./Images/MyPhoto (20).jpg",
    
  ];

  return (
    <div className="container mt-4">
      <h2 className="mb-4">All Photos</h2>
      <div className="row">
        {photos.map((photo, index) => (
          <div key={index} className="col-md-3 mb-3">
            <img src={photo} className="img-fluid rounded" alt={`Photo ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllPhotos;
