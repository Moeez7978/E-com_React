import React from 'react'
import { NavLink } from 'react-router-dom'
import MorphButton from '/src/components/MorphButton'
import { motion } from 'framer-motion'

const HeroSection = () => {
    return (
        <>
            <div className="container w-fit mx-auto flex flex-col md:flex-row p-8 align-middle items-center gap-4" >
                <div className="container-data flex flex-col gap-8 flex-wrap w-fit">
                    <motion.div initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}>
                        <p className='uppercase text-gray-500 font-light mb-1'>Welcome to</p>
                        <h1
                            className="text-4xl font-bold">E-Commerece</h1>
                    </motion.div>
                    <motion.p initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ratione quis. Eligendi dolores eos est corporis ipsa ab. Adipisci pariatur qui ipsum ratione assumenda, laboriosam odit nostrum ea harum repellat!</motion.p>
                    <NavLink>
                        {/* <button className="w-auto bg-purple-500 text-white py-2 px-4 border-none uppercase align-middle cursor-pointer rounded-lg hover:bg-purple-800 hover:text-black">SHOP NOW</button> */}
                        <MorphButton>SHOP NOW</MorphButton>

                    </NavLink>
                </div>
                <motion.div initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }} className="container-visuals mt-8 p-6 w-fit">
                    <figure className='rounded-2xl hover:cursor-pointer'><img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="hero" className='rounded-2xl shadow-purple-200 shadow-2xl' /></figure>
                </motion.div>
            </div>
        </>
    )
}

export default HeroSection
