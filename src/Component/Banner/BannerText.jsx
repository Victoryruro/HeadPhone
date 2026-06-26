import React from 'react'
import { UpdateFollower } from 'react-mouse-follower'

const BannerText = () => {
  return (
    <>
        <section className='py-12 text-center '>
            <div className='container mx-auto'>
                <div className=' bg-linear-to-t from-[#446a6e] to-gray-800/30
                    text-black rounded-3xl p-8 hover:scale-90 md:hover:scale-105 duration-500 hover:shadow-2xl '>
                    <UpdateFollower
                        mouseOptions={{
                            backgroundColor:'black',
                            zIndex:9999,
                            mixBlendMode:'screen',
                            scale:6,

                        }}
                    >
                        <p 
                        className='text-2xl font-bold font-serif leading-normal max-w-[700px] mx-auto'>Headphones With Good Quality, Duration And Affordable Price </p>
                    </UpdateFollower>
                    
                </div>
            </div>
        </section>
    </>
  )
}

export default BannerText