import React from 'react'
import './navbar.css'
import LogoVisualRoom from '../assets/Logo_VisualRoom.svg'
import IconPesquisa from '../assets/search_icon.svg'
import IconProfile from '../assets/profile_icon.svg'
import IconConfig from '../assets/gear_icon.svg'
import IconCalendario from '../assets/calendar_icon.svg'
import IconNotif from '../assets/bell_icon.svg'
import IconBarra from '../assets/barras_icon.svg'

const homepage = () => {
  return (
    <div className='navbar'>
      <div className='navbar_start'>
      <img src={IconBarra} alt="" className='Icon' id='BarraIcon' />
      <img src={LogoVisualRoom} alt="" className='logo'/>
      </div>

      <div className='barra-pesquisa'>
        <input type="text" placeholder='Procurar por algo'/>
        <img src={IconPesquisa} alt="" className='Icon'/>
      </div>

      <ul>
        <li><img src={IconNotif} alt="" className='Icon' /></li>
        <li><img src={IconCalendario} alt="" className='Icon' /></li>
        <li><img src={IconConfig} alt="" className='Icon' /></li>
        <li><img src={IconProfile} alt="" className='Icon' /></li>
      </ul>


    </div>
  )
}

export default homepage
