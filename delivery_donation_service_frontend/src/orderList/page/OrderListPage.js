import { useState } from 'react';
import OrderRadioButtons from '../../common/component/OrderRadioButtons';
import Order from '../component/Order';
import '../style/OrderListPage.scss';

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

  return (
    <>
      <div className="orderWraper">
        <OrderRadioButtons flag={flag} buttons={buttons} setFlag={setFlag} />
        <div className="orderListWrapper">
          <Order
            date="2023.07.24"
            state="픽업을 완료했어요"
            image="image/chicken.png"
            title="타코닭 타코야끼&닭강정"
            menu="싱글세트 16볼 (2가지 맛 + 콜라500ml)"
            price="6,900원"
          />
          <Order
            date="2023.07.24"
            state="픽업을 완료했어요"
            image="image/chicken.png"
            title="타코닭 타코야끼&닭강정"
            menu="싱글세트 16볼 (2가지 맛 + 콜라500ml)"
            price="6,900원"
          />
          <Order
            date="2023.07.24"
            state="픽업을 완료했어요"
            image="image/chicken.png"
            title="타코닭 타코야끼&닭강정"
            menu="싱글세트 16볼 (2가지 맛 + 콜라500ml)"
            price="6,900원"
          />
        </div>
      </div>
    </>
  );
};

export default OrderListPage;
