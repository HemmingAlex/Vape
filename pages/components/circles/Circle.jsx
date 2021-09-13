import React from "react";
import styles from "./circle.module.css";

// interface CircleTypes {
// info:string
// }

function Circle({ info, icon }) {
  return (
    <div className={styles.container}>
      <div className={styles.quotewrapper}>
        <div className={styles.text}>{icon}</div>
      </div>
      <div className={styles.info}>{info}</div>
    </div>
  );
}

export default Circle;
