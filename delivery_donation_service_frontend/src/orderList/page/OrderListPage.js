import { useState } from 'react';
import { MdReceipt } from 'react-icons/md';
import OrderRadioButtons from '../../common/component/OrderRadioButtons';
import Order from '../component/Order';
import '../style/OrderListPage.scss';
import orderList from '../json/OrderList.json';
import Donation from '../component/Donation';
import ModalBottomSheet from '../../common/component/ModalBottomSheet';
import WideButton from '../../common/component/WideButton';
import Input from '../../common/component/Input';
import HeaderWrapper from '../../common/component/HeaderWrapper';
import OrderListHeader from '../component/OrderListHeader';
import None from '../../common/component/None';

const OrderListPage = () => {
  const buttons = [
    {
      flag: 0,
      name: '주문',
    },
    {
      flag: 1,
      name: '기부',
    },
  ];

  const [flag, setFlag] = new useState(0);
  const [modalDiabled, setModalDisable] = new useState(true);

  const showModal = (e) => {
    document.body.style.overflow = 'hidden';
    setModalDisable(false);
  };

  const hideModal = (e) => {
    document.body.style.overflow = 'unset';
    setModalDisable(true);
  };

  const today = new Date();
  const numberOfDaysToMinus = 30;
  const startDate = today.setDate(today.getDate() - numberOfDaysToMinus);
  const startDateValue = new Date(startDate).toISOString().split('T')[0];
  const endDateValue = new Date().toISOString().split('T')[0];

  return (
    <>
      <OrderListHeader />
      <div className="orderWrapper">
        <OrderRadioButtons flag={flag} buttons={buttons} setFlag={setFlag} />
        <div className="orderListWrapper">
          {flag === 0 &&
            orderList.orders.length > 0 &&
            orderList.orders.map((order, idx) => {
              return (
                <Order
                  date={order.date}
                  state={order.state}
                  title={order.title}
                  image={order.image}
                  menu={order.menu}
                  price={order.price}
                  menuLength={order.menu.length}
                  key={idx}
                />
              );
            })}
          {flag === 0 && orderList.orders.length === 0 && (
            <None title="떵그러니..." image="image/PLI.png" height={`${window.innerHeight}`}>
              주문내역이 없어요.
              <br />
              땡겨요로 주문해보세요.
            </None>
          )}
          {flag === 1 &&
            orderList.donations.length > 0 &&
            orderList.donations.map((donation, idx) => {
              return (
                <Donation
                  date={donation.date}
                  state={donation.state}
                  title={donation.title}
                  image={donation.image}
                  menu={donation.menu}
                  price={donation.price}
                  menuLength={donation.menu.length}
                  key={idx}
                />
              );
            })}
          {flag === 1 && orderList.donations.length === 0 && (
            <None title="떵그러니..." image="image/PLI.png" height={`${window.innerHeight}`}>
              기부내역이 없어요.
              <br />
              땡겨요로 기부해보세요.
            </None>
          )}
        </div>
      </div>
      {flag === 1 && orderList.donations.length > 0 && (
        <div className="donationReceiptButton" onClick={(e) => showModal(e)}>
          <MdReceipt size="35px" color="#FFF" />
        </div>
      )}
      {modalDiabled ? (
        ''
      ) : (
        <ModalBottomSheet hideModal={hideModal}>
          기부영수증
          <form className="orderListPageDateWrapper">
            <div className="orderListPageDateInputWrapper">
              <Input type="date" defaultValue={startDateValue} />
              ~
              <Input type="date" defaultValue={endDateValue} />
            </div>
            <WideButton style={{ background: '#FB521B' }} text="출력하기" />
          </form>
        </ModalBottomSheet>
      )}
    </>
  );
};

export default OrderListPage;
