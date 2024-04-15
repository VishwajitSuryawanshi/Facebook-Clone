import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import MainWindow from './Components/MainWindow';
import PostWindow from './Components/PostWindow';
import Cards from './Components/Cards';
import Sidebar from './Components/Sidebar';
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar2 from './Components/Sidebar2';
import AllPhotos from './Components/AllPhotos'; // Import AllPhotos component

function App() {
  const [showAllPhotos, setShowAllPhotos] = useState(false);

  const handleSeeAllPhotos = () => {
    setShowAllPhotos(true);
  }

  return (
    <>
      <div className='app-container'>
        <div className='content'>
          <Header />
          <MainWindow />
          <PostWindow />
          <Cards />
        </div>
        <Sidebar />
        <Sidebar2 onSeeAllPhotos={handleSeeAllPhotos} />
        {showAllPhotos && <AllPhotos />}
      </div>
    </>
  )
}

export default App;
