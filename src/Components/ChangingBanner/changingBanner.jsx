import React, {useState, useEffect} from 'react'
import './changingBanner.css'
import dataSlider from '../dataSlider'
import Landing1 from '../../assets/landing-1.jpeg'


export default function ChangingBanner() {

    const [slideQuote, setSlideQuote] = useState(0)


    useEffect(() => {
        const intervalID = setTimeout(() =>  {

            if(slideQuote !== dataSlider.length-1){
                setSlideQuote(slideQuote+1)
            } else {
                setSlideQuote(0)
            }
        }, 3000)

        return () => clearInterval(intervalID);
    }, [slideQuote]);
        

    return (
        <div className='changingBanner_container'>
                <img className="landing1" src={Landing1} alt=""/>
                <h2 className='changingBanner_content'>La Station Météo connectée pour <br/> <span> {dataSlider.map((obj, index) => {                  
                    return (
                        slideQuote === index ? 
                            <div key={obj.id}> 
                            {obj.title}
                            </div> : null
                    )
                })} </span></h2>        
        </div>
    )
}