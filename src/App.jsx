import { useState } from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './Component/Navbar/Navbar'
import { UpdateFollower } from 'react-mouse-follower'
import Hero from './Component/Hero/Hero'
import Services from './Component/Services/Services'
import Banner from './Component/Banner/Banner'
import BannerText from './Component/Banner/BannerText'
import Blog from './Component/Blog/Blog'
import Footer from './Component/Footer/Footer'
import Main from './Component/Main/Main';
 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
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
            <Navbar /> 
        </UpdateFollower>
        <Routes>
            <Route path="/" element={<Main/>} />
            <Route path='/Blog' element={<Blog/>}/>
        </Routes>
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
          <Footer/>
        </UpdateFollower>
      </BrowserRouter>


        
        
      

    </>
  )
}

export default App
