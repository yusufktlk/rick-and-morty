import axios from 'axios'
import { useEffect, useState } from 'react' 
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'


function Home() {
  const navigate = useNavigate()
  const [characters, setCharacters] = useState([])
  const [count, setCount] = useState(1)
  
  useEffect(() => {
    const {data} = axios.get(`https://rickandmortyapi.com/api/character/?page=${count}`)
    .then(res => setCharacters(res.data.results))
    
  
  }, [ileri,geri])
  
 
  function ileri() {
    setCount(count + 1)
    
  }
  function geri() {
    if (count >1) {
      setCount(count - 1)
    }
    
  }


  return (
    <>
    <Navbar />
    <div className='grid grid-cols-2 sm:grid-cols-3 mg:grid-cols-4 mt-12 lg:grid-cols-5'>
        {
          characters.map((character, id) => (
            <div key={id} className='text-center max-h-36 ' onClick={() => navigate(`details/${character?.id}`)}>
              <img className='w-12 lg:w-28 rounded-xl m-auto cursor-pointer hover:scale-90 transition duration-500' src={character.image} />
              <h1 className='font-bold text-xs lg:text-lg'>{character.name}</h1>
            </div>
          ))
        }
    </div>

    <div className='flex justify-between text-3xl font-bold mt-8 lg:mt-10 underline'>
      <button className='ml-5 md:ml-36 lg:ml-24' onClick={() => geri()}>Previous</button>
      <button className='mr-5 md:mr-36 lg:mr-24' onClick={()  => ileri()}>Next</button>
    </div>
    
    </>
  )
}

export default Home
