import React from 'react'
import blogImg from '../../assets/blog2.jpg'
import { UpdateFollower } from 'react-mouse-follower'
import { motion } from 'framer-motion'
import Banner from '../Banner/Banner'
import BannerText from '../Banner/BannerText'

const blogData =[
    {
        id:1,
        title :'Guidelines To Buy Your Headset',
        desc:'Lorem ipsum dolor sit amet consectetur adispisci elit. recusander iusto',
        link:'#',
        img: blogImg,

    },
    {
        id:2,
        title :'Making Headset and Accessories last better',
        desc:'Lorem ipsum dolor sit amet consectetur adispisci elit. recusander iusto',
        link:'#',
        img: blogImg,

    },
    {
        id:3,
        title :'Pros and cons of Headset Accessories',
        desc:'Lorem ipsum dolor sit amet consectetur adispisci elit. recusander iusto',
        link:'#',
        img: blogImg,

    },
    {
        id:4,
        title :'Making Headset and Accessories last better',
        desc:'Lorem ipsum dolor sit amet consectetur adispisci elit. recusander iusto',
        link:'#',
        img: blogImg,

    },
    {
        id:5,
        title :'Making Headset and Accessories last better',
        desc:'Lorem ipsum dolor sit amet consectetur adispisci elit. recusander iusto',
        link:'#',
        img: blogImg,

    },
    {
        id:6,
        title :'Making Headset and Accessories last better',
        desc:'Lorem ipsum dolor sit amet consectetur adispisci elit. recusander iusto',
        link:'#',
        img: blogImg,

    },

]

const Blog = () => {
  return (
    <>
       
        <section className='bg-gray-100 p-2'>
            <div className="container py-14">
                <h1 className='text-3xl font-bold text-center pb-8 font-serif'>Blog</h1>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                {blogData.map((data) =>{
                    return (
                    <UpdateFollower
                        mouseOptions={{
                        backgroundColor:"black",
                        zIndex:9999,
                        followSpeed:0.5,
                        scale:4,
                        text:'Read',
                        textFontSize:'3px',
                        

                    }}
                    >
                        <div className='flex flex-col items-center gap-6 justify-center p-5 max-w-[400px] mx-auto shadow-lg rounded-md bg-white hover:-translate-y-4 duration-300'>
                            <img src={data.img} alt="blog" />
                            <div className='space-y-2'>
                                <h1 className='text-xl font-bold line-clamp-1'>
                                    {data.title}
                                </h1>
                                <p className='line-clamp-2'>
                                    {data.desc}
                                </p>

                            </div>
                        </div>                        
                    </UpdateFollower>)

                })

                }

            </div>

        </section>
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
            
            <Banner/>
            <BannerText/>

        </UpdateFollower>    
    </>
  )
}

export default Blog