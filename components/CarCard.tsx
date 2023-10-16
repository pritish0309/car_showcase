'use client'
import { CardProps } from '@/types';
import { calculateCarRent, generateCarImageUrl } from '@/utils';
import React from 'react'
import { useState } from "react";
import Image from 'next/image';
import CustomButton from './CustomButton';
import CarDetails from './CarDetails';

interface CarCardProps {
    cars : CardProps
}


const CarCard = ( {cars} : CarCardProps) => {
    const { city_mpg ,year, make ,model, transmission, drive } = cars;
    const carRent = calculateCarRent(city_mpg, year)
    const [isOpen, IsSetOpen] = useState(false)

  return (
    <div className='car-card group'>
      <div className="car-card__content">
        <h2 className="car-card__content-title">
            {make} {model}
        </h2>
      </div>
      <p className='flex mt-6 text-[32px]'>
        <span className='self-start text-[14px]'>
            $</span>
            {carRent}
        <span className='self-end text-[14px]'>
            /day
        </span>
      </p>
      <div className="relative w-full h-40 my-3">
        <Image 
            src={generateCarImageUrl(cars)} alt='cars' priority className='object-contain' fill
        />
      </div>

      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-around text-gray">
            <div className="flex flex-col justify-center items-center gap-2">
            <Image 
                src='/steering-wheel.svg'
                width={20}
                height={20}
                alt='sterring wheel'
            />
            <p className='text-[14px]'>
                {transmission === 'a' ? 'Automatic' : 'Manual'}
            </p>
            </div>
        </div>
        <div className="flex group-hover:invisible w-full justify-around text-gray">
            <div className="flex flex-col justify-center items-center gap-2">
            <Image 
                src='/tire.svg'
                width={20}
                height={20}
                alt='sterring wheel'
            />
            <p className='text-[14px]'>
                {drive.toUpperCase()}
            </p>
            </div>
        </div>
        <div className="flex group-hover:invisible w-full justify-around text-gray">
            <div className="flex flex-col justify-center items-center gap-2">
            <Image 
                src='/steering-wheel.svg'
                width={20}
                height={20}
                alt='sterring wheel'
            />
            <p className='text-[14px]'>
                {city_mpg} MPG
            </p>
            </div>
        </div>

        <div className="car-card__btn-container">
            <CustomButton 
                title='View More'
                containerStyles='w-full py-[16px] rounded-full bg-primary-blue'
                textStyle = 'text-white text-[14px] leading-[17px] font-bold'
                rightIcon = '/right-arrow.svg'
                handleClick={ () => IsSetOpen(true)}
            />
        </div>

        <CarDetails cars={cars} isOpen={isOpen} closeModal={()=> IsSetOpen(false)}/>
      </div>
    </div>
  )
}

export default CarCard
