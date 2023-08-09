import { useEffect, useState } from 'react';
import { MdReceipt } from 'react-icons/md';
import OrderRadioButtons from '../../common/component/OrderRadioButtons';
import '../style/OrderListPage.scss';
import orderList from '../json/OrderList.json';
import ModalBottomSheet from '../../common/component/ModalBottomSheet';
import WideButton from '../../common/component/WideButton';
import Input from '../../common/component/Input';
import OrderListHeader from '../component/OrderListHeader';
import { useLocation } from 'react-router-dom';
import OrderList from '../component/OrderList';
import DonationList from '../component/DonationList';
import axios from 'axios';

const OrderListPage = () => {
  const userPk = 1;

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
  const [modalDisable, setModalDisable] = new useState(true);
  const [orders, setOrders] = new useState({});

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

  const location = useLocation();
  useEffect(() => {
    if (location.state !== null) {
      setFlag(location.state.state.flag);
    }
  }, []);

  useEffect(() => {
    selectOrders();
    console.log(orders);
  }, [flag]);

  // 주문 또는 기부 불러오기
  const selectOrders = () => {
    if (flag === 1) {
      axios
        .get(`/selectOrders?userPk=${userPk}`)
        .then((response) => {
          setOrders(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      axios
        .get(`/selectDonations?userPk=${userPk}`)
        .then((response) => {
          setOrders(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <>
      <OrderListHeader backUrl="/">주문내역</OrderListHeader>
      <div className="orderWrapper">
        <OrderRadioButtons flag={flag} buttons={buttons} setFlag={setFlag} />
        <div className="orderListWrapper">
          {flag === 0 && <OrderList orders={orders} />}
          {flag === 1 && <DonationList donations={orders} />}
        </div>
      </div>
      {flag === 1 && orderList.donations.length > 0 && (
        <div className="donationReceiptButton" onClick={(e) => showModal(e)}>
          <MdReceipt size="35px" color="#FFF" />
        </div>
      )}
      {modalDisable ? (
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
