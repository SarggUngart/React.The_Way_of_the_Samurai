import React, {FC} from "react";
import {Messages} from "./Messages/Messages";
import {DialogItem} from "./DialogItem/DialogItem";
import styles from "./Dialogs.module.scss";
import {DialogPageType,} from "../../../redux/state";
import {NewMessage} from "./Messages/NewMessage/NewMessage";

type DialogsPropsType = {
  dialogsState: DialogPageType
}

export const Dialogs: FC<DialogsPropsType> = props => {
  const {dialogsState} = props

  const dialogsEl = dialogsState.dialogs.map(d => <div key={d.id}><DialogItem id={d.id} name={d.name} />
  </div>)
  const messagesEl = dialogsState.messages.map(m => <div key={m.id}><Messages id={m.id} messageText={m.message}/>
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
           <div >
             <NewMessage/>
           </div>
         </div>
        </div>
      </div>
    </>
  );
};