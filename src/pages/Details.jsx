import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Navbar from '../components/Navbar'

function Details() {
  const {id} = useParams( )
  console.log(id)
  const [character, setCharacter] = useState([])

  useEffect(() => {
    const {data} = axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(res => setCharacter(res.data))
  }, [])
  
  console.log(character)
  

  return (
    <>
    <Navbar />
    <div className='text-center mt-16'>
      <img src={character.image} className='m-auto rounded-2xl ' />
      <h1 className='text-5xl font-bold mt-5 '>{character?.name}</h1>
      <h1 className='text-3xl  mt-4'>Species: {character?.species}</h1>
      <h1 className='text-2xl mt-2'>Gender: {character?.gender}</h1>
      <h1 className='text-2xl mt-2'>Status: {character?.status}</h1>
      <h1 className='text-2xl mt-2 underline'>{character?.type}</h1>
      <h1 className='text-2xl mt-2'>Location: {character?.location?.name}</h1>
      
    </div>
    </>
  )
}

export default Details