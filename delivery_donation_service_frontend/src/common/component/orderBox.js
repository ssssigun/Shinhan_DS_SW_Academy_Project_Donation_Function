//하단에 주문 및 결제 컴포넌트
import "../style/orderBox.scss"

// text로 넣고 싶은 문구 넣으면 됩니다
// ex) <orderBox text="주문하기"/>
const orderBox = (props) => {
    return (
      <div className="orderBoxArea">
        <p className="orderBoxText">{props.text}</p>
      </div>
    );
  };
  export default orderBox;
  