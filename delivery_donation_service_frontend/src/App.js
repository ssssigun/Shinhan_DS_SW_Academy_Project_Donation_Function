import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Login/page/Login'
import DonationCart from './DonationCart/page/DonationCart'
import Cart from './Cart/page/Cart'
import '../src/common/style/common.scss'
import OrderDonator from './OrderDonator/page/OrderDonator'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/donationCart" element={<DonationCart />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/orderDonator" element={<OrderDonator type="기부" />}></Route>
          <Route path="/orderFreeDelivery" element={<OrderDonator type="기부" />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
