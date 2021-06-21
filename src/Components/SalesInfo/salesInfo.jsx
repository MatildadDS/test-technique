import React from 'react'
import './salesInfo.css'
import Station2 from '../../assets/station-2.jpeg'
import Icon4 from '../../assets/icon-4.png'
import Icon5 from '../../assets/icon-5.png'
import Icon6 from '../../assets/icon-6.png'


export default function SalesInfo() {


    return (
        <div className='sales_container'>

            <div className="sales_content">

                <div className="sales_first_section">
                    <img className="station2" src={Station2} alt=""/>
                    <div className="sales_infos">
                        <h2 className='sales_title'>Station Météo Intelligente</h2> 
                        <p>169,99 €</p>
                        <button>Acheter</button>
                        <span>En savoir plus</span>
                    </div>
                </div>

                <div className="sales_second_section">
                    <div className="sales_details">
                        <img src={Icon4} alt=""/>
                        <p>Utilisée par les services publics de prévisions météo</p>
                    </div>
                    <div className="sales_details">
                        <img src={Icon5} alt=""/>
                        <p>Livraison gratuite <br/> <span>Dès 50€</span> </p>
                    </div>
                    <div className="sales_details">
                        <img src={Icon6} alt=""/>
                        <p>Retour gratuit <br/> <span>60 jours pour changer d'avis</span> </p>
                    </div>
                </div>
            </div>
        </div>
    )
}