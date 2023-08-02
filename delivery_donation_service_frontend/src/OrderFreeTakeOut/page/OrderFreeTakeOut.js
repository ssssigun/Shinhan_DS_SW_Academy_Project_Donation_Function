import Input from '../../common/component/Input';
import SendingWarm from '../../common/component/SendingWarm';
import Terms from '../../common/component/Terms';
import '../style/OrderFreeTakeOut.scss';
const OrderFreeTakeOut = ({}) => {
  return (
    <div className="OrderFreeTakeOutWrapper">
      <div className="orderStore">
        <div className="Type">포장주문이에요</div>
        <div className="title">
          <div className="StoreName">대한냉면 마포점</div>
          <div className="MenuName">물냉면 1개</div>
        </div>
        <div className="addressWrapper">
          <div className="text">가게주소</div>
          <div className="addrWrap">
            <div className="addr">서울특별시 마포구 동교로 225 (연남동)</div>
          </div>
        </div>

        <hr></hr>
        <div className="tel">
          <div className="text">010-1234-5678</div>
          <div className="checkButtonWithLabel">
            <label>
              {/* <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} /> */}
              <span>이 박스를 체크하세요(안심번호)</span>
              <input type="checkbox"></input>
            </label>
          </div>
        </div>
      </div>
      <SendingWarm></SendingWarm>
      <Terms></Terms>
    </div>
  );
};
export default OrderFreeTakeOut;
