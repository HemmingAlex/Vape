import React, { useState, useEffect } from "react"
import styles from "./carousel.module.css"
import Info from "./Info.jsx"

function Carousel() {
    //controller is the active (center) card
    const [controller, setController] = useState({
        active: 1,
        direction: "none",
    })

    //position is the movment and placement of all cards in an array
    const [position, setPosition] = useState([        { direction: "toRight",reverse:"noAnimation" },
    { direction: "initialCenter", reverse:"noAnimation" },
    { direction: "toLeft",reverse:"noAnimation" },])

    // this is a holding place to manage state
    let store = [];
    
    useEffect(() => {
        if (controller.direction === "toRight") {
            store = position
            //the active card moved to the right

            store[controller.active] = {
                direction: controller.direction,
                //none active card always moved outer
                reverse: "toCenter",
            }
            // the previously active card moves in the same direction
            // as the active one
            store[controller.active + 1] = {
                direction: "toLeft",
                //active card always in the center

                reverse: "toOuter",
            }

            setPosition([...store])
        } else if (controller.direction == "toLeft") {
            if (controller.active == 2) {
                console.log("max right")
            }

            //the active card moved to the left
            store = position
            store[controller.active] = {
                direction: controller.direction,
                //active card always in the center
                reverse: "toCenter",
            }
            // the previously active card moves in the same direction
            //as the active one but in the reverse style of the left movment
            store[controller.active - 1] = {
                direction: "toRight",
                //non active card always on the outside.
                reverse: "toOuter",
            }
            setPosition([...store])
        } else {
        }
    }, [controller.active])

    return (
        <div className={styles.container}>        
           
             {controller.active !== 0 && (
                <button
                    onClick={() => {
                        //clicking left makes the left card activateed (move right)
                        //and the previously active card move right
                        //hence all cards move right
                        setController((controller) => {
                            return {
                                active: controller.active - 1,
                                direction: "toRight",
                            }
                        })
                    }}
                >
                    left
                </button>
            )}
             {controller.active !== 2 && (
                <button
                    onClick={() => {
                        setController((controller) => {
                            return {
                                active: controller.active + 1,
                                direction: "toLeft",
                            }
                        })
                    }}
                >
                    right
                </button>
            )}{" "}
            <br />
            <br />
            <br />
            <br />
            <br />{" "}
            <div
                style={{
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                {position.map((input, index) => (
                    <div
                        key={index}
                        className={`${styles[input.direction]} ${
                            styles[input.reverse]
                        }`}
                    >
                        <Info />
                    </div>
                ))}
                <br />
                <br />
                <br />
               
            </div>
        </div>
    )
}

export default Carousel
