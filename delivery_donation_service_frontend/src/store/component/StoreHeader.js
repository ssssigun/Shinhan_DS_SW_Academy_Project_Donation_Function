import { MdHomeFilled, MdKeyboardArrowLeft, MdOutlineShoppingCart } from 'react-icons/md';
import HeaderWrapper from '../../common/component/HeaderWrapper';
import '../style/StoreHeader.scss';

const StoreHeader = () => {
  return (
    <HeaderWrapper className="storeHeaderWrapper">
      <div className="headerLeftSide">
        <MdKeyboardArrowLeft size="30px" color="#FFF" />
      </div>
      <div className="headerRightSide">
        <MdHomeFilled size="24px" color="#FFF" />
        <MdOutlineShoppingCart size="24px" color="#FFF" />
      </div>
    </HeaderWrapper>
  );
};

export default StoreHeader;
