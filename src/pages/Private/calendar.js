import React, { useLayoutEffect, Component, useEffect, setState, useState } from "react";
// import { Link } from "react-router-dom";
// import { render } from "react-dom";
import ProfileNav from "../../components/ProfileNav";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import PrivateLayout from "../../Layout/Private";
import styled from 'styled-components'
import Eventbox from "../../components/Eventbox"
import Detailbox from "../../components/Eventbox"
import events from "../../components/Eventbox/events.js"
import "../../styles/Calendar.css"
import axios from "axios";
import { useAuthCtx } from "../../Hooks/useAuthContext";

const Button = styled.button`
    min-width: 100px;
    padding: 10px 18px;
    border-radius: 4px;
    border: none;
    background: #b2c2a3;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
    margin: 10px;
`;

moment.locale("en-US");
const localizer = momentLocalizer(moment)
// const URL = "http://127.0.0.1:8000/api/calendar/events/"
const URL = "/api/calendar/events/"

const MyCalendar = () => {
    const { setUserDetails } = useAuthCtx();
    const [userEvents, setUserEvents] = useState({});
    const [showEventbox, setShowEventbox] = useState(false);
    const [showDetailbox, setShowDetailbox] = useState(false);
    let myEventsList = {}
    
    useEffect(() => {
        getEvents();
    }, []);

    const getEvents = async () => {
        const response = await axios.get(URL).then(json => {
            const events = json.data.map(data =>
              {return {
                title: data.title,
                start: data.startDate,
                end: data.endDate,
                desc: data.description
              }}
            );
            // myEventsList = events
            setUserEvents(events)
            console.log(json.data)
            console.log(events)
            console.log([userEvents])
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
          .then(function () {
            // always executed
          });
    }

    const openEventbox = () => {
        setShowEventbox(prev => !prev);
    };

    const openDetailbox = () => {
        setShowDetailbox(prev => !prev);
    };
    // TO DO: Create an event modal wrapper that contains the data of a 
    // selected event on the calendar which allows more description of the
    // event and can possibly delete or update it.

    // console.log(myEventsList)
    // console.log(events)
    console.log(myEventsList)
    return (
        <PrivateLayout>
            <ProfileNav />
            <div className="main-calendar">
                <Calendar className="calendar"
                    localizer = { localizer }
                    events = { [userEvents] }
                    startAccessor = "start"
                    endAccessor = "end"
                    style = {{ height: 500 }}
                    // onSelectEvent = {event => Detailbox({event})}
                    onSelectEvent = {event => alert(`Title: ${event.title} Description: ${event.desc}`)}
                    // components = {{
                    //     event: Detailbox
                    // }}
                />
                {/* <div className="modal"> */}
                    <Button onClick={openEventbox}>Add Event</Button>
                    <Eventbox showEventbox={showEventbox} setShowEventbox={setShowEventbox}/>
                    {/* <Detailbox showDetailbox={showDetailbox} setShowDetailbox={setShowDetailbox}/> */}
                {/* </div> */}
            </div>
        </PrivateLayout>
    );
};

export default MyCalendar;

