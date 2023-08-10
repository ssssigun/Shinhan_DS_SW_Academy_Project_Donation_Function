import '../style/Input.scss';

const Input = ({ placeholder, type, defaultValue, propFunction,myInputRef}) => {
  return <input placeholder={placeholder} type={type} className="commonInput" defaultValue={defaultValue} onChange={propFunction} ref={myInputRef}></input>;
};

export default Input;
