"use client"

import React from 'react'
import Image from 'next/image'
import CustomButton from './CustomButton'

const Hero = () => {
    const handleClick = () => {
        console.log('Clicked');
        
    }
  return (
    <div className='hero'>
      <div className="flex-1 pt-36 padding-x">
        <h1 className='hero__title'>Find ,book or rent the car</h1>
        <p className='hero__subtitle'>
            Streamline your car rental experience with our effort
        </p>
        <CustomButton 
        title="Explore Car"
        containerStyles = "bg-primary-blue text-white rounded-full mt-10"
        handleClick ={handleClick}
        btnType='submit'
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
            <Image src='/hero.png' alt='hero' fill className='object-contain'/>
        </div>
      <div className='hero__image-overlay'/>
      </div>
    </div>
  )
}

export default Hero
