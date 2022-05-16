import React, {ChangeEvent, FC} from 'react';
import styles from "../NewMessage/NewMessage.module.scss";
import {NewMessageType} from "./NewMessageContainer";



export const NewMessage: FC<NewMessageType> = props => {
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

