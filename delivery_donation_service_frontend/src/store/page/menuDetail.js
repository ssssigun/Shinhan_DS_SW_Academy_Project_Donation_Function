//scss 불러오기
import "../style/menuDetail.scss"
//컴포넌트 불러오기
import StoreForm from "../component/storeForm";
import OrderBox from "../../common/component/orderBox";
import UpDownButton from '../../common/component/UpDownButton'
//텍스트 라인 (가게 정보 및 메뉴)
const menuDetail = () => {
    return (
      <div>
        <StoreForm image={"/image/test.png"}>
          <p className="menuDetailTitle">
            투움바 치스타
          </p>
          <p className="menuDetailDetail">
            3단계 신라면 정도의 매콤 버터와 양파, 양송이를 함께 볶고 수제 크림소스와 파마산이 들어간 깊고 진한 치킨과 파스타
          </p>
          <div className="menuDetailPrice">
            <p>투움바 치스타</p>
            <p> 20,700원</p>
          </div>
          <hr className="menuDetailLine"/>
          <div className="menuDetailAmount">
            <p>수량</p>
            <UpDownButton></UpDownButton>
          </div>
        </StoreForm>
        {/* 주문하기 버튼 */}
        <OrderBox/>
      </div>
    );
  };
  export default menuDetail;
  