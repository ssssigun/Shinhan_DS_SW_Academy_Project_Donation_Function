import '../style/Order.scss';
import { MdKeyboardArrowRight } from 'react-icons/md';

const Order = ({ date, state, image, title, menu, price, menuLength }) => {
  return (
    <>
      <div className="orderContainer">
        <div className="dateAndMenu">{date}</div>
        <div className="stateWrapper">{state}</div>
        <div className="detailContainer">
          <img src={image} alt="매장사진" />
          <div className="detailContent">
            <div className="detailTitleContainer">
              <div className="detailTitle">{title}</div>
              <MdKeyboardArrowRight size="24px" />
            </div>
            <div className="detailMenuContainer">
              <div className="detailMenu">{menu}</div>
              <div className="detailMenuLength">&nbsp;&nbsp;&nbsp;외 {menuLength - 1}</div>
            </div>
            <div className="detailPrice">{price}</div>
          </div>
        </div>

        <div className="orderDetailButtons">
          <div className="orderDetailButton">주문상세</div>
          <div className="orderDetailButton">재주문하기</div>
        </div>
      </div>
    </>
  );
};

export default Order;
