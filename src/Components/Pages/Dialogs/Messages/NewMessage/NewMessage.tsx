import React, {ChangeEvent, FC} from 'react';
import styles from "../NewMessage/NewMessage.module.scss";
import {ActionsTypes,} from "../../../../../redux/store";
import {addMessageAC, updateMessageAC} from "../../../../../redux/dialogs-reducer";

type NewMessagePostType = {
  newMessage: string
  dispatch: (action: ActionsTypes) => void
}

export const NewMessage: FC<NewMessagePostType> = props => {
  const {newMessage, dispatch} = props

  const addMessageHandler = () => {
    dispatch(addMessageAC(newMessage))
  }

  const onChangeMessageTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const newMessageText = e.currentTarget.value
    dispatch(updateMessageAC(newMessageText))
  }

  return (
    <div className={styles.newMessage}>
      <textarea value={newMessage} onChange={onChangeMessageTextHandler} className={styles.textArea}/>
      <button onClick={addMessageHandler} className={styles.btn}>Send</button>
    </div>
  );
};

