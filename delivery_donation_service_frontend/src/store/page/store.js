// 컴포넌트 불러오기
import DeliverySelect from "../../common/component/deliverySelect";
import OrderBox from "../../common/component/orderBox";
import MenuListOne from "../component/menuListOne";
import MenuFilter from "../component/menuFilter";
// scss 불러오기
import "../../common/style/reset.scss"
import "../../common/style/common.scss"
import "../style/store.scss"

const Store = () => {
    return (
      <div>
        <p>Store Test</p>
        <DeliverySelect/>
        <MenuFilter/>
        <MenuListOne/>
        <OrderBox/>
      </div>
    );
  };
  export default Store;
  