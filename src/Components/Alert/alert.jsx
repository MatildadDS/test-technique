import React from 'react'
import './alert.css'
import Ipad from '../../assets/ipad-1.png'


export default function Alert() {


    return (
        <div className='alert_container'>
            <div className="alert_content">
                <div className="alert_img">
                    <img src={Ipad} alt=""/>
                </div>
                <div className="alert_spec">
                    <h2>Soyez alerté en temps réel des changements de votre environnement</h2> 
                    <p>Créez des alertes personnalisées de température, de pluie, ou même de ventilation pour savoir quand vous devez aérer.</p>
                    <button>Acheter</button>
                </div>
            </div>
        </div>
    )
}