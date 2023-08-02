import HeaderWrapper from '../../common/component/HeaderWrapper';
import '../style/MainHeader.scss';
import { FaMapMarkerAlt, FaRegBell } from 'react-icons/fa';
import { MdKeyboardArrowDown, MdOutlineShoppingCart } from 'react-icons/md';

const MainHeader = () => {
  return (
    <HeaderWrapper>
      <div class="headerLeftSide mainHeaderLeftSide">
        <FaMapMarkerAlt size="24px" color="#FB521B" />
        마포구 연남동
        <MdKeyboardArrowDown size="24px" color="#7D7D7D" />
      </div>
      <div class="headerRightSide">
        <FaRegBell size="24px" />
        <MdOutlineShoppingCart size="24px" />
      </div>
    </HeaderWrapper>
  );
};

export default MainHeader;
