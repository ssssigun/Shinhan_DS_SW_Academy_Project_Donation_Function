import { MdOutlineShoppingCart } from 'react-icons/md';
import { Link } from 'react-router-dom';

const CartIcon = ({ size, color, link }) => {
  return (
    <Link to={link}>
      <MdOutlineShoppingCart size={size} color={color} />
    </Link>
  );
};

export default CartIcon;
