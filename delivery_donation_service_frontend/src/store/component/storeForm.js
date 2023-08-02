// scss 불러오기
import "../../common/style/reset.scss"
import "../../common/style/common.scss"
import "../style/storeForm.scss"

const StoreForm = ({ image,children }) => {
    return (
      <div className="storeFormWrapper">
        <div className="storeFormTopArea">
          <p>StoreForm Test</p>
          <img src={image} alt=""></img>
        </div>
        <div className="storeFormBottomArea">
          {children}
        </div>
      </div>
    );
  };
  export default StoreForm;
  