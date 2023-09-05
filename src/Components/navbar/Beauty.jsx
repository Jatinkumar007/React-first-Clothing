import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import style from './Style.module.css';
function Beauty() {
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
        <Link to={'/beauty'} className={value ? style.underline : style.underline2}>BEAUTY</Link>
        <div>
           {value && (<>
            <div><ul className={style.position21}>
            <li><Link to={'#'}><b>Makeup</b></Link> </li>
             <li><Link to={'#'}>Lipstick</Link> </li>
             <li><Link to={'#'}>Lip Gloss</Link> </li>
             <li><Link to={'#'}>Lip Liner</Link> </li>
             <li><Link to={'#'}>Mascara</Link> </li>
             <li><Link to={'#'}>Eyeliner</Link> </li>
             <li><Link to={'#'}>Kajal</Link> </li>
             <li><Link to={'#'}>EyeShadow</Link> </li>
             <li><Link to={'#'}>Foundation</Link> </li>
             <li><Link to={'#'}>Primer</Link> </li>
             <li><Link to={'#'}>Concealer</Link> </li>
             <li><Link to={'#'}>Compact</Link> </li>
             <li><Link to={'#'}>Nail Polish</Link> </li>
            </ul></div>
            <div><ul className={style.position22}>
            <li><Link to={'#'}><b>Skincare, Bath & Body</b></Link> </li>
             <li><Link to={'#'}>Face Moisturiser</Link> </li>
             <li><Link to={'#'}>Cleanser</Link> </li>
             <li><Link to={'#'}>Masks & Peel</Link> </li>
             <li><Link to={'#'}>Sunscreen</Link> </li>
             <li><Link to={'#'}>Serum</Link> </li>
             <li><Link to={'#'}>Face Wash</Link> </li>
             <li><Link to={'#'}>Eye Cream</Link> </li>
             <li><Link to={'#'}>Lip Balm</Link> </li>
             <li><Link to={'#'}>Body Lotion</Link> </li>
             <li><Link to={'#'}>Body Wash</Link> </li>
             <li><Link to={'#'}>Body Scrub</Link> </li>
             <li><Link to={'#'}>Hand Cream</Link> </li>
            </ul></div>
            <div><ul className={style.position23}>
            <li><Link to={'#'}><b>Haircare</b></Link> </li>
             <li><Link to={'#'}>Shampoo</Link> </li>
             <li><Link to={'#'}>Conditioner</Link> </li>
             <li><Link to={'#'}>Hair Cream</Link> </li>
             <li><Link to={'#'}>Hair Oil</Link> </li>
             <li><Link to={'#'}>Hair Gel</Link> </li>
             <li><Link to={'#'}>Hair Color</Link> </li>
             <li><Link to={'#'}>Hair Serum</Link> </li>
             <li><Link to={'#'}>Hair Accessory</Link> </li><br />
             <li><Link to={'#'}><b>Fragrances</b></Link> </li>
             <li><Link to={'#'}>Perfume</Link> </li>
             <li><Link to={'#'}>Deodorant</Link> </li>
             <li><Link to={'#'}>Body Mist</Link> </li>
            </ul></div>
           </>)}
        </div>
       </div>
  )
}

export default Beauty
