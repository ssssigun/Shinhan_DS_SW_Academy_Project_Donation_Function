import { Children } from 'react';
import React, { useState } from 'react';
import '../style/CheckBox.scss';
import { MdCheck } from 'react-icons/md';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

const CheckBox = ({ children, value, name, checked, onChange, labelStyle }) => {
  return (
    <label className="checkboxLabel" style={labelStyle}>
      <input
        className="checkboxInput"
        type="checkbox"
        value={value}
        name={name}
        onChange={onChange}
        checked={checked}
      />
      {checked === true ? (
        <MdCheck style={{ color: '#FB521B' }}></MdCheck>
      ) : (
        // <img src="/image/radiobutton.png" alt="checked" />
        <MdCheck style={{ color: '#DDDDDD' }}> </MdCheck>

        // <img src="/image/radiobuttonunchecked.png" alt="unchecked" />
      )}
      {children}
      <MdOutlineKeyboardArrowDown></MdOutlineKeyboardArrowDown>
    </label>
  );
};

export default CheckBox;
