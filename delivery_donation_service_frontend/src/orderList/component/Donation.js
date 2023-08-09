import '../style/Order.scss';
import { useNavigate } from 'react-router-dom';
import { MdKeyboardArrowRight } from 'react-icons/md';
import dayjs from 'dayjs';

const Donation = ({ donation }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="orderContainer">
        <div className="dateAndMenu">{dayjs(donation.orderDate).format('YYYY.MM.DD')}</div>
        <div className="stateWrapper">기부가 완료되었습니다.</div>
        <div className="detailContainer">
          <img src={donation.store.storeImage} alt="매장사진" />
          <div className="detailContent">
            <div className="detailTitleContainer">
              <div className="detailTitle">{donation.store.storeName}</div>
              <MdKeyboardArrowRight size="24px" />
            </div>
            <div className="detailMenuContainer">
              <div className="detailMenu">{donation.orderDetails[0].menu.menuName}</div>
              <div className="detailMenuLength">&nbsp;&nbsp;&nbsp;외 {donation.orderDetails.length - 1}</div>
            </div>
            <div className="detailPrice">{donation.orderPrice.toLocaleString()}</div>
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

export default Donation;
