import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './common/style/common.scss';

import Login from './Login/page/Login';
import DonationCartPage from './DonationCart/page/DonationCartPage';
import MainCartPage from './Cart/page/MainCartPage';
import MainPage from './main/page/MainPage';
import OrderDonator from './OrderDonator/page/OrderDonator';
import AlarmPage from './alarm/page/AlarmPage';
import OrderListPage from './orderList/page/OrderListPage';
import OrderRadioButtonsTest from './common/page/OrderRadioButtonsTest';
import StoreList from './storeList/page/storeList';
import StoreListDonater from './storeList/page/storeListDonater';
import StoreListFree from './storeList/page/storeListFree';
import StoreMain from './store/page/storeMain';
import StoreMainDonater from './store/page/storeMainDonater';
import StoreMainFree from './store/page/storeMainFree';
import MenuDetail from './store/page/menuDetail';
import MenuDetailDonater from './store/page/menuDetailDonater';
import OrderFreeDelivery from './OrderFreeDelivery/page/OrderFreeDelivery';
import OrderFreeTakeOut from './OrderFreeTakeOut/page/OrderFreeTakeOut';
import ScrollTop from './common/component/scrollTop';
import ReadyPage from './common/page/ReadyPage';
import DonationDetailPage from './orderList/page/DonationDetailPage';

function App() {
  return (
    <BrowserRouter>
      <ScrollTop /> {/*페이지 넘어갈 때 맨위로*/}
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/donationCart" element={<DonationCartPage />}></Route>
        <Route path="/cart" element={<MainCartPage />}></Route>
        <Route path="/orderDonator" element={<OrderDonator type="기부" />}></Route>
        <Route path="/orderFreeDelivery" element={<OrderFreeDelivery />}></Route>
        <Route path="/orderFreeTakeOut" element={<OrderFreeTakeOut />}></Route>
        <Route path="/" element={<MainPage />} />
        <Route path="/alarm" element={<AlarmPage />} />
        <Route path="/orderList" element={<OrderListPage />} />
        <Route path="/donationDetail" element={<DonationDetailPage />} />
        <Route path="/testOrderRadioButtons" element={<OrderRadioButtonsTest />} />
        <Route path="/storeList" element={<StoreList />} />
        <Route path="/storeListDonater" element={<StoreListDonater />} />
        <Route path="/storeListFree" element={<StoreListFree />} />
        <Route path="/storeMain" element={<StoreMain />} />
        <Route path="/storeMainDonater" element={<StoreMainDonater />} />
        <Route path="/storeMainFree" element={<StoreMainFree />} />
        <Route path="/menuDetail" element={<MenuDetail />} />
        <Route path="/menuDetailDonater" element={<MenuDetailDonater />} />
        <Route path="/ready" element={<ReadyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
