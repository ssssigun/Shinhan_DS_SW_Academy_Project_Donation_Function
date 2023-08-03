import Input from '../../common/component/Input';
import SendingWarm from '../../common/component/SendingWarm';
import Terms from '../../common/component/Terms';
import Request from '../../common/component/Request';
import '../style/OrderFreeTakeOut.scss';
import OrderHeader from '../component/OrderHeader';
import OrderBox from '../../common/component/orderBox';
import CheckBox from '../../common/component/CheckBox';
import React, { useState } from 'react';
const OrderFreeTakeOut = ({}) => {
  const [selectedOption, setSelectedOption] = useState('option1'); // 초기 선택 옵션 설정
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value); // 라디오 버튼 선택 시, 상태 업데이트
  };
  const [allAgreed, setAllAgreed] = useState(false);
  const [agreements, setAgreements] = useState({
    termsAgreed: false,
    personalInfoAgreed: false,
    provisonAgreed: false,
    locationAgreed: false,
    eventAlarmAgreed: false,
    serviceAlarmAgreed: false,
  });

  const handleAgreementChange = (event) => {
    const { name, checked } = event.target;

    setAgreements((prevAgreements) => ({ ...prevAgreements, [name]: checked }));
    const allChecked = Object.values({ ...agreements, [name]: checked }).every((value) => value === true);
    setAllAgreed(allChecked);
  };

  const handleAllAgreementChange = (event) => {
    const { checked } = event.target;
    setAgreements((prevAgreements) =>
      Object.keys(prevAgreements).reduce(
        (newAgreements, agreementKey) => ({
          ...newAgreements,
          [agreementKey]: checked,
        }),
        {},
      ),
    );
    setAllAgreed(checked);
  };
  return (
    <>
      <OrderHeader>주문하기</OrderHeader>
      <div className="OrderFreeTakeOutWrapper">
        <div className="orderStore">
          <div className="Type">포장주문이에요</div>
          <div className="title">
            <div className="StoreName">대한냉면 마포점</div>
            <div className="MenuName">물냉면 1개</div>
          </div>
          <div className="addressWrapper">
            <div className="text">가게주소</div>
            <div className="addrWrap">
              <div className="addr">서울특별시 마포구 동교로 225 (연남동)</div>
            </div>
          </div>
          <hr className="OrderFreeTakeOuthr" />
          <div className="tel">
            <div className="text">010-1234-5678</div>
            <div className="checkButtonWithLabel">
              <label>
                <input type="checkbox" />
                <span>안심번호</span>
                {/* <input type="checkbox"></input> */}
              </label>
            </div>
          </div>
        </div>

        <Request></Request>
        <SendingWarm></SendingWarm>
        <CheckBox
          checked={selectedOption === 'option1'}
          value="option1"
          name="disposableTextNO"
          onChange={handleOptionChange}
          labelStyle={{ fontSize: '16px' }}
          defaultChecked
        >
          이용약관 (필수)
        </CheckBox>
        <CheckBox
          checked={selectedOption === 'option1'}
          value="option1"
          name="disposableTextNO"
          onChange={handleOptionChange}
          labelStyle={{ fontSize: '16px' }}
          defaultChecked
        >
          개인정보 제 3자 제공 (필수)
        </CheckBox>
        <CheckBox
          checked={selectedOption === 'option1'}
          value="option1"
          name="disposableTextNO"
          onChange={handleOptionChange}
          labelStyle={{ fontSize: '16px' }}
          defaultChecked
        >
          개인정보 수집 및 이용 (필수)
        </CheckBox>
        <Terms></Terms>

        <OrderBox />
      </div>
    </>
  );
};
export default OrderFreeTakeOut;
