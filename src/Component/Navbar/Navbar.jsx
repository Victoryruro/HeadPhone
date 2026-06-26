import React, { useState } from 'react'
import { MdMenu} from 'react-icons/md'
import {SlEarphones} from 'react-icons/sl'
import { UpdateFollower } from 'react-mouse-follower'
import { motion } from 'framer-motion' 

const NavbarMenu =[
    {
        id:1,
        title:"Home",
        link : "/",
    },
    {
        id:2,
        title:"Category",
        link : "#",
    },
    {
        id:3,
        title:"Blog",
        link :"/Blog" ,
    },
    {
        id:4,
        title:"About",
        link : "#",
    },
    {
        id:5,
        title:"Contact",
        link : "#",
    }

]

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
        <div className='brandDark text-white py-8 font-sans '>
            <motion.nav
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{ duration:1.3, delay:0.7 }}
                className='container flex justify-between items-center'>
                {/* logo */}
                <div>
                    <a href="#" className='text-xl font-bold uppercase px-1' >
                        Listening / <span className='font-extralight text-white/70'>Market</span>
                    </a>
                </div>
                {/* menu */}
                <div className='hidden md:block'>
                    <ul className='flex items-center gap-4'>
                        {
                            NavbarMenu.map((item) => (
                                
                                <li key={item.id}>
                                    <UpdateFollower
                                        mouseOptions={
                                            {
                                            backgroundColor:'whitesmoke',
                                            zIndex:999,
                                            followSpeed:1.5,
                                            scale:2,
                                            mixBlendMode:'difference',
                                            
                                            
                                            
                                            }
                                        }
                                    >
                                        <a 
                                        href={item.link} 
                                        className='inline-block text-sm py-2 px-3 uppercase'>
                                            {item.title}
                                        </a> 

                                    </UpdateFollower>
   

                                </li>
                            ))
                        }
                        <button className='text-xl ps-14'>
                            <SlEarphones/>
                        </button>
                    </ul>
                </div>
                {/* mobile */}
                <div className='relative md:hidden'>
                    <button
                        type='button'
                        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                        onClick={() => setMenuOpen((open) => !open)}
                        className='text-white text-3xl rounded-full   p-2 hover:bg-white/10 transition'
                    >
                        <MdMenu />
                    </button>
                    {menuOpen && (
                        <ul className='absolute w-100  right-[0px]  top-full h-125 z-50   rounded-2xl bg-[#edf1f5] p-4  text-black transition-all ease-in-out duration-300'>
                        {
                            NavbarMenu.map((item) => (
                                
                                <li key={item.id}>
                                    <UpdateFollower
                                        mouseOptions={
                                            {
                                            backgroundColor:'black',
                                            zIndex:999,
                                            followSpeed:1.5,
                                            scale:2,
                                            mixBlendMode:'difference',
                                            }
                                        }
                                    >
                                        <a 
                                        href={item.link} 
                                        onClick={() => setMenuOpen(false)}
                                        className='block text-sm py-3 px-3 uppercase tracking-[0.18em]  transition'>
                                            {item.title}
                                        </a> 

                                    </UpdateFollower>
   

                                </li>
                            ))
                        }
                        <li className=' justify-center pt-2 hidden md:flex'>
                            <button className=' inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-white text-lg hover:bg-white/10 transition'>
                                <SlEarphones />
                            </button>
                        </li>
                    </ul>
                    )}
                </div>
            </motion.nav>

        </div>

    </>
  )
}

export default Navbar