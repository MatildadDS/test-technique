import React from 'react'
import './footer.css'
import Logo from '../../assets/logo-netatmo.png'
import Legrand from '../../assets/legrand.svg'

export default function Footer() {


    return (
        <div className='footer_container'>
            <div className="footer_content">
                <img className="logo-netatmo" src={Logo} alt=""/>
                <img className="logo-legrand" src={Legrand} alt=""/>
            </div>
        </div>
    )
}