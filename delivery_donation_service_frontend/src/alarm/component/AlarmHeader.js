import { MdKeyboardArrowLeft } from 'react-icons/md';
import HeaderWrapper from '../../common/component/HeaderWrapper';
import '../style/AlarmHeader.scss';

const AlarmHeader = () => {
  return (
    <HeaderWrapper>
      <div className="headerLeft">
        <MdKeyboardArrowLeft size="30px" />
      </div>
      <div className="headerTitle">알림함</div>
    </HeaderWrapper>
  );
};

export default AlarmHeader;
