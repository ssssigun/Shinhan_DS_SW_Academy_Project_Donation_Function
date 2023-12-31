import { MdHomeFilled, MdOutlineSearch, MdOutlineFeed, MdOutlinePersonOutline, MdStarOutline } from 'react-icons/md';
import '../style/BottomMenuBar.scss';
import { useNavigate } from 'react-router-dom';

const BottomMenuBar = () => {
  let navigate = useNavigate();

  return (
    <>
      <div className="bottomMenuBar">
        <div className="bottomMenu">
          <MdHomeFilled size="24px" />홈
        </div>
        <div className="bottomMenu" onClick={() => navigate('/ready')}>
          <MdOutlineSearch size="24px" />
          검색
        </div>
        <div className="tasteStar" onClick={() => navigate('/ready')}>
          <div className="tasteStarIcon">
            <MdStarOutline size="40px" color="#fff" />
          </div>
          맛스타
        </div>
        <div className="bottomMenu" onClick={() => navigate('/orderList')}>
          <MdOutlineFeed size="24px" />
          주문내역
        </div>
        <div className="bottomMenu" onClick={() => navigate('/ready')}>
          <MdOutlinePersonOutline size="24px" />
          마이
        </div>
      </div>
    </>
  );
};

export default BottomMenuBar;
