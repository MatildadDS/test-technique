import React, { forwardRef, useRef } from 'react'
import './button.css'
import Chevron from '../../assets/down-chevron.svg'

const Button = React.forwardRef((props, ref) => (
  <button 
   ref={ref} className="Button"> <img src={Chevron} alt=""/>
    {props.children}
  </button>
));

// Vous pouvez maintenant obtenir une ref directement attachée au bouton DOM :
const ref = React.createRef();
<Button ref={ref}></Button>;


export default Button;