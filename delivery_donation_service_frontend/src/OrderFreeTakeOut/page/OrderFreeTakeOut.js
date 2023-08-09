import Input from '../../common/component/Input';
import SendingWarm from '../../common/component/SendingWarm';
import Terms from '../../common/component/Terms';
import Request from '../../common/component/Request';
import '../style/OrderFreeTakeOut.scss';
import OrderHeader from '../component/OrderHeader';
import OrderBox from '../../common/component/orderBox';
import CheckBox from '../../common/component/CheckBox';
import React, { useEffect, useState } from 'react';
import AllAgreeCheckBox from '../../common/component/AllAgreeCheckBox';

const OrderFreeTakeOut = ({}) => {
  // const [selectedOption, setSelectedOption] = useState('option1'); // 초기 선택 옵션 설정
  // const handleOptionChange = (event) => {
  //   setSelectedOption(event.target.value); // 라디오 버튼 선택 시, 상태 업데이트
  // };

  // const updateAllAgreeCheckBox = () => {
  //   const allChecked = Object.values(selectedOptions).every((option) => option === true);
  //   setSelectedOptions((prevSelectedOptions) => ({
  //     ...prevSelectedOptions,
  //     option4: allChecked,
  //   }));
  // };

  const [selectedOptions, setSelectedOptions] = useState({
    option1: false,
    option2: false,
    option3: false,

    option4: false,
  });

  const handleOptionChange = (option) => {
    if (option === 'option5') {
      SsetSelectedOptions((prevSelectedOptions) => ({
        ...prevSelectedOptions,
        [option]: !prevSelectedOptions[option],
      }));
    } else {
      setSelectedOptions((prevSelectedOptions) => ({
        ...prevSelectedOptions,
        [option]: !prevSelectedOptions[option],
        // option4: false,
      }));
    }

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
    }));
  };

  const [SselectedOptions, SsetSelectedOptions] = useState({
    option5: false,
  });

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

  // const [allAgreed, setAllAgreed] = useState(false);
  // const [agreements, setAgreements] = useState({
  //   termsAgreed: false,
  //   personalInfoAgreed: false,
  //   provisonAgreed: false,
  //   locationAgreed: false,
  //   eventAlarmAgreed: false,
  //   serviceAlarmAgreed: false,
  // });

  // const handleAgreementChange = (event) => {
  //   const { name, checked } = event.target;

  //   setAgreements((prevAgreements) => ({ ...prevAgreements, [name]: checked }));
  //   const allChecked = Object.values({ ...agreements, [name]: checked }).every((value) => value === true);
  //   setAllAgreed(allChecked);
  // };

  // const handleAllAgreementChange = (event) => {
  //   const { checked } = event.target;
  //   setAgreements((prevAgreements) =>
  //     Object.keys(prevAgreements).reduce(
  //       (newAgreements, agreementKey) => ({
  //         ...newAgreements,
  //         [agreementKey]: checked,
  //       }),
  //       {},
  //     ),
  //   );
  //   setAllAgreed(checked);
  // };
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
            <AllAgreeCheckBox
              checked={SselectedOptions.option5}
              onChange={() => handleOptionChange('option5')}
              labelStyle={{ fontSize: '16px' }}
            >
              안심번호
            </AllAgreeCheckBox>
          </div>
        </div>

        <Request></Request>
        <SendingWarm></SendingWarm>
        <div className="takeoutTermsWrapper">
          <AllAgreeCheckBox
            checked={selectedOptions.option4}
            onChange={handleAllAgreeChange}
            labelStyle={{ fontSize: '16px' }}
          >
            전체동의
          </AllAgreeCheckBox>

          <hr className="allagreeLine"></hr>

          <CheckBox
            // checked={selectedOption === 'option1'}
            // value="option1"
            // name="disposableTextNO"
            // onChange={handleOptionChange}
            // defaultChecked
            checked={selectedOptions.option1}
            onChange={() => handleOptionChange('option1')}
            labelStyle={{ fontSize: '16px' }}
          >
            이용약관 (필수)
          </CheckBox>
          <CheckBox
            // checked={selectedOption === 'option1'}
            // value="option1"
            // name="disposableTextNO"
            // onChange={handleOptionChange}
            // labelStyle={{ fontSize: '16px' }}
            // defaultChecked
            checked={selectedOptions.option2}
            onChange={() => handleOptionChange('option2')}
            labelStyle={{ fontSize: '16px' }}
          >
            개인정보 제 3자 제공 (필수)
          </CheckBox>
          <CheckBox
            // checked={selectedOption === 'option1'}
            // value="option1"
            // name="disposableTextNO"
            // onChange={handleOptionChange}
            // labelStyle={{ fontSize: '16px' }}
            // defaultChecked

            checked={selectedOptions.option3}
            onChange={() => handleOptionChange('option3')}
            labelStyle={{ fontSize: '16px' }}
          >
            개인정보 수집 및 이용 (필수)
          </CheckBox>
          <div className="agree">
            <div className="agreeText">위 내용을 확인하였으며 동의합니다.</div>
          </div>
        </div>
        {/* <Terms></Terms> */}

        <OrderBox text="포장 주문하기" nav={'/'} />
      </div>
    </>
  );
};
export default OrderFreeTakeOut;
