import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'

import './styles/Body.scss'
import BodyOne from './BodyOne';
import BodyTwo from './BodyTwo';
import BodyThree from './BodyThree';
import BodyFour from './BodyFour';

const Body = () => {

  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <div className='bodyContainer'>
      <div  className="gridDark" >
        <BodyOne />
      </div>
      <div 
      data-aos="zoom-in-left"
      data-aos-duration="2000">
        <BodyTwo/>
      </div>
      <div 
      data-aos="zoom-in-left"
      data-aos-duration="2000" >
        <BodyThree />
      </div>
      <div 
      data-aos="zoom-in-left"
      data-aos-duration="2000" >
        <BodyFour />
      </div>
    </div>
  )
}

export default Body;
