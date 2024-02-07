import {useState} from 'react'
import {close,logo,menu} from '../assets';
import {navLinks} from '../constants';
import pfp from '../assets/pfp.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
        <img src={pfp} alt='pfp' className='h-[55px] w-[55px]'/>

        {/* MOBILE NAVBAR */}
        <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
            {navLinks.map((nav, index) => (
                // every list item has a key cause we're inside a map
                <li
                key = {nav.id}
                className = {`font-poppins font-normal cursor-pointer text-[16px] text-white ${index == navLinks.length-1 ? 'mr-0' : 'mr-10'}`}>
                    <a href={`#${nav.id}`}>
                        {nav.title}

                    </a>
                    
                </li>
            ))}
            {/* Add Link for Experience Page */}
            {/* <li>
                <Link to = '/experience'>
                    {navLinks.find (nav => nav.title == "Experience").title }
                </Link>
            </li> */}

        </ul>

        {/* This is a new list of items ONLY for mobile devices */}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
                <img src={toggle ? close : menu} alt="menu" className='w-[28px] object-contain' onClick={() => setToggle((prev) => !prev)}>

                </img>
        </div>

    </nav>
  )
}

export default Navbar