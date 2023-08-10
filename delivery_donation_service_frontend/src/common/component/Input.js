import '../style/Input.scss';

const Input = ({ placeholder, type, value, defaultValue, onChange }) => {
  return (
    <input
      placeholder={placeholder}
      type={type}
      value={value}
      className="commonInput"
      defaultValue={defaultValue}
      onChange={onChange}
    ></input>
  );
};

export default Input;
