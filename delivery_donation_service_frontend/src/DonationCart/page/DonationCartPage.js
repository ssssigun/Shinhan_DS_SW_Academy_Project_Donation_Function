import { MdClose } from 'react-icons/md';
import { AiOutlinePlus } from 'react-icons/ai';
import RadioButton from '../../common/component/RadioButton';
import '../style/DonationCartPage.scss';
import UpDownButtonForCart from '../../common/component/UpDownButtonForCart';
import React, { useState, useEffect } from 'react';
import DonationCartHeader from '../component/DonationCartHeader';
import OrderBox from '../../common/component/orderBox';
import axios from 'axios';

const DonationCartPage = () => {
  const userPk = 1;

  // 라디오버튼
  const [selected, setSelected] = useState(0);
  const handleRadioChange = (index) => {
    setSelected(index === selected ? -1 : index);
  };

  const [cartData, setCartData] = useState({});
  const [cartAmounts, setCartAmounts] = useState({});
  const [priceForStore, setPriceForStore] = useState({});

  // 가게 별로 메뉴 담기
  const makeCartSection = (cartList) => {
    const object = {};
    const priceStore = {};

    cartList.forEach((cart) => {
      if (!object[cart.menu.store.storeName]) {
        object[cart.menu.store.storeName] = [cart.menu.store];
        priceStore[cart.menu.store.storeName] = 0;
      }
      object[cart.menu.store.storeName].push(cart);
      priceStore[cart.menu.store.storeName] += cart.amount * cart.menu.menuPrice;

      // 수량 초기화
      setCartAmounts((prev) => ({
        ...prev,
        [cart.cartPk]: cart.amount,
      }));
    });

    setPriceForStore(priceStore);

    return object;
  };

  useEffect(() => {
    axios
      .get(`/cart/selectCart?userPk=${userPk}&flag=0`)
      .then((response) => {
        console.log(response.data);
        setCartData(makeCartSection(response.data));
        setSelected(response.data[0].menu.store.storePk);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // 수량 업데이트
  const updateAmount = (cartPk, amount) => {
    axios
      .get(`/cart/updateAmount?amount=${amount}&cartPk=${cartPk}`)
      .then((response) => {
        console.log('updateAmount 성공');
      })
      .catch((e) => {
        console.log('updateAmount 에러');
      });
  };

  // 가게 메뉴 삭제
  const deleteStoreMenu = (userPk, storePk) => {};

  return (
    <>
      <DonationCartHeader backUrl="/menuDetail">기부보따리</DonationCartHeader>
      <div className="wrapper">
        {Object.entries(cartData).map((cartList, idx) => {
          return (
            <div className="cart" key={idx}>
              <div className="storeTitle">
                <RadioButton
                  name="storeRadio"
                  labelStyle={{ fontSize: '16px' }}
                  checked={idx === selected}
                  onChange={() => handleRadioChange(idx)}
                >
                  {cartList[0]}
                </RadioButton>

                <MdClose style={{ width: '20px', height: '20px' }} color="#888888" />
              </div>
              {cartList[1].slice(1).map((cart, idx) => {
                return (
                  <div className="cartDetail" key={idx}>
                    <div className="detailTitle">
                      <div className="title">
                        {cart.menu.menuName}
                        <MdClose style={{ width: '15px', height: '15px' }} color="#B0B0B0" />
                      </div>
                      <div className="price">·단품가격: {cart.menu.menuPrice.toLocaleString()}</div>
                    </div>
                    <div className="count">
                      <UpDownButtonForCart
                        cartPk={cart.cartPk}
                        count={cartAmounts[cart.cartPk]}
                        setCount={setCartAmounts}
                        updateAmount={updateAmount}
                      />
                      <h2>{(cart.menu.menuPrice * cart.amount).toLocaleString()}원</h2>
                    </div>
                  </div>
                );
              })}

              <div className="expectedPaymentWrapper">
                <div className="expectedPayment">
                  <h2 className="expectText">결제예정금액</h2>
                  <h2 className="expectMoney">{priceForStore[cartList[0]].toLocaleString()}원</h2>
                </div>
              </div>

              <div className="addMenu">
                <AiOutlinePlus style={{ width: '15px', height: '15px' }} color="#FB521B" />
                메뉴추가
              </div>
            </div>
          );
        })}
      </div>
      <OrderBox text="기부하기" nav="/orderDonator" />
    </>
  );
};

export default DonationCartPage;
