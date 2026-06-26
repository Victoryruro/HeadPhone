import React, { useState } from 'react'
import headphone from '../../assets/headphone1.png'
import headphone1 from '../../assets/headphone2.png'
import headphone2 from '../../assets/headphone3.png'
import {FaWhatsapp} from 'react-icons/fa'
import {UpdateFollower} from 'react-mouse-follower' 
import {AnimatePresence, easeInOut, motion, scale} from 'framer-motion'

const fadeUp =(delay) =>{
  return{
    hidden:{
      opacity:0,
      y:100,
      scale:0.5,
    },
    show:{
      opacity:1,
      y:0,
      scale:1,
      transition:{
        duration:0.5,
        delay:delay,
        ease: easeInOut,
      },
    },
    exit:{
      opacity:0,
      y:50,
      scale:0.5,
      transition:{
        duration:0.5,
        ease: easeInOut,
      }

    }
  }
}

const headphoneData = [
  {
    id:1,
    image:headphone,
    title:"Wireless Headphone",
    subtitle:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam facere a est ipsum labore quisquam rerum excepturi fugit quas, asperiores ea iste, consequuntur nemo consectetur culpa voluptatem dolor similique quod.",
    price:"$100",
    modal:'Modal Brown',
    bgColor:'#8b5958',
  },
  {
    id:2,
    image:headphone1,
    title:"Wireless Headphone 2",
    subtitle:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam facere a est ipsum labore quisquam rerum excepturi fugit quas, asperiores ea iste, consequuntur nemo consectetur culpa voluptatem dolor similique quod.",
    price:"$150",
    modal:' Green',
    bgColor:'#638153',
  },,
  {
    id:3,
    image:headphone2,
    title:"Wireless Headphone 3",
    subtitle:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam facere a est ipsum labore quisquam rerum excepturi fugit quas, asperiores ea iste, consequuntur nemo consectetur culpa voluptatem dolor similique quod.",
    price:"$200",
    modal:'Ocean Blue',
    bgColor:'#5d818c',
  }
]

const Hero = () => {
  const [activeData, setActiveData] = useState(headphoneData[0])
  
  const handleActiveData =(data) =>{
    setActiveData(data);
  }

  return (
    <>
      <section className='brandDark text-white font'>
        <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[700px] ">
          {/* info */}
          <div className='flex flex-col justify-center py-14 md:py-0 xl:max-w-[500px]'>
            <div className='space-y-5 text-center md:text-left'>
              <AnimatePresence mode='wait'>
                <UpdateFollower
                  mouseOptions={{
                    backgroundColor:'whitesmoke',
                    zIndex:9999,
                    followSpeed:0.5,
                    rotate:720,
                    mixBlendMode:'difference',
                    scale:5,

                  }}
                >
                  <motion.h1 key={activeData.id} 
                    variants={fadeUp(0.2)}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    
                    className='text-3xl lg:text-6xl font-bold'>{activeData.title}</motion.h1>
                </UpdateFollower>
                
              </AnimatePresence> 
              <AnimatePresence mode='wait'>
                <motion.p  key={activeData.id} 
                    variants={fadeUp(0.3)}
                    initial="hidden"
                    animate="show"
                    exit="exit" 
                  className='text-sm leading-loose text-shadow-white/80'>{activeData.subtitle}
                </motion.p>
              </AnimatePresence>    

              <AnimatePresence mode='wait'>
                <UpdateFollower  
                  mouseOptions={{
                    backgroundColor:activeData.bgColor,
                    zIndex:9999,
                    followSpeed:0.5,
                    rotate:-720,
                    scale:2,
                    // radius:20,
                    backgroundElement:<div>
                      <img src={activeData.image}  />
                    </div>,

                  }}
                
                >
                  <motion.button key={activeData.id} 
                      variants={fadeUp(0.3)}
                      initial="hidden"
                      animate="show"
                      exit="exit"
                  
                  style={{ backgroundColor:activeData.bgColor}} 
                  className='px-4 py-2 inline-block font-normal rounded-sm'>
                    {/* {activeData.modal} */}
                    Buy And Listen
                  </motion.button>
                </UpdateFollower>
 
              </AnimatePresence>
 
              <div className='flex items-center justify-center md:justify-start gap-4 mt-24!'>
                <div className='w-20 h-[1px] bg-white'></div>
                <p className='uppercase text-sm'>Top Headphones for You</p>
                <div className='w-20 h-[1px] bg-white'></div>
              </div>
              {/* switcher */}
              <div className='grid grid-cols-3 gap-10 ' >
                {headphoneData.map((item) =>{
                  return(
                    <UpdateFollower 
                      mouseOptions={{
                        backgroundColor:item.bgColor,
                        zIndex:9999,
                        followSpeed:0.5,
                        scale:2,
                        text:'view Details',
                        textFontSize:'10px',
                        

                    }}
                    >
                      <div 
                        key={item.id} 
                        onClick={()=> handleActiveData(item)} className='grid grid-cols-2 place-items-center cursor-pointer'>
                        <div>
                          <img src={item.image} alt="headphone" className='w-[200px]' />
                        </div>
                        <div className='space-y-2'>
                          <p className='text-base font-bold'>{item.price}</p>
                          <p className='text-xs font-normal text-nowrap'>{item.modal}</p>  
                        </div>
                      </div>
                    </UpdateFollower>

                  )
                })

                }
              </div>

            </div>

          </div>
          {/* image */}
          <div className='flex flex-col justify-end items-center z-0'>
            <AnimatePresence mode='wait'>
                <motion.img  key={activeData.id} 
                    variants={fadeUp(0.3)}
                    initial={{opacity:0, scale:0.9, y:100}}
                    
                    transition={{duration:0.4, delay:0.2, ease:easeInOut}}
                    animate={{opacity:1, scale:1, y:0,}}
                    exit={{
                      opacity:0, scale:0.9 , y:100,
                      transition:{duration:0.2}
                    }} 
                    
                src={activeData.image} alt="" 
                className='w-75 md:w-100 xl:w-[550px] ' />
            </AnimatePresence>

          </div>
          {/* icon */}
          <div className='text-3xl text-white fixed bottom-10 right-10 hover:rotate-[360deg] duration-500 z-9999 mix-blend-difference'>
            <a href="">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </section>
        
    </>
  )
}

export default Hero