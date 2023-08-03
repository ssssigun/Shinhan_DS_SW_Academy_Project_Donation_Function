import HeaderWrapper from '../../common/component/HeaderWrapper';
import '../style/AlarmHeader.scss';
import BackIcon from '../../common/component/Icons/BackIcon';

const AlarmHeader = () => {
  return (
    <HeaderWrapper>
      <div className="headerLeft">
        <BackIcon size="30px" color="#000" />
      </div>
      <div className="headerTitle">알림함</div>
    </HeaderWrapper>
  );
};

export default AlarmHeader;
