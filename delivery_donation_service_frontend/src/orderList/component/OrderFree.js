import '../style/Order.scss';
import { useNavigate } from 'react-router-dom';
import { MdKeyboardArrowRight } from 'react-icons/md';
import dayjs from 'dayjs';
import { useEffect } from 'react';

const OrderFree = ({ donation, store }) => {
  const navigate = useNavigate();

  useEffect(() => {
    console.log('donation', donation);
    console.log('store', store);
  });

  return (
    <>
      <div className="orderContainer">
        <div className="dateAndMenu">{dayjs(donation.orderDate).format('YYYY.MM.DD')}</div>
        <div className="stateWrapper">주문이 완료되었습니다.</div>
        <div className="detailContainer">
          <img src={store.storeImage} alt="매장사진" />
          <div className="detailContent">
            <div className="detailTitleContainer">
              <div className="detailTitle">{store.storeName}</div>
              <MdKeyboardArrowRight size="24px" />
            </div>
            <div className="detailMenuContainer">
              {/* <div className="detailMenu">{donation.orderDetails[0].menu.menuName}</div> */}
            </div>
          </div>
        </div>

        <div className="orderDetailButtons">
          <div
            className="orderDetailButton donationButton"
            onClick={() =>
              navigate('/donationDetail', {
                state: { donation: donation },
              })
            }
          >
            기부상세
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderFree;
