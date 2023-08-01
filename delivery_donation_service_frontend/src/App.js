import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './main/page/MainPage';
import './common/style/common.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
