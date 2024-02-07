import React from 'react';
import styles from '../style';
import { footerLinks, socialMedia } from '../constants';
import { logo } from '../assets';
import pfp from '../assets/pfp.png';

const Footer = () => (
    <section className={`${styles.flexCenter} ${styles.paddingY} bg-primary`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className='flex-1 flex flex-col justify-start mr-10'>
          <img src={pfp} alt='pfp' className='w-[60px] h-[60px]'>
          </img>
          <p className= {`${styles.paragraph} text-white mt-6`}>Contact me here!</p>
        </div>

      </div>
    </section>
  )


export default Footer