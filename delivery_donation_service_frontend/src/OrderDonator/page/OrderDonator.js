import RadioButton from '../../common/component/RadioButton';
import React, { useState } from 'react';
import '../style/OrderDonator.scss';

const OrderDonator = ({ type }) => {
  const [selectedOption, setSelectedOption] = useState('option1'); // 초기 선택 옵션 설정
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value); // 라디오 버튼 선택 시, 상태 업데이트
  };
  return (
    <div className="OrderDonatorWrapper">
      <div className="orderStore">
        <div className="Type">기부예요</div>
        <div className="title">
          <div className="StoreName">대한냉면 마포점</div>
          <div className="MenuName">물냉면 외 1개</div>
        </div>
      </div>
      <div className="orderPrice">
        <div className="title">
          <div className="moneyTitle">결제금액</div>
          <div className="price">
            <div className="totalText">결제금액</div>
            <div className="totalMoney">17,000원</div>
          </div>
        </div>
      </div>
      <div className="orderMethod">
        <div className="methodTitle">결제수단</div>
        <div className="methodWrapper">
          <div className="doGetPay">
            <RadioButton
              checked={selectedOption === 'option1'}
              value="option1"
              onChange={handleOptionChange}
              labelStyle={{ fontSize: '16px' }}
            >
              doGetPay
            </RadioButton>
            <div className="picture">
              <img src="./image/payPicture.png"></img>
            </div>
          </div>
          <div className="radioButtonWithLable">
            <RadioButton>신용/체크카드 결제</RadioButton>
          </div>
        </div>
      </div>
      {/* 전체동의 컴포넌트? */}
    </div>
  );
};

export default OrderDonator;
