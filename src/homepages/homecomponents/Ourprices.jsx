import React from 'react'
import './Ourprices.css';
import opm from './../assets/ourprices/op1m.png';
import opb from './../assets/ourprices/opb1.png';

const Ourprices = () => {
  return (
    <div className='opmain'>
        <div className="optitlemain">
            <h1><span>//</span>Our Prices</h1>
        </div>
        <div className="opsplit">
            <div className="opleft">
                <h1>Have a Water Purification issue?</h1>
                <p>Our primary objective is to deliver highly efficient and impactful iron removal and water purification solutions to our valued customers. We take great pride in our reputation for providing dependable, amicable service that instills trust and confidence in our clientele.</p>
                <div className='opleftbtn'>Download brochure<span>0</span></div>
            </div>
            <div className="opright">
                <div className="oprback">
                    <img className='opb1' src={opb} alt="" />
                    <img className='opb1' src={opb} alt="" />
                </div>
                <div className='oprmain'>
                    <img src={opm} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Ourprices