import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import style from './Style.module.css';
function Homeliving() {
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
        <Link to={'/home&living'} className={value ? style.underline : style.underline2}>HOME&LIVING</Link>
        <div>
           {value &&
            (<>
            <div><ul className={style.position21}>
            <li><Link to={'#'}><b>Bed Linen & Furnishing</b></Link> </li>
             <li><Link to={'#'}>Bed Runners</Link> </li>
             <li><Link to={'#'}>Mattress Protectors</Link> </li>
             <li><Link to={'#'}>Bedsheets</Link> </li>
             <li><Link to={'#'}>Bedding Sets</Link> </li>
             <li><Link to={'#'}>Blankets & pillow Covers</Link> </li>
             <li><Link to={'#'}>Bed Covers</Link> </li>
             <li><Link to={'#'}>Diwan Sets</Link> </li>
             <li><Link to={'#'}>Chair Pads & Covers</Link> </li>
             <li><Link to={'#'}>Sofa Covers</Link> </li><br />
             <li><Link to={'#'}><b>Flooring</b></Link> </li>
             <li><Link to={'#'}>Floor Runners</Link> </li>
             <li><Link to={'#'}>Carpets</Link> </li>
             <li><Link to={'#'}>Floor Mats & Dhurries</Link> </li>
             <li><Link to={'#'}>Door Mats</Link> </li>
            </ul></div>
            <div><ul className={style.position22}>
            <li><Link to={'#'}><b>Bath</b></Link> </li>
             <li><Link to={'#'}>Bath Towels</Link> </li>
             <li><Link to={'#'}>Hand & Face Towels</Link> </li>
             <li><Link to={'#'}>Beach Towels</Link> </li>
             <li><Link to={'#'}>Towels Set</Link> </li>
             <li><Link to={'#'}>Bath Rugs</Link> </li>
             <li><Link to={'#'}>Bathroom Accessories</Link> </li>
             <li><Link to={'#'}>Shower Curtains</Link> </li><br />
             <li><Link to={'#'}><b>Floor Lamps</b></Link> </li>
             <li><Link to={'#'}>Ceiling Lamps</Link> </li>
             <li><Link to={'#'}>Table Lamps</Link> </li>
             <li><Link to={'#'}>Wall Lamps</Link> </li>
             <li><Link to={'#'}>Outdoor Lamps</Link> </li>
            </ul></div>
            <div><ul className={style.position23}>
            <li><Link to={'#'}><b>Home Decor</b></Link> </li>
             <li><Link to={'#'}>Plants & Planters</Link> </li>
             <li><Link to={'#'}>Aromas & Candles</Link> </li>
             <li><Link to={'#'}>Clocks</Link> </li>
             <li><Link to={'#'}>Mirrors</Link> </li>
             <li><Link to={'#'}>Wall Decor</Link> </li>
             <li><Link to={'#'}>Festive Decor</Link> </li>
             <li><Link to={'#'}>Pooja Essentials</Link> </li>
             <li><Link to={'#'}>Wall Shelves</Link> </li>
             <li><Link to={'#'}>Fountains</Link> </li>
             <li><Link to={'#'}>Showpieces & Vases</Link> </li>
             <li><Link to={'#'}>Ottoman</Link> </li><br />
             <li><Link to={'#'}><b>Cushions & Cushion Covers</b></Link> </li>
            </ul></div>
            </>)}
        </div>
       </div>
  )
}

export default Homeliving
