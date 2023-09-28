import React, { useState } from 'react';
import './App.css';

function App() {
  const [isExpandedBox1, setIsExpandedBox1] = useState(false);
  const [isExpandedBox2, setIsExpandedBox2] = useState(false);
  const [isExpandedBox3, setIsExpandedBox3] = useState(false);

  const [isBox1Visible, setIsBox1Visible] = useState(true);
  const [isBox2Visible, setIsBox2Visible] = useState(true);
  const [isBox3Visible, setIsBox3Visible] = useState(true);

  const toggleExpandBox1 = () => {
    setIsExpandedBox1(!isExpandedBox1);
  };

  const toggleExpandBox2 = () => {
    setIsExpandedBox2(!isExpandedBox2);
  };

  const toggleExpandBox3 = () => {
    setIsExpandedBox3(!isExpandedBox3);
  };

  const toggleBox1 = () => {
    setIsBox1Visible(!isBox1Visible);
  };

  const toggleBox2 = () => {
    setIsBox2Visible(!isBox2Visible);
  };

  const toggleBox3 = () => {
    setIsBox3Visible(!isBox3Visible);
  };

  return (
    <div className="app">
      {isBox1Visible && (
        <div className={`box ${isExpandedBox1 ? 'expanded' : ''}`}>
          <div className="green-rectangle">$ 1,123,456</div> {}

          <div className="image-container">
            <img
              src="./img/island.jpg"
              alt="Paris"
              className="box-image" 
            />
          </div>
          <div className="content-container">
            <h2 className="box-title">Paris 7 Days Tour</h2>
            <div className={`details ${isExpandedBox1 ? 'expanded' : ''}`}>
              <p>
                Paris is the capital of France, known for its romantic ambiance,
                historic landmarks, and exquisite cuisine.
              </p>
              {isExpandedBox1 && (
                <p>
                  Paris is the capital of France, known for its romantic ambiance,
                  historic landmarks, and exquisite cuisine.
                </p>
              )}
              {!isExpandedBox1 && (
                <button className="expand-button" onClick={toggleExpandBox1}>
                  Read More
                </button>
              )}
            </div>
            {isExpandedBox1 && (
              <button className="expand-button" onClick={toggleExpandBox1}>
                Show Less
              </button>
            )}
          </div>
          <button className="close-button" onClick={toggleBox1}>
          Not Interested
            </button>
        </div>
      )}

    {isBox2Visible && (
        <div className={`box ${isExpandedBox2 ? 'expanded' : ''}`}>
        <div className="green-rectangle">$ 400,253</div> {}

          <div className="image-container">
            <img
              src="./img/volcano.jpg"
              alt="Box 2"
              className="box-image" // Apply the fixed-size image class
            />
          </div>
          <div className="content-container">
            <h2 className="box-title">Volcano 3 Days Tour</h2>
            <div className={`details ${isExpandedBox2 ? 'expanded' : ''}`}>
              <p>
                This dreamy volcano paradise is a remote tropical island with a majestic
                yet calm volcano, lush landscapes, and a close-knit community. Residents
                enjoy stunning views,
              </p>
              {isExpandedBox2 && (
                <p>
                  a temperate climate, and a variety of outdoor
                  activities, making it an idyllic place to live.
                </p>
              )}
              {!isExpandedBox2 && (
                <button className="expand-button" onClick={toggleExpandBox2}>
                  Read More
                </button>
              )}
            </div>
            {isExpandedBox2 && (
              <button className="expand-button" onClick={toggleExpandBox2}>
                Show Less
              </button>
            )}
          </div>
          <button className="close-button" onClick={toggleBox2}>
              Not Interested
            </button>
        </div>
      )}

    {isBox3Visible && (
        <div className={`box ${isExpandedBox3 ? 'expanded' : ''}`}>
          <div className="green-rectangle">$ 6,533,246</div> {}
          <div className="image-container">
            <img
              src="./img/mushroom.jpg"
              alt="Box 3"
              className="box-image" // Apply the fixed-size image class
            />
          </div>
          <div className="content-container">
            <h2 className="box-title">Mushroom 12 Days Tour</h2>
            <div className={`details ${isExpandedBox3 ? 'expanded' : ''}`}>
              <p>
                Imagine a whimsical mushroom land, where towering fungi create a
                magical forest canopy. This enchanting place offers a surreal, 
              </p>
              {isExpandedBox3 && (
                <p>
                  fairy-tale-like environment with vibrant, oversized mushrooms 
                in various shapes and colors. The air is filled with a sweet, 
                  earthy scent, and bioluminescent mushrooms cast a soft, ethereal 
                  glow at night. Inhabitants of this unique realm live in cozy 
                  mushroom cottages and navigate through winding mushroom pathways, 
                  making it a dreamy and otherworldly place to call home.
                </p>
              )}
              {!isExpandedBox3 && (
                <button className="expand-button" onClick={toggleExpandBox3}>
                  Read More
                </button>
              )}
            </div>
            {isExpandedBox3 && (
              <button className="expand-button" onClick={toggleExpandBox3}>
                Show Less
              </button>
            )}
          </div>
          <button className="close-button" onClick={toggleBox3}>
          Not Interested
            </button>
        </div>
    )}
</div>
  );
}

export default App;
