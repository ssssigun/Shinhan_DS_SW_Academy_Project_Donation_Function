import { MdClose } from 'react-icons/md';
import { AiOutlinePlus } from 'react-icons/ai';
import RadioButton from '../../common/component/RadioButton';
import '../style/DonationCartPage.scss';
import UpDownButtonForCart from '../../common/component/UpDownButtonForCart';
import React, { useState, useEffect } from 'react';
import DonationCartHeader from '../component/DonationCartHeader';
import OrderBox from '../../common/component/orderBox';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const DonationCartPage = () => {
  const userPk = 1;

  const navigate = useNavigate();

  // 라디오버튼
  const [selected, setSelected] = useState('');
  const handleRadioChange = (index) => {
    setSelected(index === selected ? -1 : index);
  };

  const [cartData, setCartData] = useState({});
  const [priceForMenu, setPriceForMenu] = useState({});
  const [priceForStore, setPriceForStore] = useState({});

  // cart 불러오기
  const makeCartSection = (cartList) => {
    let btnBool = false;
    const object = {};
    const cartSectionStore = {};

    cartList.forEach((cart) => {
      if (!object[cart.store.storeName]) {
        object[cart.store.storeName] = {
          store: cart.store,
        };
        cartSectionStore[cart.store.storeName] = {
          [cart.cartPk]: cart,
        };
        if (!btnBool) {
          setSelected(cart.store.storeName);
        }
        btnBool = true;
      } else {
        cartSectionStore[cart.store.storeName][cart.cartPk] = cart;
      }
    });

    Object.entries(cartSectionStore).map((cart) => {
      object[cart[0]]['cart'] = cart[1];
    });

    console.log('cartData', object);

    return object;
  };
  useEffect(() => {
    /*
      # 구조
        {
          [store 이름]: {
            'store': [store 객체],
            'cart': {
              [cart pk]: [menu 객체]
            }
          }
        }
    */
    axios
      .get(`/db/cart/selectCart?userPk=${userPk}&flag=0`)
      .then((response) => {
        console.log('response 결과', response.data);
        setCartData(makeCartSection(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // 수량 변화
  const upAmount = (ceil, cartPk, storeName) => {
    const store = cartData[storeName];
    if (store.cart[cartPk].amount < ceil) {
      store.cart[cartPk].amount += 1;

      setCartData((prev) => ({
        ...prev,
        [storeName]: store,
      }));
      updateAmount(cartPk, store.cart[cartPk].amount);
    }
  };
  const downAmount = (cartPk, storeName) => {
    const store = cartData[storeName];
    if (store.cart[cartPk].amount > 1) {
      store.cart[cartPk].amount -= 1;

      setCartData((prev) => ({
        ...prev,
        [storeName]: store,
      }));
      updateAmount(cartPk, store.cart[cartPk].amount);
    }
  };
  const updateAmount = (cartPk, amount) => {
    axios
      .get(`/db/cart/updateAmount?amount=${amount}&cartPk=${cartPk}`)
      .then(() => console.log('updateAmount 성공'))
      .catch((e) => console.log(e));
  };

  // 가격
  const calcMenuPrice = () => {
    Object.entries(cartData).map((carts) => {
      if (carts[1] !== undefined) {
        let storePrice = 0;
        // 메뉴별 가격
        Object.entries(carts[1].cart).map((cart) => {
          setPriceForMenu((prev) => ({
            ...prev,
            [cart[1].cartPk]: cart[1].menu.menuPrice * cart[1].amount,
          }));
          storePrice += cart[1].menu.menuPrice * cart[1].amount;
        });
        setPriceForStore((prev) => ({
          ...prev,
          [carts[0]]: storePrice,
        }));
      }
    });
  };
  useEffect(() => {
    calcMenuPrice();
  }, [cartData]);

  // cart 삭제
  const deleteCart = (cartPk, storeName) => {
    axios
      .get(`/db/cart/deleteMenu?cartPk=${cartPk}`)
      .then(() => console.log('deleteCart 성공'))
      .catch((e) => console.log(e));
    const store = cartData[storeName];
    delete store.cart[cartPk];
    if (Object.keys(store.cart).length === 0) {
      setCartData((prev) => ({ ...prev, [storeName]: undefined }));
    } else {
      setCartData((prev) => ({
        ...prev,
        [storeName]: store,
      }));
    }
  };

  // 가게 별 삭제
  const deleteStoreMenu = (storeName) => {
    axios
      .get(`/db/cart/deleteStoreMenu?storePk=${cartData[storeName].store.storePk}&userPk=${userPk}`)
      .then(() => console.log('deleteCartAll 성공'))
      .catch((e) => console.log(e));
    setCartData((prev) => ({ ...prev, [storeName]: undefined }));
  };

  const deleteCartAll = () => {
    axios
      .get(`/db/cart/deleteMenuAll?userPk=${userPk}&flag=0`)
      .then(() => console.log('deleteCartAll 성공'))
      .catch((e) => console.log(e));
    setCartData({});
  };

  // 선택된 가게 삭제하면 맨 위의 가게 선택
  const findFirstMenu = () => {
    let find = false;
    Object.entries(cartData).map((store) => {
      if (!find && store[1] !== undefined) {
        setSelected(store[0]);
        find = true;
      }
    });
  };
  useEffect(() => {
    console.log('useEffect', cartData);
    // radioButton selected 변경
    if (cartData[selected] === undefined) {
      findFirstMenu();
    }
  }, [cartData]);

  // 기부보따리로 전달되는 state
  const makeState = () => {
    const returnObject = {};
    returnObject['store'] = cartData[selected].store;
    returnObject['cart'] = [];
    Object.entries(cartData[selected].cart).map((cart) => {
      returnObject['cart'].push(cart[1]);
    });
    returnObject['totalPrice'] = priceForStore[selected];

    return returnObject;
  };

  return (
    <>
      <DonationCartHeader backUrl="/menuDetail" onClick={deleteCartAll}>
        기부보따리
      </DonationCartHeader>
      <div className="wrapper">
        {Object.entries(cartData).map((cartStore, idx) => {
          if (cartStore[1] !== undefined) {
            console.log('cartStore', cartStore);
            return (
              <div className="cart" key={idx}>
                <div className="storeTitle">
                  <RadioButton
                    name="storeRadio"
                    labelStyle={{ fontSize: '16px' }}
                    checked={cartStore[0] === selected}
                    onChange={() => handleRadioChange(cartStore[0])}
                  >
                    {cartStore[0]}
                  </RadioButton>

                  <MdClose
                    style={{ width: '20px', height: '20px' }}
                    color="#888888"
                    onClick={() => deleteStoreMenu(cartStore[0])}
                  />
                </div>
                {Object.entries(cartStore[1]['cart']).map((cart, idx) => {
                  console.log('cart', cart);
                  return (
                    <div className="cartDetail" key={idx}>
                      <div className="detailTitle">
                        <div className="title">
                          {cart[1].menu.menuName}
                          <MdClose
                            style={{ width: '15px', height: '15px' }}
                            color="#B0B0B0"
                            onClick={() => deleteCart(cart[1].cartPk, cartStore[0])}
                          />
                        </div>
                        <div className="price">·단품가격: {cart[1].menu.menuPrice.toLocaleString()}</div>
                      </div>
                      <div className="count">
                        <UpDownButtonForCart
                          cartPk={cart[1].cartPk}
                          storeName={cartStore[0]}
                          upAmount={upAmount}
                          downAmount={downAmount}
                          count={cart[1].amount}
                        />
                        <h2>
                          {priceForMenu[cart[1].cartPk] === undefined
                            ? 0
                            : priceForMenu[cart[1].cartPk].toLocaleString()}
                          원
                        </h2>
                      </div>
                    </div>
                  );
                })}

                <div className="expectedPaymentWrapper">
                  <div className="expectedPayment">
                    <h2 className="expectText">결제예정금액</h2>
                    <h2 className="expectMoney">
                      {priceForStore[cartStore[0]] === undefined ? 0 : priceForStore[cartStore[0]].toLocaleString()}원
                    </h2>
                  </div>
                </div>

                <div
                  className="addMenu"
                  onClick={() => {
                    navigate('/storeMain', {
                      state: {
                        storePk: cartStore[1].store.storePk,
                      },
                    });
                  }}
                >
                  <AiOutlinePlus style={{ width: '15px', height: '15px' }} color="#FB521B" />
                  메뉴추가
                </div>
              </div>
            );
          }
        })}
      </div>
      <OrderBox text="기부하기" nav="/orderDonator" onClick={makeState} />
    </>
  );
};

export default DonationCartPage;
