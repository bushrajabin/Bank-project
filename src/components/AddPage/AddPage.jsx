import React from 'react'
import "./AddPage.css"


function AddPage() {

  const clickForAdd=()=>{
    alert("hiiii")
  }
  return (
    <div className='addButton'>
   <button onClick={clickForAdd}>+</button>
    </div>
  )
}

export default AddPage