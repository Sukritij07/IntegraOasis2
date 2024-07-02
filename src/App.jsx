import { useState, useEffect } from 'react'
import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';

var slideIndex = 1;

function App() {

  useEffect(() => {
    showDivs(slideIndex);
  }, []);


  return (
    
      <div className="App">
      <header className="App-header">
        <p className="App-name">Integra Oasis</p>
        <p className="options">
          <a className="links" href="#">About Us</a>
          <a className="links" href="#">Contact Us</a>
          <a className="links" href="#">Sign up/Login</a>
        </p>
      </header>
      <div className="heading">
        <h1>Integra Oasis</h1>
      </div>
      <div className="featured">
        <img className="mySlides" src={image1} alt="Slide 1" />
        <img className="mySlides" src={image2} alt="Slide 2" />
        <img className="mySlides" src={image3} alt="Slide 3" />
        <div className="arrows">
          <div className="w3-left w3-hover-text-khaki" onClick={() => plusDivs(-1)}>&#10094;</div>
          <div className="w3-right w3-hover-text-khaki" onClick={() => plusDivs(1)}>&#10095;</div>
          <span className="w3-badge demo w3-border w3-transparent w3-hover-white" onClick={() => currentDiv(1)}></span>
          <span className="w3-badge demo w3-border w3-transparent w3-hover-white" onClick={() => currentDiv(2)}></span>
          <span className="w3-badge demo w3-border w3-transparent w3-hover-white" onClick={() => currentDiv(3)}></span>
        </div>
      </div>
    </div>
    
  )
}
function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");

  if (x.length === 0 || dots.length === 0) {
    console.error("Elements with class 'mySlides' or 'demo' not found.");
    return;
  }

  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }

  // Hide all slides
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  // Remove the active class from all dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-white", "");
  }

  // Show the selected slide
  x[slideIndex-1].style.display = "block";

  // Add the active class to the selected dot
  dots[slideIndex-1].className += " w3-white";
}

export default App
