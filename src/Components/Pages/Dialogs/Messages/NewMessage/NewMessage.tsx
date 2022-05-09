import React, {ChangeEvent, FC} from 'react';
import styles from "../NewMessage/NewMessage.module.scss";

type NewMessagePostType = {
  newMessage:string
  addMessageCallBack: (newMessage:string) => void
  onChangeMessageCallBack: (newMessage:string) => void
}

export const NewMessage: FC<NewMessagePostType> = props => {
  const {newMessage, onChangeMessageCallBack, addMessageCallBack} = props

  const addMessageHandler = () => {
    addMessageCallBack(newMessage)
  }

  const onChangeMessageTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const newMessageText = e.currentTarget.value
    onChangeMessageCallBack(newMessageText)
  }

  return (
    <div className={styles.newMessage}>
      <textarea value={newMessage} onChange={onChangeMessageTextHandler} className={styles.textArea}/>
      <button onClick={addMessageHandler} className={styles.btn}>Send</button>
    </div>
  );
};

