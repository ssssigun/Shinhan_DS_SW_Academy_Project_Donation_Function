import AlarmIcon from '../../common/component/Icons/AlarmIcon';
import HeaderWrapper from '../../common/component/HeaderWrapper';
import '../style/MainHeader.scss';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { MdKeyboardArrowDown } from 'react-icons/md';
import CartIcon from '../../common/component/Icons/CartIcon';

const MainHeader = () => {
  return (
    <HeaderWrapper>
      <div className="headerLeftSide mainHeaderLeftSide">
        <FaMapMarkerAlt size="24px" color="#FB521B" />
        마포구 연남동
        <MdKeyboardArrowDown size="24px" color="#7D7D7D" />
      </div>
      <div className="headerRightSide">
        <AlarmIcon size="24px" color="#000" />
        <CartIcon size="24px" color="#000" link="/cart" />
      </div>
    </HeaderWrapper>
  );
};

export default MainHeader;
