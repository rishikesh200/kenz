import React from 'react'
import './Land2card.css';
import orno from './../../assets/land/Ornament 77.jpg';
import right from './../../assets/land/land2right.png';
import left from './../../assets/land/land2left.png';


const Land2card = () => {
  return (
    <div className='land2main'>Land2card
        <div className="land2card">
            <div className="l2left">
                <h1 className='l21head'><span>//</span>ABOUT</h1>
                <div className='l2leftline'></div>
                <h1 className="l22head">
                Water is life, and clean water means health
                </h1>
                <p><span>Kennz Technologies LLP</span> Headquarters in Chennai Established in the year 2011, Kennz Technologies LLP largest and most respected company in India’s private and Govt sectors has successfully become one of the fastest-growing companies and most admired infrastructure companies in south India and has made phenomenal progress under his leadership expert guidance a leadershipin all its major lines of business.</p>
                <div className="l2leftimg">
                    <img src={left} alt="" />
                </div>
            </div>
            <div className="l2right">
                <div className="l2orn">
                    <img src={orno} alt="" />
                </div>
                <div className="l2rightimg">
                    <img src={right} alt="" />
                </div>
            </div>
        </div>
    
    </div>
  )
}

export default Land2card