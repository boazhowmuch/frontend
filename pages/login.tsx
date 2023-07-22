import Header from "components/Header";
import styles from "@styles/Login.module.scss";
import FormPropsTextFields from "components/FormPropsTextFields";
import axios from "axios";
import { useRef, useState } from "react";
import { useRouter } from "next/router";

const Login = () => {
  const [userId, setUserId] = useState<string>('');
  const [userPwd, setUserPwd] = useState<string>('');

  const router = useRouter();

  const userIdInput = useRef<HTMLInputElement>(null);
  const userPwdInput = useRef<HTMLInputElement>(null);

  const onIdHandler = (e: any) => {
    setUserId(e.currentTarget.value);
  }

  const onPwdHandler = (e: any) => {
    setUserPwd(e.currentTarget.value);
  }


  const getLogin = (e: any) => {
    e.preventDefault();
  
    axios
      .post("/api/login", {
        username: userId,
        password: userPwd,
      })
      .then((res) => {
        console.log(res.data.message);
        if (res.data.message == "로그인에 성공하였습니다.") {
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
        <input className={styles.inputBtn} type="text" name="id" placeholder="아이디" onChange={onIdHandler} ref={userIdInput}/>
        <input className={styles.inputBtn} type="password" name="password" placeholder="비밀번호" onChange={onPwdHandler} ref={userPwdInput}/>
				<button onClick={getLogin} className={styles.loginBtn}>로그인하기</button>
      </div>
    </>
  );
};

export default Login;
