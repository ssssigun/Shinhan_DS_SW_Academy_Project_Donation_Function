// 가게 (한개)

//scss 불러오기
import "../style/store.scss"

//react-icons 불러오기
import {MdOutlineWatchLater} from "react-icons/md";

const store = (prop) => {
    return (
      <>
        <div  className="imageArea">
          <div className="storeImage"  style={{ "background-image":`url(${prop.st.storeImage})`}}>  {/*가게 이미지*/}
            <div className="storeImageNumber"><span>{prop.st.donationMenuTotal}</span></div>
          </div>
        </div>
        <ul className="textArea">
          <li className="textBar"> 
          <span className="title">{prop.st.storeName}</span>
              <div className="time">
                <MdOutlineWatchLater className="storeWatchLate"/>
                <span>{prop.st.deliveryTime}</span>
            </div>
          </li>
          <li className="textBar"> 
            <div>
              <span className="smallText">리뷰</span>
              <span className="smallTextNumber">{prop.st.review}</span>
            </div>
            <div>
            <span className="deliverText">배달/포장</span>
            </div>  
          </li>
        </ul>
      </>
    );
  };
  export default store;
  