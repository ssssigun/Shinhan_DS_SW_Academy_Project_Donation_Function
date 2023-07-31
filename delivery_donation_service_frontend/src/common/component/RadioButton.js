import { Children } from 'react'
import '../style/RadioButton.scss'

const RadioButton = ({ children, value, name, defaultChecked, disabled }) => {
  return (
    <label>
      <input type="radio" value={value} name={name} defaultChecked={defaultChecked} disabled={disabled} />
      {children}
    </label>
  )
}

export default RadioButton
