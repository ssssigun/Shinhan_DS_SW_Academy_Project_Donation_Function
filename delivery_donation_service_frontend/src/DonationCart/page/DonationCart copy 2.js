import { MdClose } from 'react-icons/md';
import { AiOutlinePlus } from 'react-icons/ai';
import RadioButton from '../../common/component/RadioButton';
import '../style/DonationCart.scss';
import UpDownButton from '../../common/component/UpDownButton';
import React, { useState, useEffect } from 'react';
import DonationCartHeader from '../component/DonationCartHeader';
import OrderBox from '../../common/component/orderBox';
import CartData from '../../common/json/donationCartTest.json';

const DonationCart = (prop) => {
  // 각 가게별로 선택된 상태를 관리
  const [selected, setSelected] = useState(new Array(CartData.length).fill(0));

  // 선택한 가게의 인덱스를 업데이트하는 함수
  const hanldeRadioChange = (index) => {
    const newSelected = new Array(CartData.length).fill(0);
    newSelected[index] = 1;
    setSelected(newSelected);
  };

  //라디오버튼
  // const [selectedOption, setSelectedOption] = useState('option1'); // 초기 선택 옵션 설정

  //결제예정금액합산
  const [storeTotalPrices, setStoreTotalPrices] = useState({});

  useEffect(() => {
    const storePrices = {};

    CartData.forEach((cartItem) => {
      const storename = cartItem.storename;

      cartItem.menuItems.forEach((menuItem) => {
        const menuItemPrice = parsePrice(menuItem.price);
        const menuItemAmount = parseInt(menuItem.amount, 10);

        if (!storePrices[storename]) {
          storePrices[storename] = 0;
        }

        storePrices[storename] += menuItemPrice * menuItemAmount;
      });
    });

    setStoreTotalPrices(storePrices);
  }, []);

  // 결제예정금액 json 파일에서 price에 쉼표 있어서 제거 문자열에서 숫자로 처리
  const parsePrice = (priceString) => {
    const priceWithoutCommas = priceString.replace(/,/g, ''); // 쉼표 제거
    return parseInt(priceWithoutCommas, 10);
  };

  // // 라디오버튼
  // const handleOptionChange = (event) => {
  //   setSelectedOption(event.target.value); // 라디오 버튼 선택 시, 상태 업데이트
  // };

  return (
    <>
      <DonationCartHeader backUrl="/menuDetail">기부보따리</DonationCartHeader>
      <div className="wrapper">
        {CartData.map((cartItem, storeIndex) => (
          <div className="cart" key={cartItem.id}>
            <div className="storeTitle">
              <RadioButton
                name="storeRadio"
                labelStyle={{ fontSize: '16px' }}
                checked={selected[storeIndex] === 1}
                onChange={() => hanldeRadioChange(storeIndex)}
              >
                {cartItem.storename}
              </RadioButton>
              {/* 라디오버튼 컴포넌트 */}
              {/* <div className=""></div> */}

              <MdClose style={{ width: '20px', height: '20px' }} color="#888888" />
            </div>
            {cartItem.menuItems.map((menuItem, menuItemIndex) => (
              <div className="cartDetail" key={menuItemIndex}>
                <div className="detailTitle">
                  <div className="title">
                    {menuItem.name}

                    <MdClose style={{ width: '15px', height: '15px' }} color="#B0B0B0" />
                  </div>
                  <div className="price">·단품가격:{menuItem.price}</div>
                </div>
                <div className="count">
                  {/* 컴포넌트로 해야될듯 */}
                  <UpDownButton></UpDownButton>
                  <h2>{menuItem.price}</h2>
                </div>

                {/* 17,000원 */}
              </div>
            ))}

            <div className="expectedPaymentWrapper">
              <div className="expectedPayment">
                <h2 className="expectText">결제예정금액</h2>
                {Object.entries(storeTotalPrices).map(([storename, totalPrice]) => (
                  <h2 className="expectMoney">{totalPrice}원</h2>
                ))}
              </div>
            </div>

            <div className="addMenu">
              <AiOutlinePlus style={{ width: '15px', height: '15px' }} color="#FB521B" />
              메뉴추가
            </div>
          </div>
        ))}
        {/* 가게 목록들 */}
        {/* <div className="storeListBottomArea">
        <ul className="storeListWrap">
        {CartData.map((store) => (
              <li className="store" onClick={move}>
                <Store st={store} />
              </li>
              ))}
          </ul>
        </div> */}
      </div>
      <OrderBox text="기부하기" />
    </>
  );
};

export default DonationCart;
