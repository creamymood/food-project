import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [places, setPlaces] = useState([])

  useEffect(()=>{

    const fetchPlaces = async() => {
      try{
        const res = await fetch('http://localhost:3000/places')
        const data = await res.json()
        setPlaces(data.places)
  
      }
      catch (error) {
        console.log(error)
      }
    }

    fetchPlaces();
  },[])
  

  return (
    <>
      {places.map((place)=> (
        <>
        <img src= {`http://localhost:3000/${place.image.src}`} alt="이미지가 없습니다." key={place} />
        <li>{place.title}</li>
        </>
      ))

      }
    </>
  )
}

export default App
