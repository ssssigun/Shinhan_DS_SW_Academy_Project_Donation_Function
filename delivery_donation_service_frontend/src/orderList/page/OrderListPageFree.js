import React, { useEffect, useState } from 'react';
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
import OrderRadioButtonsFree from '../../common/component/OrderRadioButtonsFree';

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
  const [orders, setOrders] = new useState(null);

  // 주문 또는 기부 불러오기
  const selectOrders = async (flag) => {
    console.log('flag', flag);
    if (flag === 1) {
      await axios
        .get(`/db/selectOrdersFree?userPk=${userPk}`)
        .then((response) => {
          console.log(response.data);
          setOrders(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      await axios
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
  const location = useLocation();
  useEffect(() => {
    if (location.state !== null) {
      setFlag(location.state.state.flag);
    }
    console.log('useEffect', flag);
    selectOrders(flag);
  }, []);

  const orderRadioButtonsOnClcik = async (flag) => {
    console.log(flag);
    await setFlag(flag);
    await selectOrders(flag);
  };

  return (
    <>
      <OrderListHeader backUrl="/">주문내역</OrderListHeader>
      <div className="orderWrapper">
        <OrderRadioButtonsFree flag={flag} buttons={buttons} onClick={orderRadioButtonsOnClcik} />
        <div className="orderListWrapper" id="orderListWrapper">
          {flag === 0 && <OrderList orders={orders} />}
          {flag === 1 && <OrderFreeList donations={orders} />}
        </div>
      </div>
    </>
  );
};

export default OrderListPageFree;
