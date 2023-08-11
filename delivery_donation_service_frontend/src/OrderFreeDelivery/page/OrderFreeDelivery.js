import { Children } from 'react';
import Input from '../../common/component/Input';
import SendingWarm from '../../common/component/SendingWarm';
import '../style/OrderFreeDelivery.scss';
import React, { useEffect, useState } from 'react';
import Terms from '../../common/component/Terms';
import Request from '../../common/component/Request';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import OrderHeader from '../component/OrderHeader';
import OrderBox from '../../common/component/orderBox';
import CheckBox from '../../common/component/CheckBox';
import AllAgreeCheckBox from '../../common/component/AllAgreeCheckBox';
import axios from 'axios';

const OrderFreeDelivery = ({ children, checked, onChange }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [user, setUser] = new useState({});

  const handleCheckboxChange = (checked) => {
    setIsChecked(checked);
  };

  const userPk = 1;
  useEffect(() => {
    axios
      .get(`/selectOrderFreeDelivery?userPk=${userPk}`)
      .then((response) => {
        console.log(response);
        setUser(response.data);
        console.log(response.data.detailAddress);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
      }));
    }
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

  //체크박스
  const [SselectedOptions, SsetSelectedOptions] = useState({
    option5: false,
  });

  useEffect(() => {
    //체크박스
    let allChecked = true;
    Object.keys(selectedOptions).forEach(function (k) {
      //console.log(selectedOptions[k]);
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

  //알림메세지 넣기
  const [warmMessage, setWarmMessage] = useState('');
  const handleWarmMessageChange = (e) => {
    setWarmMessage(e.target.value);
  };

  //따듯한 메세지
  const handleSendWarmMessage = () => {
    const userPk = 1; // 유저의 실제 userPk로 변경해야 합니다.

    axios
      .get(`/inputAlarmMessage?userPk=${userPk}&content=${warmMessage}`)
      .then((response) => {
        console.log('Warm message sent:', response);
        // 알림 메시지 전송 후에 원하는 동작을 수행할 수 있습니다.
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [donationPk, setDonationPk] = useState('');
  const [orderDetailPk, setOrderDetailPk] = useState('');
  const [storePk, setStorePk] = useState('');

  const [state, setState] = useState('');
  const [donaFlag, setDonaFlag] = useState('');
  const [message, setMessage] = useState('');
  const [disposable, setDisposable] = useState('');
  const [toDeliveryman, setToDeliveryman] = useState('');

  const handleDonationHistoryMessage = () => {
    const userPk = 1; // 유저의 실제 userPk로 변경해야 합니다.

    axios
      .get(
        `/inputOrderToOwnerMessage?userPk=${userPk}&orderDetailPk=${orderDetailPk}&storePk=${storePk}&state=${state}&donaFlag=${donaFlag}&message=${message}&disposable=${disposable}&toDeliveryman=${toDeliveryman}`,
      )
      .then((response) => {
        setOrderDetailPk(response.data);
        setStorePk(response.data);
        setState(response.data);
        setDonaFlag(response.data);
        setMessage(response.data);
        setDisposable(response.data);
        setToDeliveryman(response.data);

        console.log('Warm message sent:', response);
        // 알림 메시지 전송 후에 원하는 동작을 수행할 수 있습니다.
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <OrderHeader>주문하기</OrderHeader>
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
              <div className="addr">{user.address}</div>
            </div>
          </div>
          <Input
            placeholder="상세주소를 입력하세요"
            value={user.detailAddress} // user.detailAddress 값으로 설정
            onChange={(e) => {
              // 입력 필드 값이 변경될 때 상태 업데이트
              setUser((prevUser) => ({
                ...prevUser,
                detailAddress: e.target.value,
              }));
            }}
          ></Input>
          <hr className="OrderFreeDeliveryHr" />
          <div className="tel">
            <div className="text">{user.tel}</div>
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
        <Request>
          <div className="toDelivery">
            <div className="DeliveryText">배달 기사님에게</div>
            <select className="selectbell">
              <option key="bell" value="bell">
                문 앞에 두고 벨 눌러주세요
              </option>
              <option key="nobell" value="nobell">
                문 앞에 두고 벨 누르지 말아주세요
              </option>
              <option key="safety" value="safety">
                음식도, 기사님도 안전하게! 조심히 와주세요
              </option>
              <option key="call" value="call">
                도착하시면 전화주세요
              </option>
              <option key="meet" value="meet">
                직접 만나서 받을게요
              </option>
              <option key="nothing" value="nothing">
                요청사항 없음
              </option>
            </select>
          </div>
        </Request>

        <SendingWarm
          warmMessage={warmMessage}
          onWarmMessageChange={handleWarmMessageChange}
          onSendWarmMessage={handleSendWarmMessage}
        ></SendingWarm>
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

        {/* <Terms></Terms> */}
        <OrderBox text="배달 주문하기" nav={'/'} />
      </div>
    </>
  );
};

export default OrderFreeDelivery;
