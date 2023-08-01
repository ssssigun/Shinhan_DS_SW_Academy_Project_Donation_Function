import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Login/page/Login'
import DonationCart from './DonationCart/page/DonationCart'
import '../src/common/style/common.scss'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/donationCart" element={<DonationCart />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
