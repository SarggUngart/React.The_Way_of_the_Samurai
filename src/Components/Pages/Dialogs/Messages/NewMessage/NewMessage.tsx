import React, {ChangeEvent, FC} from 'react';
import styles from "../NewMessage/NewMessage.module.scss";

type NewMessageType = {
  newMessage: string,
  onChangeMessageCallBack: (newMessageText: string) => void
  addMessageCallBack: (newMessage: string) => void
}


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

