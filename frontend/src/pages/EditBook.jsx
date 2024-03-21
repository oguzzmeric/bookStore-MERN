import React, { useState,useEffect } from 'react'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import axios from 'axios'
import { useNavigate,useParams } from 'react-router-dom'


export const EditBook = () => {
  const[title,setTitle] = useState('');
  const[author,setAuthor] = useState('');
  const[publishYear,setPublishYear] = useState('');
  const[loading,setLoading] = useState('');
  const navigate = useNavigate();
  const{id} = useParams();
  useEffect(()=>{
    setLoading(true);
    axios.get(`http://localhost:5555/books/${id}`)
    .then((response)=>{
      setAuthor(response.data.author)
      setPublishYear(response.data.publishYear)
      setTitle(response.data.title)
      setLoading(false)
    }).catch((error)=>{
      setLoading(false);
      console.log(error);
      alert('error has been check the data');

    })
  },[])

  const handleEditBook=()=>{
    const data = {
      title,
      author,
      publishYear
    };
    setLoading(true);
    axios
      .put(`http://localhost:5555/books/${id}`,data)
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
      <h1>edit book</h1>
      {loading? <Spinner/> :''}
      <div className='my-4'>
        <label className='text-xl mr-4 text-gray-500' >title</label>
        <input type="text" placeholder='title' value={title} onChange={(e)=>{setTitle(e.target.value)}} className='border-2 border-r-amber-500 px-4 py-4 w-full ' />
        <input type="number" placeholder='pubyear' value={publishYear} onChange={(e)=>{setPublishYear(e.target.value)}} className='border-2 border-r-amber-500 px-4 py-4 w-full ' />
        <input type="text" placeholder='author' value={author} onChange={(e)=>{setAuthor(e.target.value)}} className='border-2 border-r-amber-500 px-4 py-4 w-full ' />
      </div> 
      <button onClick={handleEditBook} >save</button>

    </div>
  )
}

export default EditBook
