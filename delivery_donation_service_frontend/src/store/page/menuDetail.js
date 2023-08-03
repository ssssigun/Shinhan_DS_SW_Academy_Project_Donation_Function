//scss 불러오기
import "../style/menuDetail.scss"
//컴포넌트 불러오기
import StoreForm from "../component/storeForm";
import OrderBox from "../../common/component/orderBox";
import UpDownButton from '../../common/component/UpDownButton'


import { useLocation } from 'react-router-dom';

//텍스트 라인 (가게 정보 및 메뉴)
const MenuDetail = () => {
  let location = useLocation();
    return (
      <div>
        <StoreForm image={location.state.image}>
          <p className="menuDetailTitle">
            {location.state.title}
          </p>
          <p className="menuDetailDetail">
            {location.state.explain}
          </p>
          <div className="menuDetailPrice">
            <p>{location.state.title}</p>
            <p> {location.state.price}</p>
          </div>
          <hr className="menuDetailLine"/>
          <div className="menuDetailAmount">
            <p>수량</p>
            <UpDownButton></UpDownButton>
          </div>
        </StoreForm>
        {/* 주문하기 버튼 */}
        <OrderBox text={"주문하기"}/>
      </div>
    );
  };
  export default MenuDetail;
  