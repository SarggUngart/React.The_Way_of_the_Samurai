import React, {FC} from "react";
import {Messages} from "./Messages/Messages";
import {DialogItem} from "./DialogItem/DialogItem";
import styles from "./Dialogs.module.scss";
import {NewMessage} from "./Messages/NewMessage/NewMessage";
import {DialogsPropsType} from "./DialogsContainer";


export const Dialogs: FC<DialogsPropsType> = props => {
  const {dialogs, messages, newMessage, updateNewMessageText, addNewMessage} = props

  const dialogsEl = dialogs.map(d => <div key={d.id}><DialogItem id={d.id} name={d.name}/>
  </div>)
  const messagesEl = messages.map(m => <div key={m.id}><Messages id={m.id} messageText={m.message}/>
  </div>)

  return (
    <>
      <div className={styles.dialogs}>
        <ul className={styles.dialogItems}>
          {dialogsEl}
        </ul>
        <div className={styles.messages}>
          {messagesEl}
          <div>
            <div>
              <NewMessage newMessage={newMessage}
                          onChangeMessageCallBack={updateNewMessageText}
                          addMessageCallBack={addNewMessage}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};