import OrderListHeader from '../component/OrderListHeader';
import '../style/DonationDetailPage.scss';

const DonationDetailPage = () => {
  return (
    <>
      <OrderListHeader backUrl="/orderList" state={{ flag: 1 }}>
        기부상세
      </OrderListHeader>
      <div className="donationDetailWrapper">
        <div className="donationDetailTitleWrapper">
          <div className="donationDetailTitle">BHC 홍대점</div>
          <div className="donationDetailMenus">뿌링클</div>
          <div className="donationDetailDate">기부일시: 2023년 08월 03일 오후 10:09</div>
        </div>
        <div className="donationDetailsContainer">
          <div className="donationDetailMenuContainer">
            <div className="donationDetailMenu">
              <div className="donationMenuAndAmount">뿌링클(수량 :1)</div>
              <div className="donationPriceForMenus">18,000원</div>
            </div>
            <div className="donationPriceForOne">· 단품가격: 18,000원</div>
          </div>
          <hr />
          <div className="donationTotalPriceWrapper">
            <div>총 결제금액</div>
            <div>18,000원</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DonationDetailPage;
