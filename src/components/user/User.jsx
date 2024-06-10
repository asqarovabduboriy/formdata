import React from 'react'
import './User.css'

const User = () => {
  return (
    <>
      <div className="container">
        <h1 className='text-center'>User create</h1>

        <form className='form_user'>
          <div className="form-group">
            <label >Name</label>
            <input type="text" className="form-control" id="inputName" placeholder="Name" />
          </div>

          <div className="form-group">
            <label>age</label>
            <input type="number" className="form-control" id="inputEmail" placeholder="age" />
          </div>

          <div className='form-group'>
             <label>img</label>
             <input type="text" className="form-control"  placeholder='img url' />
          </div>


          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </>
  )
}

export default User