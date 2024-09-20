import React from 'react'
import './Footer.css';
import leftorn from './../assets/footer/leftorn.png';
import rightorn from './../assets/footer/rightorn.png';
import logo from './../assets/logo.png';
import Facebook from './../assets/footer/Facebook.png';
import gmail from './../assets/footer/Gmail Login.png';
import linkedin from './../assets/footer/LinkedIn.png';
import map from './../assets/footer/Place Marker.png';
import ring from './../assets/footer/Ringer Volume.png';
import twit from './../assets/footer/TwitterX.png';
const Footer = () => {
  return (
    <div className="footparent">
        <div className="footmain">
            <div className="footmainfront">
                <div className="ftleft">
                    <img src={logo} alt="" />
                    <h1>Water is life, and clean water
                    means health</h1>
                    <p>Kennz Technologies LLP Headquarters in a Chennai
                        Established in the year 2011, Kennz Technologies LLP
                        largest and most respected company in India’s
                        private and Govt sector.</p>
                </div>
                <div className="ftcenter">
                    <p className='fthead'>Services</p>
                </div>
                <div className="ftright">
                    <p className='fthead'>Contact</p>
                    <div className="ftr">
                        <img src={map} alt="" />
                        <p>No. 25, Vasanthan Nagar Main Road, Avadi, Chennai - 600 071</p>
                    </div>
                    <div className="ftr">
                        <img src={ring} alt="" />
                        <p>9884341302 / 044-35002111</p>
                    </div>
                    <div className="ftr">
                        <img src={gmail} alt="" />
                        <p>Kennztechnologies@gmail.com</p>
                    </div>
                </div>
            </div>

            {/* <div className='footback'>
                    <img src={leftorn} alt="" />
                    <img src={leftorn} alt="" />
            </div> */}
        </div>
        <div className="footsub">
                <div className="ftsubleft">
                    <img src={Facebook} alt="" />
                    <img src={twit} alt="" />
                    <img src={linkedin} alt="" />
                    <p>All rights reserved</p>
                </div>
                <div className='ftsubright'>
                    <p>Terms of Service</p>
                    <p>Privacy Policy</p>
                    <p>Cookies</p>
                </div>
        </div>
    </div>
  )
}

export default Footer