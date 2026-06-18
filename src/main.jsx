import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { MouseFollower } from 'react-mouse-follower';
// import MouseFollower from "mouse-follower";
// import gsap from "gsap";

// MouseFollower.registerGSAP(gsap);
// const cursor = new MouseFollower();


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MouseFollower/>
    <App />
  </StrictMode>,
)
