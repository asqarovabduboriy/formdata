import React,{useState,useEffect} from 'react'
import './Product.css'
import axios from 'axios'
import male from "../../assets/imgs/male-avatar-boy-face-man-user-9.svg";
import female from "../../assets/imgs/female-avatar-girl-face-woman-user-2.svg";
import Modal from '../editModal/Modal';

const Product = () => {
    const API_URL = 'http://localhost:3001/users'
    const [data,setData] = useState(null)
    const [reload,setReload] = useState(false)
    const [edit,setEdit] = useState(null)

    useEffect(()=>{
    
        // axios
        // .get(API_URL)
        // .then((res)=>setData(res.data))
        // .catch((err)=>console.log(err))

        fetch(API_URL)
        .then((res)=>res.json())
        .then((data)=>setData(data))
        .catch((err)=>console.log(err))

    },[reload])

    const handleDelete = (id)=>{
        // axios
        // .delete(`${API_URL}/${id}`)
        // .then((res)=>{
        //     setReload(p=>!p)
        // })
        // .catch((err)=>console.log(err))

        if (window.confirm("Are you sure you want to delete this user?")) {
            fetch(`${API_URL}/${id}`,{
            method:'DELETE'
        })
        .then((res)=>res.json())
        .then((data)=>setReload(p=>!p))
        .catch((err)=>console.log(err))
        }
        
    }





    let user = data?.map((user)=>(
        <div className="card" key={user.id}>
            <div className="card_img">
                <img src={user.gander === "male" ? male : female} alt="" />
            </div>
            <div className='card_text'>
                 <h2>Name:{user.name}</h2>    
                 <p>Age:{user.age}</p>
            </div>
            <div className='btn_container'>
                <button onClick={()=>handleDelete(user.id)} className='button_delete'>Delete</button>
                <button onClick={()=>setEdit(user)} className='button_edit'>Edit</button>
            </div>
        </div>
    ))
  return (

    <>
     <div className="container">
             <div className='card_container'>
                 {user} 
             </div>
             {
                edit ?  <Modal reload={reload} setReload={setReload} edit={edit} setEdit={setEdit}/> : null
             }
     </div>
    </>
  )
}

export default Product