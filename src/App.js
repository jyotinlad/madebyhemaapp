import React from 'react';
import './App.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import PictureBox from './components/picturebox/picturebox.jsx'

const avatar = require("./images/avatar.jpg")

const thumbBridal = require("./images/thumbs/bridal_wear.jpg")
const thumbIndian = require("./images/thumbs/indian_wear.jpg")
const thumbFurnishings = require("./images/thumbs/soft_furnishings.jpeg")
const thumbFashion = require("./images/thumbs/fashion.jpg")

function importAll(r) {
  return r.keys().map(r);
}
const imagesBridal = importAll(require.context("./images/collections/bridal_wear", false, /\.(png|jpe?g|svg)$/));
const imagesIndian = importAll(require.context("./images/collections/indian_wear", false, /\.(png|jpe?g|svg)$/));
const imagesFurnishings = importAll(require.context("./images/collections/soft_furnishings", false, /\.(png|jpe?g|svg)$/));
const imagesFashion = importAll(require.context("./images/collections/bridal_wear", false, /\.(png|jpe?g|svg)$/));

function App() {  
  return (
    <div id="wrapper">
      <header id="header">
        <span className="avatar"><img src={avatar} alt="" /></span>
        <ul className="icons">
          <li><a href="https://www.facebook.com/pages/category/Clothing--Brand-/Made-By-Hema-230693307801495/" target="noopener" className="icon style2"><FaFacebookF></FaFacebookF></a></li>
          <li><a href="https://instagram.com/made_by_hema?igshid=vb4s699supde" target="noopener" className="icon style2"><FaInstagram></FaInstagram></a></li>
          <li><a href="https://www.linkedin.com/in/hema-modvadia-15886060/" target="noopener" className="icon style2"><FaLinkedinIn></FaLinkedinIn></a></li>
          <li><a href="mailto:j.lad.uk@gmail.com" target="noopener" className="icon style2"><FiMail></FiMail></a></li>
        </ul>
      </header>
      <section id="main">
        <section className="thumbnails">
          <div>
            <PictureBox thumb={thumbBridal} desc={"Bridal Wear"} images={imagesBridal}/>
          </div>
          <div>
            <PictureBox thumb={thumbIndian} desc={"Indian Wear"} images={imagesIndian}/>
            <PictureBox thumb={thumbFurnishings} desc={"Soft Furnishings"} images={imagesFurnishings}/>
          </div>
          <div>
            <PictureBox thumb={thumbFashion} desc={"Fashion Portfolio"} images={imagesFashion}/>
          </div>
        </section>
      </section>
      <footer id="footer">
        <p>Created by <a href="https://www.linkedin.com/in/jyotinlad">Jyotin Lad</a> using <a href="http://templated.co">TEMPLATED</a></p>
      </footer>
    </div>
  );
}

export default App;
