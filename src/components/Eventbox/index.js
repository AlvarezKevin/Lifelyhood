import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import AddEventForm from "../../components/Eventbox/add.js";
import {
    ModalBackground,
    ModalWrapper,
    ModalContent,
    CloseModalButton
  } from "./style.js";

const Eventbox = ({showEventbox, setShowEventbox}) => {
    const animation = useSpring({
        config: {
            duration: 250
        },
        opacity: showEventbox ? 1 : 0,
        transform: showEventbox ? "translateY(0%)" : "translateX(+100%)"
    })

    const [error, setError] = useState(null);
    const submitHandler = async (data) => {
      try {
        const { title, password } = data;
        // if (email !== adminUser.email) {
        //   throw new Error("Invalid Email");
        // } else if (password !== adminUser.password) {
        //   throw new Error("Invalid Password");
        // }
        // setUserDetails({
        //   username: "Anonymous",
        //   email,
        //   token: "a1s2d3f4cdfsdf",
        // });
      } catch (err) {
        console.log(`err`);
        setError(`${err.message}`);
      }
    };

    return (
        <>
        {showEventbox ? (
            <ModalBackground >
                <animated.div style={animation}>
                    <ModalWrapper showEventbox={showEventbox}>
                        <ModalContent>
                            <AddEventForm showEventbox={showEventbox} setShowEventbox={setShowEventbox} onSubmitData={submitHandler}/>
                        </ModalContent>
                        <CloseModalButton aria-label="Close Modal" onClick={() => setShowEventbox (prev => !prev)} />
                    </ModalWrapper>
                </animated.div>
            </ModalBackground>
        ) : null}
        </>
    )
};

export default Eventbox;