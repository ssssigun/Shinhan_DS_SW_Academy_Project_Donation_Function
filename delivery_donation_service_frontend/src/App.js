import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './main/page/MainPage';
import './common/style/common.scss';
import AlarmPage from './alarm/page/AlarmPage';
import OrderListPage from './orderList/page/OrderListPage';
import OrderRadioButtonsTest from './common/page/OrderRadioButtonsTest';

function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
