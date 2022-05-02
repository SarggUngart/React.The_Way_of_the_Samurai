import React, {FC} from "react";
import styles from "../Messages/Messages.module.scss";


type MessagesPropsType = {
  id: number
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