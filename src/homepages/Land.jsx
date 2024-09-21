import React from 'react'
import './Land.css';
import l3left from './../assets/land/land3left.png';
import Logoslider from './homecomponents/Logoslider';
import Land2card from './homecomponents/Land2card';
import Landtab from './homecomponents/Landtab';
import Landgrad from './homecomponents/Landgrad';
import Landtest from './homecomponents/Landtest';

import Ourprices from './homecomponents/Ourprices';
import Speak from './homecomponents/Speak';
import Footer from './Footer';

const Land = () => {
  return (
    <div className='landparent'>
        <div className="land1main">
            <h1>Professionally treated water, 
            all over the house</h1>
            <p>Our primary objective is to deliver highly efficient and impactful iron removal and water purification solutions to our valued customers</p>
            <div className="land1btn">
                <button>
                Let’s Collaborate
                </button>
            </div>
        </div>
        <Logoslider/>
        <Land2card/>
        <div className="land3main">
          <div className="land3con">
            <div className="l3left">
              <div className='l3img'>
                <img src={l3left} alt="" />
              </div>
            </div>
            <div className="l3right">
              <h1>"What you consider “impossible” is already done by somebody else."</h1>
              <p>-Dr. A.P.J.Abdul Kalam India -Ex President</p>
            </div>
          </div>
        </div>
        <Landtab/>
        <Landgrad/>
        <Landtest/>

        <Ourprices/>
        <Speak/>
        

    </div>
  )
}

export default Land