import React,{ useState } from "react";
import {Link} from 'react-router-dom';
import style from './Style.module.css';
function Men() {
  const [value, setValue] = useState(false);

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
        <Link to={'/man'} className={value ? style.underline : style.underline2}>MEN</Link>
        <div>
           {value && 
           (<>
           <div><ul className={style.position21}>
             <li><Link to={'#'}><b>TopWear</b></Link> </li>
             <li><Link to={'#'}>T-Shirt</Link> </li>
             <li><Link to={'#'}>Casual Shirts</Link> </li>
             <li><Link to={'#'}>Formal Shirts</Link> </li>
             <li><Link to={'#'}>SweatShirts</Link> </li>
             <li><Link to={'#'}>Sweaters</Link> </li>
             <li><Link to={'#'}>Jackets</Link> </li>
             <li><Link to={'#'}>Blazers & Coats</Link> </li>
             <li><Link to={'#'}>Suits</Link> </li>
             <li><Link to={'#'}>Rain Jackets</Link> </li>
             <li><Link to={'#'}>Indian & Festive Wear</Link> </li>
             <li><Link to={'#'}>Kurtas & Kurta Sets</Link> </li>
             <li><Link to={'#'}>Sherwanis</Link> </li>
             <li><Link to={'#'}>Nehru Jackets</Link> </li>
             <li><Link to={'#'}>Dhotis</Link> </li>
            </ul></div>
            <div><ul className={style.position22}>
             <li><Link to={'#'}><b>Bottomwear</b></Link> </li>
             <li><Link to={'#'}>Jeans</Link> </li>
             <li><Link to={'#'}>Casual Trousers</Link> </li>
             <li><Link to={'#'}>Formal Trousers</Link> </li>
             <li><Link to={'#'}>Shorts</Link> </li>
             <li><Link to={'#'}>Track Pants & Joggers</Link> </li><br />
             <li><Link to={'#'}><b>Innerwear & Sleepwear</b></Link> </li>
             <li><Link to={'#'}>Briefs & Trunks</Link> </li>
             <li><Link to={'#'}>Boxers</Link> </li>
             <li><Link to={'#'}>Vests</Link> </li>
             <li><Link to={'#'}>Sleepwear & Loungewear</Link> </li>
             <li><Link to={'#'}>Thermals</Link> </li>
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
             <li><Link to={'#'}><b>Personal Care & Grooming</b></Link> </li><br />
             <li><Link to={'#'}><b>Sunglasses & Frames</b></Link> </li><br />
             <li><Link to={'#'}><b>Watches</b></Link> </li>
            </ul></div>
           </>)}
        </div>
       </div>
  )
}

export default Men
