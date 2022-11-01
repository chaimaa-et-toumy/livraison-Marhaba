import React from 'react'

function input(props) {
  return (
    <div className="form-wrapper">
        <input type={props.type} placeholder={props.placeholder} className={props.classInput}/>
        <i className={props.classIcon}></i>
    </div>
      
  )
}

export default input