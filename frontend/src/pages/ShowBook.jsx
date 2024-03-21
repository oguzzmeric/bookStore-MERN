import React, { useState } from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import { useEffect } from 'react'


export const ShowBook = () => {
  const [book,setBook] = useState({});
  const [loading,setLoading] = useState(false);
  const {id} = useParams();
  
  useEffect(()=>{
    setLoading(true);
    axios
       .get(`http://localhost:5555/books/${id}`)
       .then((response)=>{
        setBook(response.data)
        setLoading(false);
       })
       .catch((error)=>{
        console.log(error);
       })
    },[])

  return (
    <div className='p-4' >
      <BackButton/>
      <h1 className='text-3xl my-4' >Show Book</h1>
      {loading ? (<Spinner/>) :(
        <div className='flex flex-col border-2 border-sky-500 rounded-xl'>
          <div className='my-4' >
            <span >{book._id}</span> 
            <br />
            <span >{book.title}</span>
            <br />
            <span>{book.author}</span>
          </div>
        </div>
      )}
    </div>
  )
}
export default ShowBook

  