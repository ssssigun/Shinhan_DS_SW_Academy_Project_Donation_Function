import '../style/Order.scss';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { CiMenuKebab } from 'react-icons/ci';

const Order = ({ date, state, image, title, menu, price }) => {
  return (
    <>
      <div className="orderWrapper">
        <div className="dateAndMenu">
          {date}
          <CiMenuKebab onClick={() => console.log('클릭')} />
        </div>
        <div className="stateWrapper">{state}</div>
        <div className="detailContainer">
          <img src={image} alt="매장사진" />
          <div className="detailContent">
            <div className="detailTitleContainer">
              <div className="detailTitle">{title}</div>
              <MdKeyboardArrowRight size="24px" />
            </div>
            <div className="detailMenu">{menu}</div>
            <div className="detailPrice">{price}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
