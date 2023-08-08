import { MdClose } from 'react-icons/md';
import { AiOutlinePlus } from 'react-icons/ai';
import RadioButton from '../../common/component/RadioButton';
import '../style/DonationCart.scss';
import UpDownButton from '../../common/component/UpDownButton';
import React, { useState } from 'react';
import DonationCartHeader from '../component/DonationCartHeader';
import OrderBox from '../../common/component/orderBox';
import CartData from '../../common/json/donationCartTest.json';
const DonationCart = (prop) => {
  const [selectedOption, setSelectedOption] = useState('option1'); // 초기 선택 옵션 설정
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value); // 라디오 버튼 선택 시, 상태 업데이트
  };
  return (
    <>
      <DonationCartHeader backUrl="/menuDetail">기부보따리</DonationCartHeader>
      <div className="wrapper">
        {CartData.map((cartItem) => (
          <div className="cart">
            <div className="storeTitle">
              <RadioButton
                checked={selectedOption === 'option1'}
                value="option1"
                onChange={handleOptionChange}
                labelStyle={{ fontSize: '16px' }}
              >
                {cartItem.storename}
              </RadioButton>
              {/* 라디오버튼 컴포넌트 */}
              {/* <div className=""></div> */}

              <MdClose style={{ width: '20px', height: '20px' }} color="#888888" />
            </div>
{cartItem.menuItems.map((menuItem, menuItemIndex) => (
  
))}
            <div className="cartDetail">
              <div className="detailTitle">
                <div className="title">
                  {cartItem.name}

                  <MdClose style={{ width: '15px', height: '15px' }} color="#B0B0B0" />
                </div>
                <div className="price">·단품가격:{cartItem.Price}</div>
              </div>
              <div className="count">
                {/* 컴포넌트로 해야될듯 */}
                <UpDownButton></UpDownButton>
                <h2>{cartItem.Price}</h2>
              </div>

              {/* 17,000원 */}
            </div>
            <div className="cartDetail">
              <div className="detailTitle">
                <div className="title">
                  {cartItem.name2}
                  <MdClose style={{ width: '15px', height: '15px' }} color="#B0B0B0" />
                </div>
                <div className="price">·단품가격:{cartItem.Price2}</div>
              </div>
              <div className="count">
                {/* 컴포넌트로 해야될듯 */}
                <UpDownButton></UpDownButton>
                <h2>{cartItem.Price2}</h2>
              </div>

              {/* 17,000원 */}
            </div>
            <div className="expectedPaymentWrapper">
              <div className="expectedPayment">
                <h2 className="expectText">결제예정금액</h2>
                <h2 className="expectMoney">
                  {cartItem.Price}+{cartItem.Price2}
                </h2>
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
