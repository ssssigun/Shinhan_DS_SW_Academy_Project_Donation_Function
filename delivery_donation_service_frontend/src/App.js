import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './main/page/MainPage';
import './common/style/common.scss';
import AlarmPage from './alarm/page/AlarmPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
      <Routes>
        <Route path="/alarm" element={<AlarmPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
