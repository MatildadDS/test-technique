import React from 'react'
import './testimonialB.css'
import Instagram from '../../assets/instagram.jpeg'


export default function TestimonialBanner() {


    return (
        <div className='testimonial_container'>
                <img className="instagram" src={Instagram} alt=""/>
                <h2 className='testimonial_title'>Plus de <span>96%</span></h2> 
                <p>de nos utilisateurs recommandent la Station Météo Netatmo</p>
        </div>
    )
}