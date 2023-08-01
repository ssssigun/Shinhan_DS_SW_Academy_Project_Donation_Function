import '../style/UpDownButton.scss'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

const UpDownButton = ({}) => {
  return (
    <div className="upDownOption">
      <div className="downButton">
        <AiOutlineMinus />
      </div>
      1
      <div className="upButton">
        <AiOutlinePlus />
      </div>
    </div>
  )
}

export default UpDownButton
