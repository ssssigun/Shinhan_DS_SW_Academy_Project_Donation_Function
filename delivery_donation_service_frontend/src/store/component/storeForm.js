// scss 불러오기
import "../../common/style/reset.scss"
import "../../common/style/common.scss"
import "../style/storeForm.scss"

//컴포넌트 불러오기
import StoreHeader from"../component/StoreHeader";


const StoreForm = ({ image,children }) => {
    return (
      <div className="storeFormWrapper">
        <div className="storeFormTopArea">
          <StoreHeader/>
          <img src={image} alt=""></img>
        </div>
        <div className="storeFormBottomArea">
          {children}
        </div>
      </div>
    );
  };
  export default StoreForm;
  