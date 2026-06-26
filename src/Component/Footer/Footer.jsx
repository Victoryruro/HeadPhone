import React from 'react'
import { FaFacebook, FaGoogle, FaInstagram, FaLinkedin, FaMapMarkedAlt, FaPhone, FaTelegram, FaYoutube,  } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6';
import { MdLocationOn } from 'react-icons/md'
import Card from "../../assets/credit-cards.webp"
import { motion } from 'framer-motion';


const Footer = () => {
  return (
    <>
    <footer className='bg-[#446a6e8a] pt-12 pb-8 p-3.5 mt-2.5 text-black/100 mx-auto'>
        <div className="container mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 ">
                {/*detials  */}
                <motion.div
                    initial={{opacity:0, y:100}}
                    animate={{opacity:1, y:0}}
                    transition={{ duration:0.6, delay:0.2 }}
                    className='space-y-6'>
                    <h1 className='text-3xl font-bold uppercase'>Listening</h1>
                    <p className='text-sm max-w-[320px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium laborum quae deserunt ipsa voluptatibus incidunt, rerum delectus, possimus sit esse laudantium consequuntur nulla debitis. Quisquam deleniti nihil modi laudantium totam?</p>
                    <div>
                        <p className='flex items-center gap-2'>
                            <FaPhone/> +234-8155990802
                        </p>
                        <p className='flex items-center gap-2'>
                            <MdLocationOn/> Warri Delta-State, Nigeria
                        </p>
                    </div>    
                </motion.div>
                {/* link */}
                <motion.div
                    initial={{opacity:0, y:100}}
                    animate={{opacity:1, y:0}}
                    transition={{ duration:0.6, delay:0.4 }}
                    className='space-y-6'>
                    <h1 className='text-3xl font-bold'>Quick Links</h1>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
                        <div>
                            <ul>
                                <li>Home</li>
                                <li>Blog</li>
                                <li>Contact Us</li>
                                <li>Privacy Policy</li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li>Home</li>
                                <li>Blog</li>
                                <li>Contact Us</li>
                                <li>Privacy Policy</li>
                            </ul>
                        </div>                        
                    </div>

                </motion.div>
                {/* socials */}
                <motion.div
                    initial={{opacity:0, y:100}}
                    animate={{opacity:1, y:0}}
                    transition={{ duration:0.6, delay:0.6 }}
                    className='space-y-6'>
                    <h1 className='text-3xl font-bold'>Follow Us</h1>
                    <div className='flex items-center gap-3'>
                        <FaFacebook className='text-3xl hover:scale-100 duration-300'/>
                        <FaInstagram className='text-3xl hover:scale-100 duration-300'/>
                        <FaXTwitter className='text-3xl hover:scale-100 duration-300'/>
                        <FaLinkedin className='text-3xl hover:scale-100 duration-300'/>
                        <FaYoutube className='text-3xl hover:scale-100 duration-300'/>
                        <FaTelegram className='text-3xl hover:scale-100 duration-300'/>
                        <FaGoogle className='text-3xl hover:scale-100 duration-300'/>
                    </div>
                    <div className='space-y-2'>
                        <p className='text-xl font-mono '>Payment Methods</p>
                        <img src={Card} alt="payment" className='w-[100%] pt-2' />
                    </div>
                </motion.div>
               
            </div>
                {/* copyright */}
            <p className='mx-auto text-3xl text-center mt-7 border-t-4 pt-8'>© 2026. Vicruro Projects</p>                
              
        </div>    
    </footer>

    </>
  )
}

export default Footer