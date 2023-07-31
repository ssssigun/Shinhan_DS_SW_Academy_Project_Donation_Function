import '../style/WideButton.scss'

const WideButton = ({ text, style }) => {
  return (
    <button style={style} className="wideButton" type="">
      {text}
    </button>
  )
}

export default WideButton
