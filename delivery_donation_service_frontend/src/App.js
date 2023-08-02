import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './common/style/common.scss';

import Login from './Login/page/Login';
import DonationCart from './DonationCart/page/DonationCart';
import Cart from './Cart/page/Cart';
import MainPage from './main/page/MainPage';
import OrderDonator from './OrderDonator/page/OrderDonator';
import AlarmPage from './alarm/page/AlarmPage';
import OrderListPage from './orderList/page/OrderListPage';
import OrderRadioButtonsTest from './common/page/OrderRadioButtonsTest';
import StoreList from './storeList/page/storeList';
import StoreMain from './store/page/storeMain';
import MenuDetail from './store/page/menuDetail';
import Store from './store/page/store';
import OrderFreeDelivery from './OrderFreeDelivery/page/OrderFreeDelivery';
import OrderFreeTakeOut from './OrderFreeTakeOut/page/OrderFreeTakeOut';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/donationCart" element={<DonationCart />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/orderDonator" element={<OrderDonator type="기부" />}></Route>
        <Route path="/orderFreeDelivery" element={<OrderFreeDelivery />}></Route>
        <Route path="/orderFreeTakeOut" element={<OrderFreeTakeOut />}></Route>
      </Routes>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
      <Routes>
        <Route path="/alarm" element={<AlarmPage />} />
      </Routes>
      <Routes>
        <Route path="/orderList" element={<OrderListPage />} />
      </Routes>
      <Routes>
        <Route path="/testOrderRadioButtons" element={<OrderRadioButtonsTest />} />
      </Routes>
      <Routes>
        <Route path="/storeList" element={<StoreList />} />
        <Route path="/store" element={<StoreMain />} />
        <Route path="/menuDetail" element={<MenuDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
