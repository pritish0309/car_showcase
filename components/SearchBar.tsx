'use client'
import React from 'react'
import SearchManufacturer from './SearchManufacturer';
import { useState } from "react";
import Image from 'next/image';
import { useRouter } from "next/navigation";


const SearchButton = ( { addClasses } : {addClasses : string}) => (
  <button type='submit' className={`-ml-3 z-10 ${addClasses}`}>
    <Image
      src='/magnifying-glass.svg'
      alt='search'
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
)

const SearchBar = ({setManufacturer, setModel}) => {
    const [searchManufacturer, setSearchManufacturer] = useState('')
    const [searchModel, setSearchModel] = useState('')
    const router = useRouter();
    
    const handleSearch = (e :React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (searchManufacturer === '' && searchModel === '') {
          return alert('Please fill data in search bar');
        }
        setModel(searchModel);
        setManufacturer(searchManufacturer);
    }
    
  return (
    <form className='searchbar' onSubmit={handleSearch}>
        <div className="searchbar__item">
            <SearchManufacturer 
            selected ={searchManufacturer}
            setSelected ={setSearchManufacturer}
            />
            <SearchButton addClasses="sm:hidden"/>
        </div>
        <div className="searchbar__item">
          <Image
            src='/model-icon.png'
            alt='modal'
            height={25}
            width={25}
            className='absolute w-[20px] h-[20px] ml-4'
          />
          <input
            type='text'
            name='model'
            value={searchModel}
            onChange={(e)=>setSearchModel(e.target.value)}
            className='searchbar__input'
            placeholder='Tiguan'
          />
          <SearchButton addClasses='sm:hidden'/>
        </div>
        <SearchButton addClasses='max-sm:hidden'/>

    </form>
  )
}

export default SearchBar
