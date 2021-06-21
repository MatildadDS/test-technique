import React from 'react'
import './community.css'
import Station from '../../assets/station-1.png'

export default function Community() {


    return (
        <div className='community_container'>
            <div className="community_image">
                <img className='station-netatmo' src={Station} alt=""/>
            </div>
            <div className="community_content">
                <h2 className='community_title'>Rejoignez la première communauté mondiale de Stations Météo</h2>
                <p classname='community_para1'>Chaque point sur la carte correspond à un utilisateur de Station Météo partageant ses données météo. Chacun peut ainsi consulter la météo en direct dans plus de 170 pays.</p>
                <p className='community_para2'>Avec la Station Météo Netatmo, faites partie de la communauté qui aide les gens à mieux planifier leurs journées.</p>
                <button>Acheter</button>
            </div>
        </div>
    )
}