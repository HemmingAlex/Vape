import React, { useState, useEffect } from "react"
import styles from "./carousel.module.css"
import Circle from "./circles/Circle"

function Carousel() {

    const [active, setActive] = useState(1)
    const [position, setPosition] = useState([styles["initialLeft"], styles["initialCenter"],
    styles["initialRight"]]);
    const [direction, setDirection] = useState("none");

    let place = [
        styles["initialLeft"],
        styles["initialCenter"],
        styles["initialRight"],
    ]

    useEffect(() => {
        if (direction === "left") {
          place = position;
            place[active - 1] = `${styles[direction]} ${styles["moveOuter"]}`
            place[active] = `${styles[direction]} ${styles["moveCcenter"]}`
          setPosition(place);
        } else if (direction === "right") {
          place = position;
          place[active + 1] = `${styles[direction]} ${styles["moveOuter"]}`
          place[active] = `${styles[direction]} ${styles["moveCenter"]}`
          setPosition(place);
        } else {
          setPosition([
            styles["initialLeft"],
            styles["initialCenter"],
            styles["initialRight"],
          ])
        }
    }, [active])
    return (
        <div>                {position.map((input, index) => (
            <div key={index}  classname={input}>
{input}
                <div className={styles.carousel}>
                    <h1 className={styles.title}>Create. SUBMIT. Earn!</h1>

                    <div className={styles.description}>
                        Tap into the power of your creative customers for
                        branded content and authentic word-of-mouth influencer
                        marketing.
                    </div>
                    <div
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                            padding: "0px 50px",
                        }}
                    >
                        <div className={styles.left}>
                            <Circle icon={<div style={{maxWidth:"100px"}}><h1>
                                        JOIN AN ARMADA
                                    </h1>
                                    Unified by social content creation!

                                    </div>} />
                        </div>

                        <div className={styles.right}>
                            <Circle
                                icon={<h1>£££</h1>}
                                info={
                                    <div>
                                        £1000’s earned by creators every day!
                                    </div>
                                }
                            />
                            <Circle
                                icon={<h1>200+</h1>}
                                info={
                                    <div style={{ color: "white" }}>
                                        Campaigns available to make you money!
                                    </div>
                                }
                            />
                        </div>
                    </div>
                    </div>
                </div>))}
            
            <br />
            <br />
            <br />
{active !== 0 &&
<button onClick={()=>{
setDirection("left");
setActive(active-1);
            }}>left</button>
}            

{ active !== 2 &&           <button onClick={()=>{
                setDirection("right"); setActive(active+1);

            }}>right</button>
}        </div>
    )
}

export default Carousel
