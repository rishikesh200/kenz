import React from 'react'
import Marquee from "react-fast-marquee";
import './Logoslider.css';


import l1 from './../../assets/logoslider/Rectangle 142.png';
import l2 from './../../assets/logoslider/Rectangle 143.png';
import l3 from './../../assets/logoslider/indianrailways.png';
import l4 from './../../assets/logoslider/tn.png';
import l5 from './../../assets/logoslider/iit.png';
import l6 from './../../assets/logoslider/goi.png';
import l7 from './../../assets/logoslider/csir.png';
import l8 from './../../assets/logoslider/chennai hr.png';



const Logoslider = () => {
  return (
    <div className="logoslidermain">
         <Marquee className='logoslider'gradient={true} speed={100}>
                <img src={l1} alt="" />
                <img src={l2} alt="" />
                <img src={l3} alt="" />
                <img src={l4} alt="" />
                <img src={l5} alt="" />
                <img src={l6} alt="" />
                <img src={l7} alt="" />
                <img src={l8} alt="" />
                
         </Marquee>
    </div>
  )
}

export default Logoslider