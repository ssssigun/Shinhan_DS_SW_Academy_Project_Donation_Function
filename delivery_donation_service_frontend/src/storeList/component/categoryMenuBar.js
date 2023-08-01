//메뉴 카테고리 컴포넌트

//scss 불러오기
import "../style/categoryMenuBar.scss"


const categoryMenuBar = ({check,setCheck}) => {

    return (
      <div id="categoryMenuBar">
        <ul id="menu">
            <li><p>신규맛집</p></li>
            <li><p>1인분</p></li>
            <li><p>한식</p></li>
            <li><p>치킨</p></li>
            <li><p>치킨</p></li>
            <li><p>치킨</p></li>
            <li><p>치킨</p></li>
        </ul>
      </div>
    );
  };
  export default categoryMenuBar;
  