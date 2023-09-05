import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import style from "./Style.module.css"
function Women() {
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
        <Link to={'/woman'} className={value ? style.underline : style.underline2}>WOMEN</Link>
        <div>
           {value && (<>
            <div><ul className={style.position21}>
             <li><Link to={'#'}><b>Indian & Fusion Wear</b></Link> </li>
             <li><Link to={'#'}>Kurtas & Suits</Link> </li>
             <li><Link to={'#'}>Kurtis, Tunics & Tops</Link> </li>
             <li><Link to={'#'}>Sarees</Link> </li>
             <li><Link to={'#'}>Ethnic Wear</Link> </li>
             <li><Link to={'#'}>Leggings, Salwars & Churidars</Link> </li>
             <li><Link to={'#'}>Skirts & Palazzos</Link> </li>
             <li><Link to={'#'}>Dress materials</Link> </li>
             <li><Link to={'#'}>Lehenga Cholis</Link> </li>
             <li><Link to={'#'}>Dupattas & Shawls</Link> </li>
             <li><Link to={'#'}>Jackets</Link> </li><br />
             <li><Link to={'#'}><b>Belts, Scarves & More</b></Link> </li><br />
             <li><Link to={'#'}><b>Watches & Wearables</b></Link> </li>
            </ul></div>
            <div><ul className={style.position22}>
             <li><Link to={'#'}><b>Weatern Wear</b></Link> </li>
             <li><Link to={'#'}>Dresses</Link> </li>
             <li><Link to={'#'}>Tops</Link> </li>
             <li><Link to={'#'}>Tshirts</Link> </li>
             <li><Link to={'#'}>Jeans</Link> </li>
             <li><Link to={'#'}>Trousers & Capris</Link> </li>
             <li><Link to={'#'}>Shorts & Skirts</Link> </li>
             <li><Link to={'#'}>Co-ords</Link> </li>
             <li><Link to={'#'}>Playsuits</Link> </li>
             <li><Link to={'#'}>Jumpsuits</Link> </li>
             <li><Link to={'#'}>Shrugs</Link> </li>
             <li><Link to={'#'}>Sweaters & Sweatshirts</Link> </li>
             <li><Link to={'#'}>Jackets & Coats</Link> </li>
             <li><Link to={'#'}>Blazers & Waistcoats</Link> </li><br />
             <li><Link to={'#'}><b>Plus Size</b></Link> </li>
            </ul></div>
            <div><ul className={style.position23}>
             <li><Link to={'#'}><b>Maternity</b></Link> </li><br />
             <li><Link to={'#'}><b>Sunglasses & Frames</b></Link> </li><br />
             <li><Link to={'#'}><b>Footwear</b></Link> </li>
             <li><Link to={'#'}>Flats</Link> </li>
             <li><Link to={'#'}>Casual Shoes</Link> </li>
             <li><Link to={'#'}>Heels</Link> </li>
             <li><Link to={'#'}>Boots</Link> </li>
             <li><Link to={'#'}>Sports Shoes & Floaters</Link> </li><br />
             <li><Link to={'#'}><b>Sports & Active Wear</b></Link> </li>
             <li><Link to={'#'}>Clothing</Link> </li>
             <li><Link to={'#'}>Footwear</Link> </li>
             <li><Link to={'#'}>Sports Accessories</Link> </li>
             <li><Link to={'#'}>Sports Equipment</Link> </li>
            </ul></div>
           </>)}
        </div>
       </div>
  )
}

export default Women;
