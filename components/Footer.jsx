import React from 'react';
import { AiFillInstagram, AiOutlineTwitter, AiFillFacebook } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2022 GDM Headphones All rights reserved</p>
      <p className='icons'>
        <AiFillInstagram/>
        <AiFillFacebook/>
        <AiOutlineTwitter/>
      </p>

    </div>
  )
}

export default Footer