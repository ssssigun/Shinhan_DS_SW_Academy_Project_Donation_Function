//하단에 주문 및 결제 컴포넌트
import "../style/orderBox.scss"

//모듈 불러오기
import { useNavigate } from "react-router-dom";

// text로 넣고 싶은 문구 넣으면 됩니다
// ex) <OrderBox text={"들어갈 문구"} nav={"/이동할 페이지 라우터"}/>
const OrderBox = (props) => {
  const navigate = useNavigate();
  // 장바구니로 메뉴 보내기
  function move(e){
    navigate(props.nav);
  }
    return (
      <div className="orderBoxArea" onClick={move}>
        <p className="orderBoxText">{props.text}</p>
      </div>
    );
  };
  export default OrderBox;
  