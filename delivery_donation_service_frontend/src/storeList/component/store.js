// 가게 (한개)

//scss 불러오기
import "../style/store.scss"

//react-icons 불러오기
import {MdOutlineWatchLater} from "react-icons/md";

//react-icons 스타일 적용
const style ={
  "width": "18px",
  "height": "18px",
  "color" : "#DDDDDD"
}

const store = () => {
    return (
      <div>
        <div  className="imageArea">
          {/* <img src="" alt=""></img> */}
          <div className="storeImage"></div>{/* 임시 이미지*/}
        </div>
        <ul className="textArea">
          <li className="textBar"> 
          <span className="title">대한냉면 마포점</span>
              <div className="time">
                <MdOutlineWatchLater style={style}/>
                <span>37~52분</span>
            </div>
          </li>
          <li className="textBar"> 
            <div>
              <span className="smallText">리뷰</span>
              <span>99</span>
            </div>
            <div>
              <span className="smallText">배달비</span>
              <span>무료 ~ 1,000원</span>
            </div>  
          </li>
          <li className="textBar">
            <span className="deliverText">배달/포장</span>
          </li>
        </ul>
      </div>
    );
  };
  export default store;
  