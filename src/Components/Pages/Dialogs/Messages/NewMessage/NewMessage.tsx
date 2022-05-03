import React from 'react';
import styles from "../NewMessage/NewMessage.module.scss";

export const NewMessage = () => {

  const addMessageHandler = () => {

  }

  return (
    <div className={styles.newMessage}>
      <textarea className={styles.textArea}/>
      <button onClick={addMessageHandler} className={styles.btn}>Send</button>
    </div>
  );
};

