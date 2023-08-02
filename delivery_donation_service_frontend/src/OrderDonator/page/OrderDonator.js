import RadioButton from '../../common/component/RadioButton';
import React, { useState } from 'react';
import '../style/OrderDonator.scss';
import { MdCheck } from 'react-icons/md';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

const OrderDonator = ({ type }) => {
  const [selectedOption, setSelectedOption] = useState('option1'); // 초기 선택 옵션 설정
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value); // 라디오 버튼 선택 시, 상태 업데이트
  };
  const [allAgreed, setAllAgreed] = useState(false);
  const [agreements, setAgreements] = useState({
    termsAgreed: false,
    provisonAgreed: false,
    financialAgreed: false,
    personalInfoAgreed: false,
    ageAgreed: false,
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
      <div className="termsOrder">
        <div className="agreeAll">
          <div className="checkButton">
            <input
              className="allAgreed"
              type="checkbox"
              id="agree_check_all"
              name="agree_check_all"
              checked={allAgreed}
              onChange={handleAllAgreementChange}
            />
            <MdCheck></MdCheck>
            <label className="allText" htmlFor="agree_check_all">
              전체동의
            </label>
          </div>
        </div>

        <hr className="agreeLine"></hr>
        <div className="agreeUsed">
          <div className="checkUsed">
            <input
              className="termsAgreed"
              type="checkbox"
              id="agree_check_used"
              name="termsAgreed"
              required
              checked={agreements.termsAgreed}
              onChange={handleAgreementChange}
            />
            <label htmlFor="agree_check_used">이용약관 (필수)</label>
          </div>
          <MdOutlineKeyboardArrowDown></MdOutlineKeyboardArrowDown>
        </div>
        <div className="agreeOther">
          <div className="checkOther">
            <input
              className="provisonAgreed"
              type="checkbox"
              id="agree_check_info_other"
              name="provisonAgreed"
              required
              checked={agreements.provisonAgreed}
              onChange={handleAgreementChange}
            />
            <label htmlFor="agree_check_info_other">개인정보 제 3자 제공 (필수)</label>
          </div>
          <MdOutlineKeyboardArrowDown></MdOutlineKeyboardArrowDown>
        </div>
        <div className="financial">
          <div className="checkFinancial">
            <input
              className="financialAgreed"
              type="checkbox"
              id="agree_check_financial"
              name="financialAgreed"
              required
              checked={agreements.financialAgreed}
              onChange={handleAgreementChange}
            />
            <label htmlFor="agree_check_financial">전자금융거래 이용약관 (필수)</label>
          </div>
          <MdOutlineKeyboardArrowDown></MdOutlineKeyboardArrowDown>
        </div>
        <div className="agreeInfo">
          <div className="checkInfo">
            <input
              className="personalInfoAgreed"
              type="checkbox"
              id="agree_check_info"
              name="personalInfoAgreed"
              required
              checked={agreements.personalInfoAgreed}
              onChange={handleAgreementChange}
            />
            <label htmlFor="agree_check_info">개인정보 수집 및 이용 (필수)</label>
          </div>
          <MdOutlineKeyboardArrowDown></MdOutlineKeyboardArrowDown>
        </div>
        <div className="age">
          <div className="checkAge">
            <input
              className="ageAgreed"
              type="checkbox"
              id="agree_check_age"
              name="ageAgreed"
              required
              checked={agreements.ageAgreed}
              onChange={handleAgreementChange}
            />
            <label htmlFor="agree_check_age">만 14세 이상입니다. (필수)</label>
          </div>
          <MdOutlineKeyboardArrowDown></MdOutlineKeyboardArrowDown>
        </div>
      </div>
    </div>
  );
};

export default OrderDonator;
