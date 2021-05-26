import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import {
    ModalBackground,
    ModalWrapper,
    ModalContent,
    CloseModalButton
  } from "./style.js";
import EditEventForm from "../../components/Eventbox/edit.js";
import axios from "axios";
import { useAuthCtx } from "../../Hooks/useAuthContext";

/*
  Detailbox component loads up a modal to "Edit Event." Through the use of EditEventForm
  we are able to send a post request using an axios method. Modal uses react-spring to 
  display with animation. Style.js and modal template made using tutorial from Youtuber
  "Brian Design." We use showDetailbox and setShowDetailbox to display the modal like an 
  off/on switch.
*/

const Detailbox = ({showDetailbox, setShowDetailbox, props }) => {
    // const prop = { event }
    // const URL = "/api/calendar/events/" + props.props.id.toString()
    const { user } = useAuthCtx();
    const animation = useSpring({
        config: {
            duration: 250
        },
        opacity: showDetailbox ? 1 : 0,
        transform: showDetailbox ? "translateY(0%)" : "translateX(+100%)"
    })
    console.log(props)
    console.log('ID OF PROP', props.props.id.toString())

    const [error, setError] = useState(null);
    const submitHandler = async (data) => {
      try {
        const response = await axios.post(URL, data, {
            headers: {
              "Authorization": `Token ${user.token}`
            }}).then(function (response) {
            // handle success
            console.log(response);
            })
            .catch(function (error) {
            // handle error
            console.log(error);
            })
            .then(function () {
            // always executed
        });
      } catch (err) {
        console.log(`err`);
        setError(`${err.message}`);
      }
    };

    return (
        <>
        {showDetailbox ? (
            <ModalBackground >
                <animated.div style={animation}>
                    <ModalWrapper showDetailbox={showDetailbox}>
                        <ModalContent>
                            <EditEventForm showDetailbox={showDetailbox} setShowDetailbox={setShowDetailbox} onSubmitData={submitHandler} props={props}/>
                        </ModalContent>
                        <CloseModalButton aria-label="Close Modal" onClick={() => setShowDetailbox (prev => !prev)} />
                    </ModalWrapper>
                </animated.div>
            </ModalBackground>
        ) : null}
        </>
    )
};

export default Detailbox;