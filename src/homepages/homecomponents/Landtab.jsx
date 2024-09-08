import React, { useState, useEffect } from 'react';
import './Landtab.css';

import lttright from './../../assets/land/landtab/ornamentright.jpg';
import ltbottom from './../../assets/land/landtab/ornamentleftbotom.png';
import p2 from './../../assets/land/landtab/purifier1.png';
import p1 from './../../assets/land/landtab/purifier2.png';
import p3 from './../../assets/land/landtab/purifier3.png';

const Landtab = () => {
  const [activeTab, setActiveTab] = useState('domestic');
  const [animate, setAnimate] = useState(false);

  const tabContent = {
    domestic: {
      title: 'Domestic Water Purifier',
      description: 'Our Domestic Water Purifiers are equipped with advanced filtration systems that effectively remove sediment, bacteria, viruses, heavy metals, and other harmful substances from your water, ensuring that every drop you drink is safe and clean.',
      images: [p1, p3, p2],
    },
    alkaline: {
      title: 'Alkaline Water Treatment Solutions',
      description: 'We offer cutting-edge solutions in water purification, with a special focus on alkaline water purifiers. Our state-of-the-art technology ensures the delivery of premium-quality alkaline water, enriched with essential minerals for optimal health benefits.',
      images: [p1, p3, p2],
    },
    construction: {
      title: 'Construction Work',
      description: 'Our experienced team manages projects from start to finish, ensuring seamless coordination, adherence to timelines, and budgetary compliance. From conceptualization to execution, our expert architects and planners work closely with clients to design spaces that align with their vision and needs.',
      images: [p1, p3, p2],
    },
    industrial: {
      title: 'Industrial Water Treatment Solutions',
      description: 'We specialize in industrial water treatment solutions, offering customized services to meet the unique needs of manufacturing, petrochemical, and other industrial sectors. We prioritize innovation and sustainability, providing cost-effective solutions tailored to enhance operational performance and mitigate risks.',
      images: [p1, p3, p2],
    },
  };

  useEffect(() => {
    setAnimate(false); // Reset the animation state
    const timer = setTimeout(() => setAnimate(true), 50); // Trigger the animation after a slight delay

    return () => clearTimeout(timer); // Cleanup the timeout
  }, [activeTab]);

  return (
    <div className='landtabmain'>
      <div className="lttitle">
        <div className="lttleft">
          <h1>What we do</h1>
          <h5>We transform ordinary tap water into clean</h5>
        </div>
        <div className="lttright">
          <img src={lttright} alt="" />
        </div>
      </div>
      <div className='landtabcon'>
        <ul className="landtabnavcon">
          {Object.keys(tabContent).map((key) => (
            <li 
              key={key} 
              className={activeTab === key ? 'active' : 'nonactive'}
              onClick={() => setActiveTab(key)}
            >
              <span>{tabContent[key].title}</span>
            </li>
          ))}
        </ul>
        <div className="landtabcontent">
          <div className="landtableft">
            <h1>{tabContent[activeTab].title}</h1>
            <p>{tabContent[activeTab].description}</p>
          </div>
          <div className="landtabright">
            {tabContent[activeTab].images.map((img, index) => (
              <div key={index} className={`ltrightimg ${animate ? 'bounceIn' : ''}`}>
                <img src={img} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="ltbottomimg">
        <img src={ltbottom} alt="" />
      </div>
    </div>
  );
}

export default Landtab;
