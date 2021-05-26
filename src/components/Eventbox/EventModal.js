import React, { useState, useEffect } from "react";
import "../../styles/Events.css";
import styled from 'styled-components';
import axios from "axios";
import { useAuthCtx } from "../../Hooks/useAuthContext";
import Detailbox from "../../components/Eventbox/detail"

const Button = styled.button`
    width: 300px;
    height: 250px;
    border-radius: 17px;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-top: 10px;
    cursor: pointer;
`;

/*
    Container component that would keep the event details of the events retrieved
    and would enable you to edit/delete the event chosen
*/
const URL = "/api/calendar/events/"
const EventModal = (props) => {
    const { user } = useAuthCtx();
    const [event, setEvent] = useState(props);
    const [showDetailbox, setShowDetailbox] = useState(false);

    const openDetailbox = () => {
        setShowDetailbox(prev => !prev);
        console.log(showDetailbox)
    };

    console.log(JSON.stringify(props.props.title));
    console.log(typeof props.props.start)
    return (
        <>
            <Button onClick={openDetailbox}>
                <div className="event-text">hi</div>
                <div className="event-text">Title: { props.props.title }</div>
                {props.props.desc ? (<div className="event-text">Desc: {props.props.desc}</div>) : null}
                <div className="event-text">ID: { props.props.id }</div>
                <div className="event-text">Date Start: { props.props.start.toDateString()}</div>
                <div className="event-text">Time Start: { props.props.start.toLocaleTimeString()}</div>
                <div className="event-text">Date End: { props.props.end.toDateString()}</div>
                <div className="event-text">Time End: { props.props.end.toLocaleTimeString()}</div>
            </Button>
            <Detailbox showDetailbox={showDetailbox} setShowDetailbox={setShowDetailbox} props={props} />
        </>
    )
};

export default EventModal;
