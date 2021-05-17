import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

const Detailbox = ({showDetailbox, setShowDetailbox, event}) => {
    const event = { event }
    const animation = useSpring({
        config: {
            duration: 250
        },
        opacity: showDetailbox ? 1 : 0,
        transform: showDetailbox ? "translateY(0%)" : "translateX(+100%)"
    })
    console.log(event)

    return (
        <>
        {/* {showDetailbox ? (
            <ModalBackground >
                <animated.div style={animation}>
                    <ModalWrapper showEventbox={showEventbox}>
                        <ModalContent>
                            <h1></h1>
                        </ModalContent>
                        <CloseModalButton aria-label="Close Modal" onClick={() => setShowDetailbox (prev => !prev)} />
                    </ModalWrapper>
                </animated.div>
            </ModalBackground>
        ) : null} */}
        <h1>{event.title}</h1>
        </>
    )
};

export default Detailbox;