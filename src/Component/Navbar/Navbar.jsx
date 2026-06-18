import React from 'react'
import { MdMenu} from 'react-icons/md'
import {SlEarphones} from 'react-icons/sl'
import { UpdateFollower } from 'react-mouse-follower'
import { motion } from 'framer-motion' 

const NavbarMenu =[
    {
        id:1,
        title:"Home",
        link : "#",
    },
    {
        id:2,
        title:"Category",
        link : "#",
    },
    {
        id:3,
        title:"Blog",
        link : "#",
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
                <div className='md:hidden'>
                    <MdMenu className='text-4xl'/>
                        
                </div>
            </motion.nav>

        </div>

    </>
  )
}

export default Navbar