import React, { useState } from 'react'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


export const CreateBooks = () => {
  const[title,setTitle] = useState('');
  const[author,setAuthor] = useState('');
  const[publishYear,setPublishYear] = useState('');
  const[loading,setLoading] = useState('');
  const navigate = useNavigate();

  const handleSaveBook=()=>{
    const data = {
      title,
      author,
      publishYear
    };
    setLoading(true);
    axios
      .post('http://localhost:5555/books',data)
      .then(()=>{
        setLoading(false);
        navigate('/');
      })
      .catch((error)=>{
        setLoading(false);
        alert('an error happend please check the data');
      });
      
  };



  return (
    <div className='p-4' >
      <h1>create book</h1>
      {loading? <Spinner/> :''}
      <div className='my-4'>
        <label className='text-xl mr-4 text-gray-500' >title</label>
        <input type="text" placeholder='title' value={title} onChange={(e)=>{setTitle(e.target.value)}} className='border-2 border-r-amber-500 px-4 py-4 w-full ' />
        <input type="number" placeholder='pubyear' value={publishYear} onChange={(e)=>{setPublishYear(e.target.value)}} className='border-2 border-r-amber-500 px-4 py-4 w-full ' />
        <input type="text" placeholder='author' value={author} onChange={(e)=>{setAuthor(e.target.value)}} className='border-2 border-r-amber-500 px-4 py-4 w-full ' />
      </div> 
      <button onClick={handleSaveBook} >save</button>

    </div>
  )
}

export default CreateBooks
