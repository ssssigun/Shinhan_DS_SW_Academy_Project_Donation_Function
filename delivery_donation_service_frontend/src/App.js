import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
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
import MenuDetailFree from './store/page/menuDetailFree';
import OrderFreeDelivery from './OrderFreeDelivery/page/OrderFreeDelivery';
import OrderFreeTakeOut from './OrderFreeTakeOut/page/OrderFreeTakeOut';
import ScrollTop from './common/component/scrollTop';
import ReadyPage from './common/page/ReadyPage';
import DonationDetailPage from './orderList/page/DonationDetailPage';
import DonationReceipt from './orderList/page/DonationReceipt';
import ErrorPage from './common/page/ErrorPage';
import PrivateRoute from './common/utils/PrivateRoute';
import isLogin from './common/utils/isLogin';
import OrderListPageFree from './orderList/page/OrderListPageFree';

function App() {
  return (
    <BrowserRouter>
      <ScrollTop /> {/*페이지 넘어갈 때 맨위로*/}
      <Routes>
        <Route path="/login" element={isLogin() ? <Navigate to="/" /> : <Login />}></Route>
        <Route
          path="/donationCart"
          element={
            <PrivateRoute>
              <DonationCartPage />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <MainCartPage />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/orderDonator"
          element={
            <PrivateRoute>
              <OrderDonator type="기부" />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/orderFreeDelivery"
          element={
            <PrivateRoute>
              <OrderFreeDelivery />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/orderFreeTakeOut"
          element={
            <PrivateRoute>
              <OrderFreeTakeOut />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <MainPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/alarm"
          element={
            <PrivateRoute>
              <AlarmPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/orderList"
          element={
            <PrivateRoute>
              {sessionStorage.getItem('certi') == "0" ? <OrderListPage /> : <OrderListPageFree />}
            </PrivateRoute>
          }
        />
        <Route
          path="/donationDetail"
          element={
            <PrivateRoute>
              <DonationDetailPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/testOrderRadioButtons"
          element={
            <PrivateRoute>
              <OrderRadioButtonsTest />
            </PrivateRoute>
          }
        />
        <Route
          path="/storeList"
          element={
            <PrivateRoute>
              <StoreList />
            </PrivateRoute>
          }
        />
        <Route
          path="/storeListDonater"
          element={
            <PrivateRoute>
              <StoreListDonater />
            </PrivateRoute>
          }
        />
        <Route
          path="/storeListFree"
          element={
            <PrivateRoute>
              <StoreListFree />
            </PrivateRoute>
          }
        />
        <Route
          path="/storeMain"
          element={
            <PrivateRoute>
              <StoreMain />
            </PrivateRoute>
          }
        />
        <Route
          path="/storeMainDonater"
          element={
            <PrivateRoute>
              <StoreMainDonater />
            </PrivateRoute>
          }
        />
        <Route
          path="/storeMainFree"
          element={
            <PrivateRoute>
              <StoreMainFree />
            </PrivateRoute>
          }
        />
        <Route
          path="/menuDetail"
          element={
            <PrivateRoute>
              <MenuDetail />
            </PrivateRoute>
          }
        />
        <Route
          path="/menuDetailDonater"
          element={
            <PrivateRoute>
              <MenuDetailDonater />
            </PrivateRoute>
          }
        />
        <Route
          path="/menuDetailFree"
          element={
            <PrivateRoute>
              <MenuDetailFree />
            </PrivateRoute>
          }
        />
        <Route
          path="/ready"
          element={
            <PrivateRoute>
              <ReadyPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/donationReceipt"
          element={
            <PrivateRoute>
              <DonationReceipt />
            </PrivateRoute>
          }
        />
        <Route element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
