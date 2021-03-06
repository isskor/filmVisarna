import React from "react";
import { Link } from "react-router-dom";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";

const slideImages = [
  "https://images3.alphacoders.com/113/thumb-1920-1132027.jpg",
  "https://wallpapercave.com/wp/wp8995046.jpg",
  "https://images.hdqwalls.com/wallpapers/joker-2019-movie-xx.jpg",
];

const Slideshow = () => {
  return (
    <div className="slideshow">
      <Slide easing="ease" className="slide">
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[0]})` }}>
            <div className="slideshowInfo">
              <div>
                <h2>Cruella</h2>
                <button>Coming Soon</button>
              </div>
            </div>
          </div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[1]})` }}>
            {" "}
            <div className="slideshowInfo">
              <div>
                <h2>The Unholy</h2>
                <Link to="/movies/60abac9fc1a04e453cbc09e3">
                  {" "}
                  <button>Book now</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[2]})` }}>
            {" "}
            <div className="slideshowInfo">
              <div>
                <h2>The Joker</h2>
                <Link to="/movies/60abaca4c1a04e453cbc09f2">
                  {" "}
                  <button>Book now</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default Slideshow;
