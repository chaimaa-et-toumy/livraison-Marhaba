import React from 'react'

function input(props) {
  return (
    <div className="form-wrapper">
        <input type={props.type} placeholder={props.placeholder} name={props.name} className={props.classInput} value={props.value} onChange={props.onChange} />
        <i className={props.classIcon}></i>
    </div>
      
  )
}

export default input