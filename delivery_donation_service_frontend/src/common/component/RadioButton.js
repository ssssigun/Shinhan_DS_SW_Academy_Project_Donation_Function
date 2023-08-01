import { Children } from 'react'
import React, { useState } from 'react'
import '../style/RadioButton.scss'

const RadioButton = ({ children, value, name, checked, onChange, labelStyle }) => {
  console.log(checked)
  return (
    <label style={labelStyle}>
      <input type="radio" value={value} name={name} onChange={onChange} checked={checked} />

      {checked === true ? (
        <img src="/image/radiobutton.png" alt="checked" />
      ) : (
        <img src="/image/radiobuttonunchecked.png" alt="unchecked" />
      )}
      {children}
    </label>
  )
}

export default RadioButton
