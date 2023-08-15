import { useEffect, useState } from 'react';
import { MdReceipt } from 'react-icons/md';
import OrderRadioButtons from '../../common/component/OrderRadioButtons';
import '../style/OrderListPage.scss';
import orderList from '../json/OrderList.json';
import ModalBottomSheet from '../../common/component/ModalBottomSheet';
import WideButton from '../../common/component/WideButton';
import Input from '../../common/component/Input';
import OrderListHeader from '../component/OrderListHeader';
import { useLocation, useNavigate } from 'react-router-dom';
import OrderList from '../component/OrderList';
import DonationList from '../component/DonationList';
import axios from 'axios';
import OrderFreeList from '../component/OrderFreeList';

const OrderListPageFree = () => {
  const userPk = sessionStorage.getItem('userPk');

  const buttons = [
    {
      flag: 0,
      name: '주문',
    },
    {
      flag: 1,
      name: '무료 식사',
    },
  ];

  const [flag, setFlag] = new useState(0);
  const [orders, setOrders] = new useState({});

  const location = useLocation();
  useEffect(() => {
    if (location.state !== null) {
      setFlag(location.state.state.flag);
    }
  }, []);

  useEffect(() => {
    selectOrders();
  }, [flag]);

  // 주문 또는 기부 불러오기
  const selectOrders = () => {
    if (flag === 1) {
      let ordersFree = [];
      axios
        .get(`/db/selectOrdersFree?userPk=${userPk}`)
        .then((response) => {
          ordersFree = response.data;
        })
        .then(() => {
          ordersFree.map((orderFree) => {
            axios
              .get(`/db/selectStoreForPk?storePk=${orderFree.storePk}`)
              .then((response) => {
                orderFree['store'] = response.data;
              })
              .catch((error) => {
                console.log(error);
              });
          });
        })
        .then(() => {
          setOrders(ordersFree);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      axios
        .get(`/db/selectOrders?userPk=${userPk}`)
        .then((response) => {
          console.log(response.data);
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
          {flag === 1 && <OrderFreeList donations={orders} />}
        </div>
      </div>
    </>
  );
};

export default OrderListPageFree;
