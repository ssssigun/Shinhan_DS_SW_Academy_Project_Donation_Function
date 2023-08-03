import HeaderWrapper from './HeaderWrapper';
import BackIcon from './Icons/BackIcon';

const ReadyHeader = () => {
  return (
    <HeaderWrapper>
      <div className="headerLeftSide">
        <BackIcon size="30px" color="#000" />
      </div>
      준비중
    </HeaderWrapper>
  );
};

export default ReadyHeader;
