import { useState } from 'react'

import './App.css'
import Navbar from './Component/Navbar/Navbar'
import { UpdateFollower } from 'react-mouse-follower'
import Hero from './Component/Hero/Hero'
import Services from './Component/Services/Services'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main className='overflow-x-hidden'>
        <UpdateFollower 
          mouseOptions={
            {
              backgroundColor:'whitesmoke',
              zIndex:999,
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
              backgroundColor:'blanchedalmond',
              zIndex:999,
              followSpeed:1.5,
              // radius:20,
              scale:2,
              // mixBlendMode:'difference',
              
              
              
            }
          }
        >
          <Services/>
        </UpdateFollower>
        
        
      </main>        

    </>
  )
}

export default App
