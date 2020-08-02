import React, { Component } from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import { StyledLinks } from './links.styled';

export default class Links extends Component {
  render() {
    return (
      <StyledLinks>
        <div>
          <ul className="icons">
            <li><a href="https://www.facebook.com/pages/category/Clothing--Brand-/Made-By-Hema-230693307801495/" target="_blank" class="icon style2"><FaFacebookF></FaFacebookF></a></li>
            <li><a href="https://instagram.com/made_by_hema?igshid=vb4s699supde" target="_blank" class="icon style2"><FaInstagram></FaInstagram></a></li>
            <li><a href="https://www.linkedin.com/in/hema-modvadia-15886060/" target="_blank" class="icon style2"><FaLinkedinIn></FaLinkedinIn></a></li>
            <li><a href="mailto:j.lad.uk@gmail.com" target="_blank" class="icon style2"><FiMail></FiMail></a></li>
          </ul>
        </div>
      </StyledLinks>
    );
  }
}
