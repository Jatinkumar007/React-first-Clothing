import React,{useState} from 'react'
import style from './Style.module.css';
import { Link } from 'react-router-dom';
function Studio() {
  const [value,setValue]=useState(false);
  let enterTimeoutId;
  let leaveTimeoutId;

  const handleMouseEnter = () => {
    clearTimeout(leaveTimeoutId); // Clear any pending leave timeout
    enterTimeoutId = setTimeout(() => {
      setValue(true);
    }, 300);
  };

  const handleMouseLeave = () => {
    clearTimeout(enterTimeoutId); // Clear any pending enter timeout
    leaveTimeoutId = setTimeout(() => {
      setValue(false);
    }, 300);
  };
  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <Link className={value ? style.underline : style.underline2}>STUDIO</Link>
        <div>
           {value && (<div className={style.position3}>
            <h2>Your Daily Inspiration for Everything fashion</h2>
            <img src="https://marketplace.canva.com/EAFED4mfw94/1/0/1600w/canva-yellow-white-modern-special-discount-banner-0J53SvmhoiY.jpg" alt="error" />
           </div>)}
        </div>
       </div>
  )
}

export default Studio
