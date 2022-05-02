import React, {FC} from "react";
import {Messages} from "./Messages/Messages";
import {DialogItem} from "./DialogItem/DialogItem";
import styles from "./Dialogs.module.scss";
import {DialogsDataPropsType, MessagesDataPropsType} from "../../../index";


type DialogsPropsType = {
  dialogsData: DialogsDataPropsType[]
  messagesData: MessagesDataPropsType[]
}


export const Dialogs: FC<DialogsPropsType> = props => {
  const {dialogsData, messagesData} = props


  const dialogsEl = dialogsData.map(d => <div key={d.id}><DialogItem id={d.id} name={d.name}/></div>)
  const messagesEl = messagesData.map(m => <div key={m.id}><Messages id={m.id} messageText={m.message}/></div>)


  return (
    <>
      <div className={styles.dialogs}>
        <ul className={styles.dialogItems}>
          {dialogsEl}
        </ul>
        <div className={styles.messages}>
          {messagesEl}
        </div>
      </div>
    </>
  );
};