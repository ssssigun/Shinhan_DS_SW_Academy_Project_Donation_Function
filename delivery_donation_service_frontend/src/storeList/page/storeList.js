//컴포넌트 불러오기
import CategoryMenuBar from "../component/categoryMenuBar";
import SortOptionBar from "../component/sortOptionBar";
import Store from "../component/store";

// scss 불러오기
import "../../common/style/reset.scss"
import "../../common/style/common.scss"
import "../style/storeList.scss"
const StoreList = () => {
    return (
      
      <div id="wrapper">
        <h1>StoreList Test</h1>  {/* 페이지 식별용 */}
        <CategoryMenuBar/>
        <SortOptionBar/>
        <ul className="storeListWrapper">
          <li className="store"><Store/></li>
          <li className="store"><Store/></li>
          <li className="store"><Store/></li>
        </ul>
      </div>
    );
  };
  export default StoreList;
  