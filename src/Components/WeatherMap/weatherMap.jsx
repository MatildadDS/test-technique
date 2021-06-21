import React, { useRef } from 'react'
import './weatherMap.css'
import Logo from '../../assets/logo-netatmo.png'
import Chevron from '../../assets/down-chevron.png'
import Button from '../Button/button'


export default function WeatherMap() {

    const titleRef = useRef()

    function handleBackClick() {
        // Scroll back to the title element...
        titleRef.current.scrollIntoView({ behavior: 'smooth' })
    }
 

    return (
        <div className='weathermap_container'>
            <div className="weathermap_header">
                <img className="logo-netatmo" src={Logo} alt=""/>
            </div>
            <div className="weathermap_content">
                <h2 ref={titleRef} className='weathermap_title'>Suivez la météo en temps réel grâce aux données des <br/> stations météo de nos utilisateurs sur la WeatherMap !</h2> 
                <iframe allowtransparency="false" src="https://weathermap.netatmo.com/?zoom=4&type=temp&param=Filter&maplayer=Map&lat=49.97213833856489&lng=0.528304015383128&lang=undefined" title= "weather" width="1024" height="568" frameborder="0" scrolling="NO"></iframe>
                {/*<button onClick={handleBackClick}><img src={Chevron} alt=""/></button>*/}
            </div>

        </div>
    )
    
}