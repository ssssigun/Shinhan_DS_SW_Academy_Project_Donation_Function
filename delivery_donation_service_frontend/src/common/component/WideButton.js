import '../style/WideButton.scss'


const WideButton = ({ text, style, propFunction}) => {
  return (
    <button style={style} className="wideButton" type="" onClick={()=>propFunction()}>
      {text}
    </button>
  )
}

export default WideButton
