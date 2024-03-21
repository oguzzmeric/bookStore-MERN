import React, { useState } from 'react'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import axios from 'axios'
import { useNavigate,useParams } from 'react-router-dom'


export const DeleteBook = () => {
  const[loading,setLoading] = useState(false);
  const navigate = useNavigate();
  const {id} = useParams();
  const handleDeleteBook = ()=>{
    setLoading(true);
    axios
    .delete(`http://localhost:5555/books/${id}`)
    .then(()=>{
      setLoading(false);
      navigate('/');
    })
    .catch((error)=>{
      setLoading(false)
      console.log(error);
      alert('problem happend');
    })
  }


  return (
    <div>
      <BackButton/>
      <h2>r u sure about to delete book</h2>
      <button className='bg-red-600 text-white' onClick={handleDeleteBook} >yes i am</button>

    </div>
  )
}
export default DeleteBook

