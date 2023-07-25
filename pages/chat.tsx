import Header from "components/Header";
import styles from "@styles/Chat.module.scss";
import { Chatbot, User } from "@images/index";
import axios from "axios";
import { useEffect, useRef, useState } from "react";

const Chat = () => {
  const [userChat, setUserChat] = useState<string>("");
  const [chatList, setChatList] = useState<Array<string>>([]);

  const textBox = useRef<HTMLInputElement>(null);
  const submitBtn = useRef(null);

  const sendChat = (e: any) => {
    // e.preventDefault();
    let userChat = textBox.current ? textBox.current.value : "";
    setUserChat(userChat);
    setChatList((prev) => [...prev, userChat]);

    axios
    	.post("https://boazhowmuch.com/send_message", {
    		message: "2023.12.31"
    	}, {
        withCredentials: true
      })
    	.then((res) => {
    		console.log(res.data);
    	})
    	.catch((err) => {
    		console.log(err);
    	});

    if (textBox.current) {
      textBox.current.value = "";
    }
  };

  /* Enter 입력이 되면 클릭 이벤트 실행 */
  const handleOnKeyPress = (e: any) => {
    if (e.key === 'Enter') {
      sendChat(submitBtn);
    }
  };

  /* 챗봇 답변 추가 */
  useEffect(() => {
    let botChat = "안녕하세요. 꽃 사입 계획을 도와드리는 챗봇 How-much 입니다.";
    let chatArr = [...chatList];
    chatArr.push(botChat);
    setChatList(chatArr);
  }, [userChat]);

  /* 채팅 입력 시 스크롤 맨 아래로 */ 
  useEffect(() => {
    let mySpace = document.getElementById("chatBox");
    if (mySpace) {
      mySpace.scrollTop = mySpace.scrollHeight + 500;
    }
  }, [chatList])

  return (
    <>
      <Header />
      <div id="chatBox" className={styles.textBox} ref={textBox}>
        {chatList &&
          chatList.map((item, i) =>
            i % 2 == 0 ? (
              <div className={styles.chatbotBox} key={i}>
                <Chatbot className={styles.profileImg} />
                <p className={styles.chatbotText}>{item}</p>
              </div>
            ) : (
              <div className={styles.userChatBox} key={i}>
                <p className={styles.userChatText}>{item}</p>
                <User className={styles.profileImg} />
              </div>
            )
          )}

      </div>
      <div className={styles.inputBox}>
        <input
          className={styles.inputBtn}
          type="text"
          name="chat"
          placeholder="채팅을 입력하세요."
          ref={textBox}
          onKeyPress={handleOnKeyPress}
        />
        <button className={styles.sendBtn} onClick={sendChat} ref={submitBtn}>
          전송
        </button>
      </div>
    </>
  );
};

export default Chat;
