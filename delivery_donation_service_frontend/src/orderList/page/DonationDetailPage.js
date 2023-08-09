import { useLocation } from 'react-router-dom';
import OrderListHeader from '../component/OrderListHeader';
import '../style/DonationDetailPage.scss';
import dayjs from 'dayjs';

const DonationDetailPage = () => {
  const location = useLocation();
  const donation = location.state.donation;

  return (
    <>
      <OrderListHeader backUrl="/orderList" state={{ flag: 1 }}>
        기부상세
      </OrderListHeader>
      <div className="donationDetailWrapper">
        <div className="donationDetailTitleWrapper">
          <div className="donationDetailTitle">{donation.store.storeName}</div>
          <div className="donationDetailDate">
            기부일시: {dayjs(donation.orderDate).format('YYYY년 MM월 DD일 A HH시 mm분')}
          </div>
        </div>
        <div className="donationDetailsContainer">
          {donation.orderDetails.map((orderDetail, idx) => {
            return (
              <div className="donationDetailMenuContainer" key={idx}>
                <div className="donationDetailMenu">
                  <div className="donationMenuAndAmount">
                    {orderDetail.menu.menuName} (수량 :{orderDetail.amount})
                  </div>
                  <div className="donationPriceForMenus">
                    {(orderDetail.menu.menuPrice * orderDetail.amount).toLocaleString()}원
                  </div>
                </div>
                <div className="donationPriceForOne">· 단품가격: {orderDetail.menu.menuPrice.toLocaleString()}원</div>
              </div>
            );
          })}
          <hr />
          <div className="donationTotalPriceWrapper">
            <div>총 결제금액</div>
            <div>{donation.orderPrice.toLocaleString()}원</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DonationDetailPage;
