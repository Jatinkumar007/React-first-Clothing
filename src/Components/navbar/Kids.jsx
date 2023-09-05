import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import style from './Style.module.css';
function Kids() {
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
        <Link to={'/kid'} className={value ? style.underline : style.underline2}>KIDS</Link>
        <div>
           {value && 
           (<>
           <div><ul className={style.position21}>
             <li><Link to={'#'}><b>Boys Clothing</b></Link> </li>
             <li><Link to={'#'}>T-Shirt</Link> </li>
             <li><Link to={'#'}>Shirts</Link> </li>
             <li><Link to={'#'}>Shorts</Link> </li>
             <li><Link to={'#'}>Jeans</Link> </li>
             <li><Link to={'#'}>Trousers</Link> </li>
             <li><Link to={'#'}>Clothing Sets</Link> </li>
             <li><Link to={'#'}>Ethnic Wear</Link> </li>
             <li><Link to={'#'}>Track Pants & Pyjamas</Link> </li>
             <li><Link to={'#'}>Jacket, Sweater & Sweatshirts</Link> </li>
             <li><Link to={'#'}>Party Wear</Link> </li>
             <li><Link to={'#'}>Innerwear & Thermals</Link> </li>
             <li><Link to={'#'}>Nightwear & Loungewear</Link> </li>
             <li><Link to={'#'}>Value Packs</Link> </li>
            </ul></div>
            <div><ul className={style.position22}>
             <li><Link to={'#'}><b>Girls Clothing</b></Link> </li>
             <li><Link to={'#'}>Dresses</Link> </li>
             <li><Link to={'#'}>Top</Link> </li>
             <li><Link to={'#'}>Tshirts</Link> </li>
             <li><Link to={'#'}>Clothing Sets</Link> </li>
             <li><Link to={'#'}>Lehenga Choli</Link> </li>
             <li><Link to={'#'}>Kurta Sets</Link> </li>
             <li><Link to={'#'}>Party wear</Link> </li>
             <li><Link to={'#'}>Dungaress & Jumpsuits</Link> </li>
             <li><Link to={'#'}>Skits & shorts</Link> </li>
             <li><Link to={'#'}>Tights & Leggings</Link> </li>
             <li><Link to={'#'}>Jeans, Trousers, & Capris</Link></li>
             <li><Link to={'#'}>Jackets, Sweaters & Sweatshirts</Link> </li>
             <li><Link to={'#'}>Innerwear & Thermals</Link> </li>
             <li><Link to={'#'}>Nightwear & Loungewear</Link> </li>
             <li><Link to={'#'}>Value Packs</Link></li>
            </ul></div>
            <div><ul className={style.position23}>
             <li><Link to={'#'}><b>Footwear</b></Link> </li>
             <li><Link to={'#'}>Casual Shoes</Link> </li>
             <li><Link to={'#'}>Sports Shoes</Link> </li>
             <li><Link to={'#'}>Formal Shoes</Link> </li>
             <li><Link to={'#'}>Sheakers</Link> </li>
             <li><Link to={'#'}>Sandals & Floaters</Link> </li>
             <li><Link to={'#'}>Flip Flops</Link> </li>
             <li><Link to={'#'}>Socks</Link> </li><br />
             <li><Link to={'#'}><b>Toys & Games</b></Link> </li>
             <li><Link to={'#'}>Learning & Development</Link> </li>
             <li><Link to={'#'}>Activity Toys</Link></li>
             <li><Link to={'#'}>Soft Toys</Link> </li>
             <li><Link to={'#'}>Action Figure / Play set</Link> </li>
            </ul></div>
           </>)}
        </div>
       </div>
  )
}

export default Kids
