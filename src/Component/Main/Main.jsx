import React from 'react'
import { UpdateFollower } from 'react-mouse-follower'
import Hero from '../Hero/Hero'
import Banner from '../Banner/Banner'
import BannerText from '../Banner/BannerText'
import Services from '../Services/Services'


const Main = () => {
  return (
    <>
        <main className='overflow-x-hidden'>
            <UpdateFollower 
            mouseOptions={
                {
                backgroundColor:'white',
                zIndex:9999,
                followSpeed:1.5,
                radius:20,
                mixBlendMode:'difference',
                
                
                
                }
            }
            >
            
                <Hero/>
            </UpdateFollower>
            <UpdateFollower 
            mouseOptions={
                {
                backgroundColor:'#446a6e',
                zIndex:9999,
                followSpeed:1.5,
                // radius:20,
                scale:3,
                // mixBlendMode:'difference',
                
                
                
                }
            }
            >
            <Services/>
            <Banner/>
            <BannerText/>

            </UpdateFollower>
        
        
      </main>        
    </>
  )
}

export default Main