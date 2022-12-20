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
                        <a href="#"><li>Home</li></a>
                        <a href="#"><li>Featured</li></a>
                        <a href="#"><li>Restaurants</li></a>
                    </ul>
                </div>
                <div className="follow-us">
                    <ul>
                        <li className='footer-title'>Follow Us</li>
                        <li><FaFacebookSquare className='footer-icon '/></li>
                        <li><FaInstagram className='footer-icon '/></li>
                        <li><FaTiktok className='footer-icon '/></li>
                        <li><FaLinkedinIn className='footer-icon '/></li>
                        <li><FaTwitter className='footer-icon '/></li>
                        <li><FaGithub className='footer-icon '/></li>
                    </ul>
                </div>
                <div className="contact-us">
                    <ul>
                        <li className='footer-title'>Contact Us</li>
                        <li><a href="#"> 433-554-0000</a></li>
                        <li><a href="#">ezMealz@info.contact.ca</a></li>
                        <li><a href="#">ZZ 0Fx 3ht sjaswf, ginta sas</a></li>
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