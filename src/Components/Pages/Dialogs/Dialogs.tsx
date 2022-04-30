import React, {FC} from 'react';
import styles from './Dialogs.module.scss'
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
  name: string
  id: string
}

export const DialogItem: FC<DialogItemPropsType> = props => {
  const {name, id} = props

  const activeDialog = (dialogs: any | null) => dialogs.isActive ? styles.active : styles.dialog
  const path = "/dialogs/" + id

  return (
    <li className={styles.dialogList}><NavLink to={path} className={activeDialog}>{name}</NavLink></li>
  )
}


type MessagesPropsType = {
  messageText: string
}

export const Messages: FC<MessagesPropsType> = props => {
  const {messageText} = props

  return (
    <>
      <div className={styles.message}>{messageText}</div>
    </>
  )
}


export const Dialogs = () => {


  return (
    <>
      <div className={styles.dialogs}>

        <ul className={styles.dialogItems}>
          <DialogItem name={'Sergei'} id={'1'}/>
          <DialogItem name={'Bob'} id={'2'}/>
          <DialogItem name={'Andrey'} id={'3'}/>
          <DialogItem name={'Igor'} id={'4'}/>
        </ul>


        <div className={styles.messages}>
          <Messages messageText={'Hello world'}/>
          <Messages messageText={'Dude, where is my car?'}/>
          <Messages messageText={'The roof is on fire'}/>
        </div>

      </div>


    </>
  );
};

