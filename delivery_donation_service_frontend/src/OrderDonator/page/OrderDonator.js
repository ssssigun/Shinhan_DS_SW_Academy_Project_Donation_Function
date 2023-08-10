import RadioButton from '../../common/component/RadioButton';
import React, { useEffect, useState } from 'react';
import '../style/OrderDonator.scss';
import { MdCheck } from 'react-icons/md';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import OrderHeader from '../component/OrderHeader';
import OrderBox from '../../common/component/orderBox';
import AllAgreeCheckBox from '../../common/component/AllAgreeCheckBox';
import CheckBox from '../../common/component/CheckBox';
import axios from 'axios';

const OrderDonator = ({ type }) => {
  // const [selectedOption, setSelectedOption] = useState('option1'); // 초기 선택 옵션 설정
  // const handleOptionChange = (event) => {
  //   setSelectedOption(event.target.value); // 라디오 버튼 선택 시, 상태 업데이트
  // };

  const [selected, setSelected] = useState([1, 0]);

  const hanldeRadioChange = (index) => {
    const newSelected = [0, 0];
    newSelected[index] = 1;
    setSelected(newSelected);
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

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (checked) => {
    setIsChecked(checked);
  };

  const [selectedOptions, setSelectedOptions] = useState({
    option1: false,
    option2: false,
    option3: false,
    option5: false,
    option6: false,

    option4: false,
  });

  const handleOptionChange = (option) => {
    setSelectedOptions((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      [option]: !prevSelectedOptions[option],
      // option4: false,
    }));
    // updateAllAgreeCheckBox();
  };

  const handleAllAgreeChange = () => {
    const allChecked = !selectedOptions.option4;
    setSelectedOptions((prevSelectedOptions) => ({
      // ...prevSelectedOptions,
      option4: allChecked,
      option1: allChecked,
      option2: allChecked,
      option3: allChecked,
      option5: allChecked,
      option6: allChecked,
    }));
  };

  useEffect(() => {
    // const allChecked = Object.values(selectedOptions).every((option, idx) => {
    //   if (idx != 'option4') return option === true;
    // });
    let allChecked = true;
    Object.keys(selectedOptions).forEach(function (k) {
      //console.log(selectedOptions[k]);
      if (k != 'option4') {
        if (selectedOptions[k] !== true) {
          allChecked = false;
        }
      }
    });

    console.log(allChecked);
    if (selectedOptions.option4 !== allChecked) {
      setSelectedOptions((prevSelectedOptions) => ({
        ...prevSelectedOptions,
        option4: allChecked,
      }));
    }
  }, [selectedOptions]);

  return (
    <>
      <OrderHeader>기부하기</OrderHeader>
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
                // checked={selectedOption === 'option1'}
                // value="option1"
                // onChange={handleOptionChange}
                // labelStyle={{ fontSize: '16px' }}
                name="disposableorderMethodText"
                labelStyle={{ fontSize: '16px' }}
                checked={selected[0] === 1}
                onChange={() => hanldeRadioChange(0)}
              >
                doGetPay
              </RadioButton>
              <div className="picture">
                <img src="./image/payPicture.png"></img>
              </div>
            </div>
            <div className="radioButtonWithLable">
              <RadioButton
                name="orderMethod"
                value="disposableTextYes"
                checked={selected[1] === 1}
                onChange={() => hanldeRadioChange(1)}
              >
                신용/체크카드 결제
              </RadioButton>
            </div>
          </div>
        </div>
        <div className="termsOrder">
          <AllAgreeCheckBox
            checked={selectedOptions.option4}
            onChange={handleAllAgreeChange}
            labelStyle={{ fontSize: '16px' }}
          >
            전체동의
          </AllAgreeCheckBox>
          <hr className="AllAgreeCheckBoxHr"></hr>
          <CheckBox
            checked={selectedOptions.option1}
            onChange={() => handleOptionChange('option1')}
            labelStyle={{ fontSize: '16px' }}
          >
            이용약관 (필수)
          </CheckBox>
          <CheckBox
            checked={selectedOptions.option2}
            onChange={() => handleOptionChange('option2')}
            labelStyle={{ fontSize: '16px' }}
          >
            개인정보 제3자 제공 (필수)
          </CheckBox>
          <CheckBox
            checked={selectedOptions.option3}
            onChange={() => handleOptionChange('option3')}
            labelStyle={{ fontSize: '16px' }}
          >
            전자금융거래 이용약관 (필수)
          </CheckBox>
          <CheckBox
            checked={selectedOptions.option5}
            onChange={() => handleOptionChange('option5')}
            labelStyle={{ fontSize: '16px' }}
          >
            개인정보 수집 및 이용 (필수)
          </CheckBox>
          <CheckBox
            checked={selectedOptions.option6}
            onChange={() => handleOptionChange('option6')}
            labelStyle={{ fontSize: '16px' }}
          >
            만 14세 이상입니다. (필수)
          </CheckBox>
          <div className="agree">
            <div className="agreeText">위 내용을 확인하였으며 동의합니다.</div>
          </div>
        </div>

        <OrderBox text="기부하기" nav={'/'} />
      </div>
    </>
  );
};

export default OrderDonator;
