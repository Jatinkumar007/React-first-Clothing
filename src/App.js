import Home from "./Components/Home";
import {Routes,Route} from 'react-router-dom'
import Login from "./Components/login/Login";
import OTP from './Components/login/OTP';
import Name from "./Components/login/Name";
import Main from "./Components/Main/Main";
import Man from "./Components/Main/Man";
import Woman from "./Components/Main/Woman";
import Kid from "./Components/Main/Kid";
import Main2 from "./Components/Main/Main2";
import HomeLiving from "./Components/Main/HomeLiving";
import Beautys from "./Components/Main/Beautys";
import Wishlist from "./Components/wishlist/Wishlist";
import Address from "./Components/wishlist/Address";
import Payment from "./Components/wishlist/Payment";

function App() {
  return (
    <div className="App">
      {/* <Home/> */}
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/otp" element={<OTP/>}></Route>
        <Route path="/name" element={<Name/>}/>
        <Route path="/main" element={<Main/>}/>
        <Route path="/man" element={<Man/>}/>
        <Route path="/woman" element={<Woman/>}/>
        <Route path="/kid" element={<Kid/>}/>
        <Route path="/beauty" element={<Beautys/>}/>
        <Route path="/home&living" element={<HomeLiving/>}/>
        <Route path="/main2" element={<Main2/>}/>
        <Route path="/wishlist" element={<Wishlist/>}/>
        <Route path="/address" element={<Address/>}/>
        <Route path="/payment" element={<Payment/>}/>
      </Routes>
    </div>
  );
}

export default App;
