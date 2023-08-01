import '../style/OrderStore.scss'

const OrderStore = ({ type }) => {
  return (
    <div className="orderStore">
      <div className="Type">{type}</div>
      <div className="title">
        <div className="StoreName">대한냉면 마포점</div>
        <div className="MenuName"></div>
      </div>
    </div>
  )
}

export default OrderStore
