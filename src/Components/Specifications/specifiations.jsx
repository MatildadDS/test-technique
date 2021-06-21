import React from 'react'
import './specifications.css'
import Icon1 from '../../assets/icon-1.png'
import Icon2 from '../../assets/icon-2.png'
import Icon3 from '../../assets/icon-3.png'


export default function Specifications() {


    return (
        <div className='specifications_container'>
            <div className="specifications_title_content">
                <h2 className='specifications_title'>Vos propres mesures météo sur votre <br/> smartphone avec la Station Météo Netatmo</h2> 
            </div>

            <div className="specifications_content">
                <div className="survey_content">                
                    <img className="survey_logo" src={Icon1} alt=""/>
                    <p>Accédez à vos données météo en temps réel sur votre smartphone</p>
                </div>
                <div className="survey_content">                
                    <img className="survey_logo" src={Icon2} alt=""/>
                    <p>Créez vos alertes personnalisées : gel, canicile, pluie, neige, orage...</p>
                </div>
                <div className="survey_content">                
                    <img className="survey_logo" src={Icon3} alt=""/>
                    <p>Observez passé, présent et futur. Surveillez l'évolution de vos données</p>
                </div>
            </div>
        </div>
    )
}