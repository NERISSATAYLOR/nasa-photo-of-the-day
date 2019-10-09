import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import PhotoDisplay from './components/PhotoDisplay';

function App() {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    axios
      .get(`http://henry-mock-nasa-api.herokuapp.com/api`)
      .then(response => {
        //console.log(response);
        setPhotos(response.data);
      }, [])
      .catch(err => console.log(err));

  }, []);
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span>🚀</span>!
      {photos && photos.map(photo => {
          return (
            <PhotoDisplay key={photo.date}
              date={photo.date}
              explanation={photo.explanation}
              title={photo.title}
              image={photo.hdurl}
              copyright={photo.copyright}
            />
          );
        })}

      </p>
    </div>
  );
}

export default App;
