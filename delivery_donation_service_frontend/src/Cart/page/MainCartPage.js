import CartHeader from '../component/CartHeader';
import '../style/CartPage.scss';
import None from '../../common/component/None';

const Cart = () => {
  return (
    <div>
      <CartHeader>장바구니</CartHeader>
      <div className="cartWrapper">
        <None title="띠로리!" image="image/PLI.png" height="800">
          장바구니를 채워보세요.
        </None>
      </div>
    </div>
  );
};

export default Cart;
