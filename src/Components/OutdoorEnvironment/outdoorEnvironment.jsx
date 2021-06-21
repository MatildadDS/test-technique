import React from 'react'
import './outdoorEnvironment.css'
import Iphone from '../../assets/iphone-1.png'


export default function OutdoorEnvironment() {


    return (
        <div className='outdoorE_container'>
            <div className="outdoorE_examples">

                <div className="outdoorE_data_content">

                    <div className="outdoorE_first_section">
                        <h2 className='outdoorE_title'>Visualisez les données météo de votre capteur extérieur en temps réel sur votre smartphone</h2>

                        <div className="outdoorE_data_examples">
                            <div className="outdoorE_data_first">
                                <h4>TEMPÉRATURE</h4>
                                <p>20,9<span>°C</span></p>
                            </div>
                            <div className="outdoorE_data_first">
                                <h4>HUMIDITÉ</h4>
                                <p>59<span>%</span></p>
                            </div>
                            <div className="outdoorE_data_first">
                                <h4>POLLUTION</h4>
                                <p>27<span> (faible)</span></p>
                            </div>
                            <div className="outdoorE_data_first">
                                <h4>PRÉVISIONS MÉTÉO</h4>
                                <p>7 jours</p>
                            </div>
                            <div className="outdoorE_data_first">
                                <h4>PRESSION BAROMÈTRIQUE</h4>
                                <p>1003<span> mbar</span></p>
                            </div>
                        </div>
                    </div>

                
                    <div className="outdoorE_second_section">
                        <h2 className='outdoorE_title'>Un capteur intérieur pour mesurer en temps réel l'environnement de votre maison</h2>
                 
                        <div className="outdoorE_data_examples">
                            <div className="outdoorE_data_second">
                                <h4>TEMPÉRATURE</h4>
                                <p className="outdoorE_para">22,1 <span>°C</span> </p>
                            </div>
                            <div className="outdoorE_data_second">
                                <h4>HUMIDITÉ</h4>
                                <p className="outdoorE_para">68 <span>%</span> </p>
                            </div>
                            <div className="outdoorE_data_second">
                                <h4>SONOMÈTRE</h4>
                                <p className="outdoorE_para">58 <span>dB</span> </p>
                            </div>
                            <div className="outdoorE_data_second">
                                <h4>ALERTES VENTILATION</h4>
                                <p className="outdoorE_para">CO2</p>
                            </div>
                            <div className="outdoorE_data_second">
                                <h4>PRESSION BAROMÈTRIQUE</h4>
                                <p className="outdoorE_para">558 <span>ppm</span> </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="outdoorImg">
                    <img src={Iphone} alt=""/>
                </div>
            </div>   
            
        </div>
    )
}