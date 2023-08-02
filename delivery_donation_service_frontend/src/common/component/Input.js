import '../style/Input.scss';

const Input = ({ placeholder, type, defaultValue }) => {
  return <input placeholder={placeholder} type={type} className="commonInput" defaultValue={defaultValue}></input>;
};

export default Input;
