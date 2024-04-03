import React from 'react'
import './sidebar.css';
//import { SideBarData } from './sidebardata'

const sidebar = () => {
  return (
    <div className='sidebar'>
       
       <ul>
        {SideBarData.map((val, key)=> {
            return (
                <li key={key} onClick={()=> {window.location.pathname = val.link}}>
                  {" "}
                  <div>{val.icon}</div>{" "}
                  <div>
                    {val.title}
                  </div>
                </li>
            )
        })}
        </ul>
    </div>
  )
}

export default sidebar
