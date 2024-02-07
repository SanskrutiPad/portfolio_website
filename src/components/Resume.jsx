// import React from 'react';
import styles from '../style';
import { arrowUp } from '../assets';

const Resume = () => (
  <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-purple-gradient p-[2px] cursor-pointer`}>
    <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
      <div className={`${styles.flexStart} flex-row`}>
        <p className='font-poppins font-small text-[18px] leading-[23px]'>
          <span className='text2-gradient'>Resume</span>
        </p>
        <img src = {arrowUp} className='h-[23px] w-[23px] object-contain'></img>

      </div>
    </div>
  </div>
)
  


export default Resume