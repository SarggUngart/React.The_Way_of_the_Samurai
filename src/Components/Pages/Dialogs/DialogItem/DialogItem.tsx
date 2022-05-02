import React, {FC} from 'react';
import styles from '../DialogItem/DialogItem.module.scss'
import {NavLink} from "react-router-dom";

export type DialogItemPropsType = {
  id: number
  name: string
}

export const DialogItem: FC<DialogItemPropsType> = props => {
  const {name, id} = props

  const activeDialog = (dialogs: any | null) => dialogs.isActive ? styles.active : styles.dialog
  const path = "/dialogs/" + id

  return (
    <li className={styles.dialogList}><NavLink to={path} className={activeDialog}>{name}</NavLink></li>
  )
}