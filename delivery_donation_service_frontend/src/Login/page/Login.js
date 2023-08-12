//로그인 페이지

//scss 불러오기
import '../style/Login.scss'

//컴포넌트 불러오기
import Input from '../../common/component/Input'
import WideButton from '../../common/component/WideButton'

//모듈 불러오기
import { useState,useRef } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [id, setId] = useState("");
  const [pwd, setpwd] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const infoId = (e) =>{
    setId(e.target.value);
  }
  const infoPwd = (e) =>{
    setpwd(e.target.value);
  }

  const inputId = useRef();
  const inputPwd = useRef();

  const submitInfo = () =>{
    if(id ==="" && pwd ===""){
      setMessage("아이디와 비밀번호를 입력해주세요");
      inputId.current.focus();
      return;

    }else if(id ===""){
      setMessage("아이디를 입력해주세요");
      inputId.current.focus();
      return;

    } else if(pwd ==="") {
      setMessage("비밀번호를 입력해주세요");
      inputPwd.current.focus();
      return;
    }
    //로그인 처리 (토큰 발급)
    axios({
      url: "/generateToken",
      method: 'post',
      data: {
        id : id,
        pwd : pwd
      }
    })
    .then(function a(response) { 
      console.log(response);
      //발급된 토큰을 localStage 저장
      localStorage.setItem("accessToken", response.data.accessToken);
      localStorage.setItem("refreshToken", response.data.arefreshToken);
      navigate("/");
    })
    .catch(function (error) {
      setMessage("아이디 혹은 비밀번호가 올바르지 않습니다!");
    });
  }
  return (
    <div className="login">
      <img class="logo" src="/image/Logo.png" alt=''/>
      <div className="loginWrapper">
        <Input placeholder=" 아이디" propFunction={infoId} myInputRef={inputId}></Input>
        <Input placeholder=" 비밀번호" type="password" propFunction={infoPwd} myInputRef={inputPwd}></Input>
        {/* 패스워드타입 */}
        <p className='loginMessage'> {message}</p>
        <WideButton style={{ background: '#FB521B' }} text="로그인" propFunction={submitInfo}></WideButton>
        <WideButton style={{ background: '#7D7D7D' }} text="회원가입"></WideButton>
      </div>
    </div>
  )
}

export default Login
