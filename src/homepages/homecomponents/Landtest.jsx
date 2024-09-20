import React from 'react'
import './Landtest.css';
import test2 from './../../assets/land/landtest/test1.png';
import test1 from './../../assets/land/landtest/test2.png';
import test3 from './../../assets/land/landtest/test3.png';
import test4 from './../../assets/land/landtest/test4.png';
import Landtestslider from './Landtestslider';

Landtestslider
const landtest = () => {
  return (
    <div className='landtestmain'>
        <div className="landtesttitle">
            <h1>More than 50,000 families choose us for their homes</h1>
        </div>
        <div className="landtestsplit">
            <div className="ltestleft">
                <div className="ltslbtn">
                    <button>Give Your Feedback</button>
                </div>
                <div className="ltslimg">
                    <img src={test1} alt="" />
                    <img src={test2} alt="" />
                    <img src={test3} alt="" />
                    <img src={test4} alt="" />
                </div>
                
                <p className='ltsltext'>When it comes to providing pure water for your family, nothing but the best will be done.</p>
            </div>
            <div className="ltestright">
               <Landtestslider/>
                
            </div>
        </div>
    </div>

  )
}

export default landtest