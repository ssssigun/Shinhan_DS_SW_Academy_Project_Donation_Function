// 메뉴 정렬 바 컴포넌트

//scss 불러오기
import "../style/sortOptionBar.scss"
// react-icons 불러오기
import {MdOutlineKeyboardArrowDown} from "react-icons/md"
const style = {
  "width": "24px",
  "height": "24px",
  "color" : "#7F7F7F",
  "display" : "inline-block"
}
const sortOptionBar = () => {
    return (
      // 필터는 데이터 고정값
      <div id="sortOptionBar">
        <ul id="filter">
            <li><span>기본순</span><MdOutlineKeyboardArrowDown style={style}/></li>
            <li><span>배달비</span><MdOutlineKeyboardArrowDown  style={style}/></li>
            <li><span>최소주문금액</span><MdOutlineKeyboardArrowDown  style={style}/></li>
            <li><span>할인혜택</span><MdOutlineKeyboardArrowDown  style={style}/></li>
        </ul>
      </div>
    );
  };
  export default sortOptionBar;