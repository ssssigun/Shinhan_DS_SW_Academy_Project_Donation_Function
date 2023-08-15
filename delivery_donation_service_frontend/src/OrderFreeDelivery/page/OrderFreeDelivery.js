import Input from '../../common/component/Input';
import '../style/OrderFreeDelivery.scss';
import React, { useEffect, useState } from 'react';
import OrderHeader from '../component/OrderHeader';
import OrderBox from '../../common/component/orderBox';
import CheckBox from '../../common/component/CheckBox';
import AllAgreeCheckBox from '../../common/component/AllAgreeCheckBox';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import RadioButton from '../../common/component/RadioButton';

const OrderFreeDelivery = ({ children, checked, onChange }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [usereData, setUsereData] = useState({});
  const [inputValue, setInputValue] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [warmMessage, setWarmMessage] = useState("");
  const [fromOwnerMessage, setfromOwnerMessage] = useState("");
  const [selected, setSelected] = useState([1, 0]);
  const [selectedDeliveryText, setSelectedDeliveryText] = useState("문 앞에 두고 벨 눌러주세요");


  const hanldeRadioChange = (index) => {
    const newSelected = [0, 0];
    newSelected[index] = 1;
    setSelected(newSelected);
  };

  useEffect(() => {
    //유저 정보 가져오기 (주소, 전화번호)
    axios
      .get(`/db/selectUserInfo?userPk=${sessionStorage.getItem("userPk")}`)
      .then((response) => {
        // 성공 처리
        setUsereData(response.data);
        setInputValue(response.data.detailAddress)
      })
      .catch((error) => {
        // 에러 처리
        console.error(error);
      });
  },[]);

  const handleCheckboxChange = (checked) => {
    setIsChecked(checked);
  };

  const [selectedOptions, setSelectedOptions] = useState({
    option1: false,
    option2: false,
    option3: false,
    option4: false
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
      if (k != 'option4') {
        if (selectedOptions[k] !== true) {
          allChecked = false;
        }
      }
    });

    if (selectedOptions.option4 !== allChecked) {
      setSelectedOptions((prevSelectedOptions) => ({
        ...prevSelectedOptions,
        option4: allChecked,
      }));
    }
  }, [selectedOptions]);

  const inputOnchange = (e)=>{
    setInputValue(e.target.value);
  }
  const onWarmMessageChange =(e)=>{
    setWarmMessage(e.target.value)
  }
  const fromOwnerMessageOnChange =(e)=>{
    setfromOwnerMessage(e.target.value)
  }

  const handleSelectedDeliveryText = (e) => {
    setSelectedDeliveryText(e.target.value);
  };
  const orderMenu = (e) =>{
        //주문하기
        axios
        .get(`/db/OrderFree?
        userPk=${sessionStorage.getItem("userPk")}
        &storePk=${location.state.store.storePk}
        &donaFlag= 1
        &message= ${fromOwnerMessage}
        &disposable= ${selected[1]}
        &toDeliveryman= ${selectedDeliveryText}
        &detailAddress=${inputValue}
        &content= ${warmMessage}
        &menuPk=${location.state.menu.menuPk}
        `)
        .then((response) => {
          // 성공 처리
        })
        .catch((error) => {
          // 에러 처리
          console.error(error);
        });
  }
  return (
    <>
      <OrderHeader>주문하기</OrderHeader>
      <div className="OrderFreeDeliveryWrapper">
        <div className="orderStore">
          <div className="Type">배달주문이에요</div>
          <div className="title">
            <div className="StoreName">{location.state.store.storeName}</div>
            <div className="MenuName">{location.state.menu.menuName} 1개</div>
          </div>
          <div className="addressWrapper">
            <div className="text">배달주소</div>
            <div className="addrWrap">
              <div className="addr">{usereData.address}</div>
            </div>
          </div>
          <Input value={inputValue} type={"text"} onChange={inputOnchange}></Input>
          <hr className="OrderFreeDeliveryHr" />
          <div className="tel">
            <div className="text">{usereData.tel}</div>
            <div className="checkButtonWithLabel">
              <AllAgreeCheckBox
                checked={SselectedOptions.option5}
                onChange={() => handleOptionChange('option5')}
                labelStyle={{ fontSize: '16px' }}
              >
                안심번호
              </AllAgreeCheckBox>
            </div>
          </div>
        </div>
        <div className="requestWrapper">
      <div className="requestText">요청사항</div>
      <div className="toCEO">
        <div className="CEOText">가게 사장님에게</div>
        <Input placeholder="예) 견과류는 빼주세요" value={fromOwnerMessage} type={"text"} onChange={fromOwnerMessageOnChange}></Input>
      </div>
      <div className="disposable">
        <div className="disposableText">
          일회용품 선택 <span style={{ color: '#FB521B' }}>&nbsp;*</span>
        </div>
        <div className="checkDisposable">
          {/* <Radio name="disposableCheck" value="disposableNo" defaultChecked>
              <div className="disposableTextNO">일회용 수저, 포크 안 주셔도 돼요!</div>
            </Radio>
            <Radio name="disposableCheck" value="disposableYes">
              <div className="disposableTextYes">일회용 수저, 포크 꼭 필요해요!</div>
            </Radio> */}

          <RadioButton
            // checked={true}
            // value="option1"
            // defaultChecked
            name="disposableText"
            labelStyle={{ fontSize: '16px' }}
            checked={selected[0] === 1}
            onChange={() => hanldeRadioChange(0)}
          >
            <div className="disposableTextNO">일회용 수저, 포크 안 주셔도 돼요!</div>
          </RadioButton>
          <RadioButton
            name="disposableText"
            value="disposableTextYes"
            checked={selected[1] === 1}
            onChange={() => hanldeRadioChange(1)}
          >
            <div className="disposableTextYes">일회용 수저, 포크 꼭 필요해요!</div>
          </RadioButton>
        </div>
      </div>
        <div className="toDelivery">
          <div className="DeliveryText">배달 기사님에게</div>
              <select className="selectbell" onChange={handleSelectedDeliveryText} value={selectedDeliveryText}>
                <option key="bell" value="문 앞에 두고 벨 눌러주세요">
                  문 앞에 두고 벨 눌러주세요
                </option>
                <option key="nobell" value="문 앞에 두고 벨 누르지 말아주세요">
                  문 앞에 두고 벨 누르지 말아주세요
                </option>
                <option key="safety" value="음식도, 기사님도 안전하게! 조심히 와주세요">
                  음식도, 기사님도 안전하게! 조심히 와주세요
                </option>
                <option key="call" value="도착하시면 전화주세요">
                  도착하시면 전화주세요
                </option>
                <option key="meet" value="직접 만나서 받을게요">
                  직접 만나서 받을게요
                </option>
                <option key="nothing" value="요청사항 없음">
                  요청사항 없음
                </option>
              </select>
          </div>
        </div>
        <div className="sendingWarm">
          <div className="title">
            <div className="text">따뜻해진 마음 전하기</div>
          </div>
          <Input placeholder="예) 감사합니다." value={warmMessage} onChange={onWarmMessageChange}></Input>
        </div>

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
            개인정보 제 3자 제공 (필수)
          </CheckBox>

          <CheckBox
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
        <OrderBox text="배달 주문하기" nav={'/'} onClick={orderMenu}/>
      </div>
    </>
  );
};

export default OrderFreeDelivery;
