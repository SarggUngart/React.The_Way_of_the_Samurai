import React, {FC} from 'react';
import styles from '../DialogItem/DialogItem.module.scss'
import {NavLink} from "react-router-dom";

type DialogsType = {
  id: number
  name: string
}

export const DialogItem: FC<DialogsType> = props => {
  const {id, name} = props

  const activeDialog = (dialogs: any | null) => dialogs.isActive ? styles.active : styles.dialog
  const path = "/dialogs/" + id

  return (

    <li className={styles.dialogList}><NavLink to={path} className={activeDialog}>{name}</NavLink></li>
  )
}