import React, { useState } from "react";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import { useSpring, animated } from "react-spring";
import AddEventForm from "../../components/Eventbox/add.js";

const ModalBackground = styled.div`
  width: 85%;
  height: 70%;
  background: rgba(0, 0, 0, 0.0);
  position: fixed;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

const ModalWrapper = styled.div`
  width: 330px;
  height: 542px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  display: grid;
  grid-template-columns: 1fr .2fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
`;

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