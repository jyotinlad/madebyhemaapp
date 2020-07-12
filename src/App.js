import React from 'react';
import './App.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'

const avatar = require("./images/avatar.jpg")
const thumb_1 = require("./images/thumbs/01.jpg")
const thumb_2 = require("./images/thumbs/02.jpg")
const thumb_3 = require("./images/thumbs/03.jpg")
const thumb_4 = require("./images/thumbs/04.jpg")
const thumb_5 = require("./images/thumbs/05.jpg")
const thumb_6 = require("./images/thumbs/06.jpg")
const thumb_7 = require("./images/thumbs/07.jpg")
const full_1 = require("./images/fulls/01.jpg")

function App() {
  return (
    <div id="wrapper">
      <header id="header">
        <span class="avatar"><img src={avatar} alt="" /></span>
        <h1><strong>Made by Hema</strong></h1>
        <ul class="icons">
          <li><a href="https://www.facebook.com/pages/category/Clothing--Brand-/Made-By-Hema-230693307801495/" target="_blank" class="icon style2"><FaFacebookF></FaFacebookF></a></li>
          <li><a href="#" target="_blank" class="icon style2"><FaInstagram></FaInstagram></a></li>
          <li><a href="https://www.linkedin.com/in/hema-modvadia-15886060/" target="_blank" class="icon style2"><FaLinkedinIn></FaLinkedinIn></a></li>
          <li><a href="mailto:j.lad.uk@gmail.com" target="_blank" class="icon style2"><FiMail></FiMail></a></li>
        </ul>
      </header>
      <section id="main">
        <section class="thumbnails">
          <div>
            <a href={full_1}>
              <img src={thumb_1} alt="" />
              <h3>Dresses</h3>
            </a>
            <a href="images/fulls/02.jpg">
              <img src={thumb_2} alt="" />
              <h3>Patterns</h3>
            </a>
          </div>
          <div>
            <a href="images/fulls/03.jpg">
              <img src={thumb_3} alt="" />
              <h3>Suits</h3>
            </a>
            <a href="images/fulls/04.jpg">
              <img src={thumb_4} alt="" />
              <h3>Shirts</h3>
            </a>
            <a href="images/fulls/05.jpg">
              <img src={thumb_5} alt="" />
              <h3>Hats</h3>
            </a>
          </div>
          <div>
            <a href="images/fulls/06.jpg">
              <img src={thumb_6} alt="" />
              <h3>Gloves</h3>
            </a>
            <a href="images/fulls/07.jpg">
              <img src={thumb_7} alt="" />
              <h3>Scarfs</h3>
            </a>
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
