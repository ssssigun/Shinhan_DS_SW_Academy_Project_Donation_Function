import { Children } from 'react';
import Input from '../../common/component/Input';
import SendingWarm from '../../common/component/SendingWarm';
import '../style/OrderFreeDelivery.scss';
import React, { useState } from 'react';
import Terms from '../../common/component/Terms';
import Request from '../../common/component/Request';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

const OrderFreeDelivery = ({ children, checked, onChange }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (checked) => {
    setIsChecked(checked);
  };
  return (
    <div className="OrderFreeDeliveryWrapper">
      <div className="orderStore">
        <div className="Type">배달주문이에요</div>
        <div className="title">
          <div className="StoreName">대한냉면 마포점</div>
          <div className="MenuName">물냉면 1개</div>
        </div>
        <div className="addressWrapper">
          <div className="text">배달주소</div>
          <div className="addrWrap">
            <div className="addr">서울특별시 마포구 동교로 225 (연남동)</div>
          </div>
        </div>
        <Input placeholder="상세주소를 입력하세요"></Input>
        <hr></hr>
        <div className="tel">
          <div className="text">010-1234-5678</div>
          <div className="checkButtonWithLabel">
            <label>
              <input type="checkbox" checked={checked} onChange={handleCheckboxChange} />
              <span>이 박스를 체크하세요(안심번호)</span>
              <input type="checkbox"></input>
              {children}
            </label>
          </div>
        </div>
      </div>
      <Request>
        <div className="toDelivery">
          <div className="DeliveryText">배달 기사님에게</div>
          <select className="selectbell">
            <option key="bell" value="bell">
              문 앞에 두고 벨 눌러주세요
            </option>
          </select>
        </div>
      </Request>

      <SendingWarm></SendingWarm>
      <Terms></Terms>
    </div>
  );
};

export default OrderFreeDelivery;
