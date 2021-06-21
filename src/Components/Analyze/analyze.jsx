import React from 'react'
import './analyze.css'
import IphoneLandscape from '../../assets/iphone-landscape.png'


export default function Analyze() {


    return (
        <div className='analyze_container'>
            <div className="analyze_content">
                <h2>Suivez l'évolution des tendances et comprenez votre environnement</h2> 
                <div className="analyze_spec">
                    <div className="analyze_spec_para">
                        <p>A-t-il plus plu ce mois-ci ? La qualité de l'air intérieur est-elle bonne pendant votre sommeil ?</p>
                        <p>Observez les variations climatiques et celles de votre environnement intérieur grâce à l'historique des données.</p>
                    </div>
                    <div className="analyze_img">
                        <img src={IphoneLandscape} alt=""/>
                    </div>
                </div>    
            </div>
        </div>
    )
}