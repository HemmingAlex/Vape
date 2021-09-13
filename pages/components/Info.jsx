import React from 'react'
import styles from "./carousel.module.css"
import Circle from "./circles/Circle"
import OrnageCircle from "./circles/OrangeCircle"
import WhiteCircle from "./circles/WhiteCircle"


function Info() {
    return (
        <div>
              <div className={styles.carousel}>
                            <h1 className={styles.title}>
                            Create
                            <div className={styles.orange}>.{" "}</div> SUBMIT<div className={styles.orange}>.{" "}</div> Earn<div className={styles.orange}>!</div> 
                            </h1>
                            <h1></h1>
                            <div className={styles.description}>
                                Tap into the power of your creative customers
                                for branded content and authentic word-of-mouth
                                influencer marketing.
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
                                            <div style={{ maxWidth: "100px" }}>
                                                <h1>JOIN AN ARMADA</h1>
                                                Unified by social content
                                                creation!
                                            </div>
                                        }
                                    />
                                </div>

                                <div className={styles.right}>
                                    <OrnageCircle
                                        icon={<h1>£££</h1>}
                                        info={
                                            <div>
                                                £1000’s earned by creators every
                                                day!
                                            </div>
                                        }
                                    />
                                    <WhiteCircle
                                        icon={<h1>200+</h1>}
                                        info={
                                            <div style={{ color: "white" }}>
                                                Campaigns available to make you
                                                money!
                                            </div>
                                        }
                                    />
                                </div>
                            </div>
                        </div>
        </div>
    )
}

export default Info
