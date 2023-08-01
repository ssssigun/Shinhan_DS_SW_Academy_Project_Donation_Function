import { MdHomeFilled, MdOutlineSearch, MdOutlineFeed, MdOutlinePersonOutline, MdStarOutline } from 'react-icons/md';
import '../style/BottomMenuBar.scss';

const BottomMenuBar = () => {
  return (
    <>
      <div className="bottomMenuBar">
        <div className="bottomMenu">
          <MdHomeFilled size="24px" />홈
        </div>
        <div className="bottomMenu">
          <MdOutlineSearch size="24px" />
          검색
        </div>
        {/* <div className="bottomMenu"></div> */}
        <div className="tasteStar">
          <div className="tasteStarIcon">
            <MdStarOutline size="40px" color="#fff" />
          </div>
          맛스타
        </div>
        <div className="bottomMenu">
          <MdOutlineFeed size="24px" />
          주문내역
        </div>
        <div className="bottomMenu">
          <MdOutlinePersonOutline size="24px" />
          마이
        </div>
      </div>
    </>
  );
};

export default BottomMenuBar;
