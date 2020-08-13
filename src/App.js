import React from 'react';
import './App.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import PictureBox from './components/picturebox/picturebox.jsx'

const avatar = require("./images/avatar.jpg")
const thumb_1 = require("./images/thumbs/bridal_wear.jpg")
const thumb_2 = require("./images/thumbs/indian_wear.jpg")
const thumb_3 = require("./images/thumbs/soft_furnishings.jpeg")
const thumb_4 = require("./images/thumbs/04.jpg")
const thumb_5 = require("./images/thumbs/05.jpg")
const thumb_6 = require("./images/thumbs/06.jpg")
const thumb_7 = require("./images/thumbs/07.jpg")

const images = [
  '//placekitten.com/1500/500',
  '//placekitten.com/4000/3000',
  '//placekitten.com/800/1200',
  '//placekitten.com/1500/1500',
];

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
            <PictureBox thumb={thumb_1} desc={"Bridal Wear"} images={images}/>
          </div>
          <div>
            <PictureBox thumb={thumb_2} desc={"Indian Wear"} images={images}/>
            <PictureBox thumb={thumb_3} desc={"Soft Furnishings"} images={images}/>
          </div>
          <div>
            <PictureBox thumb={thumb_6} desc={"Fashion Portfolio"} images={images}/>
          </div>
        </section>
      </section>
      <footer id="footer">
        <p>Created With <a href="http://templated.co">TEMPLATED</a></p>
      </footer>
    </div>
  );
}

export default App;
