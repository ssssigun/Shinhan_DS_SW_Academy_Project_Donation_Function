import '../style/UpDownButton.scss'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

const UpDownButton = ({ buttonStyle }) => {
  return (
    <div className="upDownOption">
      <div className="downButton" style={buttonStyle}>
        <AiOutlineMinus />
      </div>
      1
      <div className="upButton" style={buttonStyle}>
        <AiOutlinePlus />
      </div>
    </div>
  )
}

export default UpDownButton
