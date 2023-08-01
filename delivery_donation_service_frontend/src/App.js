import { Route, Routes } from "react-router-dom";
import StoreList from "./storeList/page/storeList";
import Store from "./store/page/store";
import MenuDetail from "./menuDetail/page/menuDetail";
function App() {
  return (
      <Routes>
        <Route path="/" element={<StoreList />} />
        <Route path="/store" element={<Store />} />
        <Route path="/menuDetail" element={<MenuDetail />} />
      </Routes>
  );
}

export default App;
