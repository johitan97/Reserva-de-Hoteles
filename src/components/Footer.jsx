import React from 'react'
import { FaFacebookSquare,FaLinkedin } from 'react-icons/fa';
import {IoLogoYoutube} from 'react-icons/io';
import { AiFillInstagram } from 'react-icons/ai';

const Footer = () => {
    return (
        <footer id="sticky-footer" className="bg-dark text-dark-50">
            <div className="container py-1">
                <div className="row">
                    <div className="col-md-6 col-12 my-auto text-light">
                        <small>Copyright &copy; 2020 Johan R.M</small>
                    </div>
                    <div className="col-md-6 col-12">
                        <div className="d-flex float-right">
                            <a href="https://www.facebook.com/">
                                <FaFacebookSquare className="connect text-light" /></a>
                            <a href="https://www.linkedin.com/">
                                <FaLinkedin className="connect text-light" /></a>
                            <a href="https://www.instagram.com/">
                                <AiFillInstagram className="connect text-light" /></a>
                            <a href="https://www.youtube.com/">
                                <IoLogoYoutube className="connect text-light" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer