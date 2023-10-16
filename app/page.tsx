'use client';
import CarCard from "@/components/CarCard";
import CustomFilter from "@/components/CustomFilter";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import ShowMore from "@/components/ShowMore";
import { fuels, yearsOfProduction } from "@/constants";
import { fetchCards } from "@/utils";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  
  
  const [allCars, setAllCars] = useState([])
  const [loading, setLoading] = useState(false)
  const [manufacturer, setManufacturer] = useState('')
  const [model, setModel] = useState('')
  const [year, setYear] = useState(2022)
  const [fuel, setFuel] = useState('')
  const [limit, setLimit] = useState(10)

  const getCars =async () => {
    setLoading(true);
    try {
      const results = await fetchCards(
        {manufacturer: manufacturer || '',
        year: year || 2022,
        fuel: fuel || '',
        limit: limit || 10,
        model: model || '',}
      );
      setAllCars(results);
    } catch (error) {
      console.log(error);
      
    }finally{
      setLoading(false)
    }
    
  }

  useEffect(() => {
    console.log(fuel, year, manufacturer, model, limit);
    
   getCars();
  }, [manufacturer,model,year,fuel,limit])
  

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">

        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the car you might like</p>
        </div>

        <div className="home__filters">
          <SearchBar setManufacturer={setManufacturer} setModel={setModel}/>
          <div className="home__filter-container">
            <CustomFilter title='year' options={fuels} setFilters={setFuel}/>
            <CustomFilter title='fuel' options={yearsOfProduction} setFilter={setYear}/>
          </div>
        </div>

        {allCars.length > 0 ? 
          <section>
            <div className="home__cars-wrapper">  
            {allCars?.map((cars)=> <CarCard cars={cars}/>)}
            </div>
            {loading && (
              <div className="mt-16 w-full flex-center">
                <Image
                  src='/loader.svg'
                  height={40}
                  width={40}
                  alt="loader"
                  className="object-contain"
                />
              </div>
            )}
            <ShowMore pageNumber={limit /10}
            isNext={limit > allCars.length}
            setLimit={setLimit}
            />
          </section>
        : 
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">
              Opps, No Result
            </h2>
            <p>{allCars?.message}</p>
          </div>
        }

      </div>
    </main>
  )
}
