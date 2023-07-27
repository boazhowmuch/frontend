import Header from "components/Header";
import styles from "@styles/Chat.module.scss";
import { Chatbot, User } from "@images/index";
import axios from "axios";
import { useEffect, useRef, useState } from "react";

const Chat = () => {
  const [chatList, setChatList] = useState<Array<string>>(["안녕하세요. 꽃 사입 계획을 도와드리는 챗봇 How-much 입니다."]);

  const textBox = useRef<HTMLInputElement>(null);
  const submitBtn = useRef(null);

  const sendChat = (e: any) => {
    let userChat = textBox.current ? textBox.current.value : "";
    setChatList((prev) => [...prev, userChat]);

    axios
    	.post("https://boazhowmuch.com/send_message", {
        account_id: 1,
        username: 'test',
    		message: userChat,
    	}, {
        withCredentials: true
      })
    	.then((res) => {
    		// console.log(res.data.message);
        setChatList((prev) => [...prev, res.data.message]);
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
