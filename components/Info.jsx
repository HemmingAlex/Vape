import React from "react";
import styles from "./carousel.module.css";
import Circle from "./circles/Circle";
import OrnageCircle from "./circles/OrangeCircle";
import WhiteCircle from "./circles/WhiteCircle";

function Info() {
  return (
    <div>
      <div className={styles.carousel}>
        <h1 className={styles.title}>
          CREATE
          <div className={styles.orange}>.&nbsp;</div> SUBMIT
          <div className={styles.orange}>. &nbsp;</div>
          EARN<div className={styles.orange}> &nbsp;!</div>
        </h1>
        <div className={styles.description}>
          Tap into the power of your creative customers for branded content and
          authentic word-of-mouth influencer marketing.
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            padding: "0px 50px",
          }}
        >
          <div className={styles.left}>
            <Circle
              icon={
                <div style={{ maxWidth: "200px", margin: "0px" }}>
                  <h1 className={styles.armada}>JOIN AN ARMADA</h1>
                  <div className={styles.unified}>
                    {" "}
                    Unified by social content creation!
                  </div>
                </div>
              }
            />
          </div>

          <div className={styles.right}>
            <WhiteCircle
              icon={<h1>200+</h1>}
              info={
                <div style={{ color: "white" }}>
                  Campaigns available to make you money!
                </div>
              }
            />
            <OrnageCircle
              icon={<h1>£££</h1>}
              info={<div>£1000’s earned by creators every day!</div>}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
