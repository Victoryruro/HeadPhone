import React from 'react'
import Image from "../../assets/headphone3.png"
import { easeIn, easeInOut, motion } from 'framer-motion'
import { fadeUp } from '../Services/Services'

const Banner = () => {
  return (
    <>
        <section>
            <div className="container py-14 grid grid-cols-1  md:grid-cols-2 space-y-6 md:space-y-0 gap-12">
                {/* image */}
                <div>
                    <motion.img 
                        
                        initial={{opacity:0, x:-100, rotate:-180}}
                        animate={{opacity:1, x:0, rotate:0, }}
                        transition={{duration:0.4 , ease:'easeInOut' , delay:0.1}}
                    
                    src={Image} alt="headphones" className='w-[300px] md:w-[400px] mx-auto'/>
                </div>

                {/* text */}
                <div className='flex flex-col justify-center mx-auto'>
                    <div className='text-center md:text-left space-y-4 lg: max-w-[450px]'>
                        <motion.h1
                            variants={fadeUp(0.7)}
                            initial='hidden'
                            whileInView='show'
                            className='text-3xl lg:text-4xl font-semibold font-serif'>The Latest Headphones With The Latest Technology</motion.h1>
                        
                        <motion.p
                            variants={fadeUp(0.9)}
                            initial='hidden'
                            whileInView='show'
                            className='font-light'
                        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis incidunt!</motion.p>
                        <motion.button 
                            variants={fadeUp(0.7)}
                            initial='hidden'
                            whileInView='show'
                            className='border-2 py-2 px-6 border-[#446a6e] text-[black] rounded-md hover:bg-[#446a6e] hover:text-[white] shadow shadow-neutral-600  '>Shop Now</motion.button>
                    </div>
                </div>
            </div>
        </section>

    </>
  )
}

export default Banner