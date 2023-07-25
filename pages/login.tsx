import Header from "components/Header";
import styles from "@styles/Login.module.scss";
import axios from "axios";
import { useRef, useState } from "react";
import { useRouter } from "next/router";
import { useCookies } from 'react-cookie';

const Login = () => {
  const [userId, setUserId] = useState<string>('');
  const [userPwd, setUserPwd] = useState<string>('');
  const [cookie, setCookie, removeCookie] = useCookies(['info']);

  const router = useRouter();

  const onIdHandler = (e: any) => {
    setUserId(e.currentTarget.value);
  }

  const onPwdHandler = (e: any) => {
    setUserPwd(e.currentTarget.value);
  }

  const getLogin = (e: any) => {
    e.preventDefault();
  
    axios
      .post("https://boazhowmuch.com/login", {
        username: userId,
        password: userPwd,
      })
      .then((res) => {
        console.log(res.data)
        console.log(res.data.message);
        if (res.data.message == "로그인에 성공하였습니다.") {
          setCookie('info', { 
            loggedin: res.data.loggedin, 
            account_id: res.data.account_id, 
            username: res.data.username
          });
          router.push('/chat');
        } else {
          alert(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

 
  return (
    <>
      <Header />
      <h2 style={{ textAlign: "center", fontWeight: 400 }}>로그인</h2>
      <div className={styles.inputForm}>
        <input className={styles.inputBtn} type="text" name="id" placeholder="아이디" onChange={onIdHandler}/>
        <input 
        className={styles.inputBtn} type="password" 
        name="password" 
        placeholder="비밀번호" 
        onChange={onPwdHandler}
        />
				<button onClick={getLogin} className={styles.loginBtn}>로그인하기</button>
      </div>
    </>
  );
};

export default Login;
