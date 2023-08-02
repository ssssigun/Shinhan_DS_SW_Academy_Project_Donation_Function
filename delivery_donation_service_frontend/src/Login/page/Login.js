import { useCallback } from 'react'
import Input from '../../common/component/Input'
import '../style/Login.scss'
import WideButton from '../../common/component/WideButton'

const Login = () => {
  return (
    <div className="login">
      <img class="logo" src="/image/Logo.png" />
      <div className="loginWrapper">
        <Input placeholder="아이디"></Input>
        <Input placeholder="비밀번호" type="password"></Input>
        {/* 패스워드타입 */}
        <WideButton style={{ background: '#FB521B' }} text="로그인"></WideButton>
        <WideButton style={{ background: '#7D7D7D' }} text="회원가입"></WideButton>
      </div>
    </div>
  )
}

export default Login
