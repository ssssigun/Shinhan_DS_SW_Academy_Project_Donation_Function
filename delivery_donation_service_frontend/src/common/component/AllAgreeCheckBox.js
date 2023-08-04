import '../style/AllAgreeCheckBox.scss';
import { MdCheck } from 'react-icons/md';

const AllAgreeCheckBox = ({ children, value, name, checked, onChange, labelStyle }) => {
  return (
    <label className="checkboxLable" style={labelStyle}>
      <div className="checkUsed">
        <input
          className="checkboxInput"
          type="checkbox"
          value={value}
          name={name}
          onChange={onChange}
          checked={checked}
        />
        {checked === true ? (
          <div className="AllAgreeCheckButton" style={{ background: '#FB521B' }}>
            <MdCheck style={{ color: '#FFFFFF' }}></MdCheck>
          </div>
        ) : (
          <div className="AllAgreeCheckButton" style={{ background: '#DDD' }}>
            <MdCheck style={{ color: '#FFFFFF' }}></MdCheck>
          </div>
        )}
        {children}
      </div>
    </label>
  );
};

export default AllAgreeCheckBox;
