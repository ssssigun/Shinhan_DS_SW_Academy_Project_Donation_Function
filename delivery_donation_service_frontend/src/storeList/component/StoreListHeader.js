import { MdHomeFilled, MdKeyboardArrowLeft, MdOutlineShoppingCart } from 'react-icons/md';
import HeaderWrapper from '../../common/component/HeaderWrapper';

const StoreListHeader = ({ children }) => {
  return (
    <HeaderWrapper>
      <div class="headerLeftSide">
        <MdKeyboardArrowLeft size="30px" />
      </div>
      {children}
      <div class="headerRightSide">
        <MdHomeFilled size="20px" />
        <MdOutlineShoppingCart size="24px" />
      </div>
    </HeaderWrapper>
  );
};

export default StoreListHeader;
