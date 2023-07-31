import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './main/page/MainPage';

function App() {
  return (
    <div id="root">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
