import React from 'react';
import styles from '../style';
import {discount,robot} from '../assets';
import Resume from './Resume';
import girlComputer from '../assets/girlComputer.png'

const Hero = () => {
  return (
    <section id="home" className={`flex md: flex-row ${styles.paddingY}`}>
      {/* The below classname for 'div contains  x1:px-0 sm:px-16 px-6 which is directly translating to 'on extra-large devices, we have padding of 0, on small devices, we have a padding of 16, and otherwise, it will be a padding of 6*/}
      <div className={`flex-1 ${styles.flexStart} flex-col x1:px-0 sm:px-16 px-6`}>


        <div className="flex flex-row justify-between items-center w-full text-[45px] ml-2 p-[50px]">
          <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[70px]'>
            {/* Hi there, my name is Sanskruti Padmawar! */}
            Hi there, <br className='sm:block hidden'></br> {" "} my name is <span className='text2-gradient'> Sanskruti Padmawar!</span>
          </h1>
          <div className='ss:flex hidden md:mr-4 mr-0'>
            <Resume/>
          </div>

        </div>
        <p className={`${styles.paragraph} ml-2`}>
            <span className='text-white'>I'm a fourth year computer science student at the University of Victoria. My interests include UI/UX design, networks & communication, and anything involving human-computer interaction. I'm currently finishing up with my last semester at UVic.</span>
          </p>
      </div>

      <div>
        <img src={girlComputer} style={{filter: 'brightness(0) invert(1) saturate(100%)', padding: '20px'}} alt='Girl working on computer' width="400" height="400"></img>
      </div>

    </section>
  )
}

export default Hero