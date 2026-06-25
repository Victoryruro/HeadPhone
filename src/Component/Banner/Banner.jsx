import React from 'react'
import Image from "../../assets/headphone3.png"

const Banner = () => {
  return (
    <>
        <section>
            <div className="container py-14 grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 gap-12">
                {/* image */}
                <div>
                    <img src={Image} alt="headphones" className='w-[300px] md:w-[400px] '/>
                </div>

                {/* text */}
                <div className='flex flex-col justify-center'>
                    <div className='text-center md:text-left space-y-4 lg: max-w-[450px]'>
                        <h1 className='text-3xl lg:text-4xl font-semibold font-serif'>The Latest Headphones With The Latest Technology</h1>
                        
                        <p
                            className=''
                        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis incidunt!</p>
                        <button>Shop Now</button>
                    </div>
                </div>
            </div>
        </section>

    </>
  )
}

export default Banner