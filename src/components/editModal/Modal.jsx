import React from "react";
import "./Modal.css";
import { toast } from "react-toastify";

const Modal = ({edit,setEdit}) => {
  const API_URL = "http://localhost:3001/users";

  const handleEdit = ()=>{
    fetch(`${API_URL}/${edit.id}`, {
        method:'PATCH',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify((edit))
    })
    .then((res)=>res.json())
    .then(()=>{
        setEdit(null)
    })
    .catch((err)=>console.log(err))

    toast.success("user edited successfully")
}

  return (
    <>
     
     <div className="modal_wrapper" onClick={()=>setEdit(null)} ></div>
        <div className="modal">
          <form onSubmit={(e)=>handleEdit(edit.id)}>
            <div className="form-group">
              <label>Name</label>
              <input value={edit.name} onChange={(e)=>setEdit({...edit,name:e.target.value})} type="text" placeholder="name" />
            </div>
            <div className="form-group">
              <label>age</label>
              <input value={edit.age} onChange={(e)=>setEdit({...edit,age:e.target.value})} type="number" placeholder="age" />
            </div> 
            <label>Gander</label>
            <div className="form-group_user">  
             <select value={edit.gander} onChange={(e)=>setEdit({...edit,gander:e.target.value})} name="gander" id="">
               <option value='male'>Male</option>
               <option value='female'>Female</option>
             </select>
            </div>
          
            <div className="form-group">
              <button className="btn btn-primary" type="submit">Save</button>
            </div>
          </form>
        </div>
      

    </>
  );
};

export default Modal;
