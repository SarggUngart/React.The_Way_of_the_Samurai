import React from 'react';
import styles from "../../ProfileInfo/Avatar/Avatar.module.scss";

export const Avatar = () => {
  return (

    <img className={styles.avatar}
         src="https://upload.wikimedia.org/wikipedia/commons/6/66/%D0%9A._%D0%9F._%D0%91%D1%80%D1%8E%D0%BB%D0%BB%D0%BE%D0%B2._%D0%9F%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82_%D0%9D.%D0%90._%D0%9E%D1%85%D0%BE%D1%82%D0%BD%D0%B8%D0%BA%D0%BE%D0%B2%D0%B0_%281827_%D0%B3%D0%BE%D0%B4%29.jpg"
         alt="avatar"/>

  );
};
