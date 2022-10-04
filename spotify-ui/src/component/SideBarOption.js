import React from 'react'
import "./SideBarOption.css"

const SideBarOption = ({title, Icon}) => {
  return (
    <div className='sidebar-option'>
        {Icon && <Icon className="icon"/>}
        {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    </div>
  )
}

export default SideBarOption