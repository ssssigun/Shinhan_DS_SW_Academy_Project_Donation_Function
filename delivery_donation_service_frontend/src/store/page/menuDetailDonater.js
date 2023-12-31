//scss 불러오기
import '../style/menuDetail.scss';
//컴포넌트 불러오기
import StoreForm from '../component/storeForm';
import OrderBox from '../../common/component/orderBoxTest';
import UpDownButton from '../../common/component/UpDownButton';

import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

//텍스트 라인 (가게 정보 및 메뉴)
const MenuDetail = () => {
  const [count, setCount] = useState(1);

  const navigate = useNavigate();

  const move = () => {
    axios
      .get(
        `/db/cart/menuInCart?flag=${0}&userPk=${sessionStorage.getItem('userPk')}&menuPk=${ location.state.menu.menuPk }`,
      )
      .then((response) => {
        // 성공 처리
        if(!!response.data){
          //같은 메뉴가 담겨있으면 UPDATE
          axios
          .get(
            `/db/cart/updateAmount?cartPk=${response.data.cartPk}&amount=${response.data.amount + count}`,
          )
          .then(() => {
            navigate('/donationCart');
          })
          .catch((error) => {
            // 에러 처리
            console.error(error);
          });
        }else{
          //새로운 메뉴면 INSERT
          axios
            .get(
              `/db/cart/inputC?flag=${0}&userPk=${sessionStorage.getItem('userPk')}&amount=${count}&menuPk=${
                location.state.menu.menuPk
              }&storePk=${location.state.store.storePk}`,
            )
            .then(() => {
              navigate('/donationCart');
            })
            .catch((error) => {
              // 에러 처리
              console.error(error);
            });
        }
      })
      .catch((error) => {
        // 에러 처리
        console.error(error);
      });
  };
  let location = useLocation();
  return (
    <div>
      <StoreForm image={location.state.menu.menuPicture} cartLink="/donationCart">
        <p className="menuDetailTitle">{location.state.menu.menuName}</p>
        <p className="menuDetailDetail">{location.state.menu.detail}</p>
        <div className="menuDetailPrice">
          <p>{location.state.menu.menuName}</p>
          <p> {location.state.menu.menuPrice.toLocaleString()}원</p>
        </div>
        <hr className="menuDetailLine" />
        <div className="menuDetailAmount">
          <p>수량</p>
          <UpDownButton count={count} setCount={setCount} />
        </div>
      </StoreForm>
      {/* 주문하기 버튼 */}
      <OrderBox text={'기부 보따리에 담기'} onClick={move} />
    </div>
  );
};
export default MenuDetail;
