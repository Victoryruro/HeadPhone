import { useState } from 'react'

import './App.css'
import Navbar from './Component/Navbar/Navbar'
import { UpdateFollower } from 'react-mouse-follower'
import Hero from './Component/Hero/Hero'
import Services from './Component/Services/Services'
import Banner from './Component/Banner/Banner'
import BannerText from './Component/Banner/BannerText'
import Blog from './Component/Blog/Blog'
import Footer from './Component/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

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
          <Navbar/>  
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
          <Blog/>
          <Footer/>
        </UpdateFollower>
        
        
      </main>        

    </>
  )
}

export default App
