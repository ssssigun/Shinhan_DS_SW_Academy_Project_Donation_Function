import '../style/Input.scss';

const Input = ({ placeholder, type, value, defaultValue, onChange, myInputRef}) => {
  return <input placeholder={placeholder} type={type} value={value} className="commonInput" defaultValue={defaultValue} onChange={onChange} ref={myInputRef}></input>;
};

export default Input;
