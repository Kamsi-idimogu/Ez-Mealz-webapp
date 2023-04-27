import React from 'react';
import { FaFacebookSquare, FaInstagram, FaTiktok, FaLinkedinIn, FaTwitter, FaGithub } from 'react-icons/fa';


const Footer = () => {

    return (
        <div className='footer'>
            <div className="footer-info">
                <div className="fotter-logo">
                    <h2>Eazy Mealz</h2>
                </div>
                <div className="footer-links">
                    <ul>
                        <a href='#Home'><li>Home</li></a>
                        <a href="#Featured"><li>Featured</li></a>
                        <a href="#eat_out"><li>Restaurants</li></a>
                    </ul>
                </div>
                <div className="follow-us">
                    <ul>
                        <li className='footer-title'>Follow Us</li>
                        <li><a href='https://github.com/Kamsi-idimogu' target='_blank' rel="noreferrer"><FaGithub className='footer-icon grey'/></a></li>
                        <li><FaFacebookSquare className='footer-icon blue'/></li>
                        <li><FaInstagram className='footer-icon red'/></li>
                        <li><FaTiktok className='footer-icon grey'/></li>
                        <li><FaLinkedinIn className='footer-icon blue'/></li>
                        <li><FaTwitter className='footer-icon blue'/></li>
                    </ul>
                </div>
                <div className="contact-us">
                    <ul>
                        <li className='footer-title'>Contact Us</li>
                        <li className='contact-item'>41X-999-9999</li>
                        <li className='contact-item'>ezMealz@info.contact.ca</li>
                        <li className='contact-item'>ZZ 0Fx 3ht sjaswf, ginta sas</li>
                    </ul>
                </div>


            </div>
            <div className='copyright-container'>
                <div className='underline'></div>
                <div className='copyright'>
                    <div>All Rights Reserved</div>
                    <div>Copyright © 2022 Eazy Mealz By Kamsi Idimogu</div>
                </div>
            </div>
        </div>
    )

};

export default Footer;