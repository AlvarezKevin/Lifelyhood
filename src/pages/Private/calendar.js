import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProfileNav from "../../components/ProfileNav";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import PrivateLayout from "../../Layout/Private";
import styled from "styled-components";
import Eventbox from "../../components/Eventbox";
import "../../styles/Calendar.css";
import axios from "axios";
import { useAuthCtx } from "../../Hooks/useAuthContext";
// The private directory has all private pages (including this file) that are accessible only to the authenticated users. All pages are wrapped inside the private layout.
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

/*
    Calendar component used is react-big-calendar for its sleek agenda and different
    weekdays view. We retrieve events through get and pass it on to the calendar.
    Had trouble implementing a custom component in order to render a modal when clicking
    on the event instead decided to just make a new page. Click add event in order to create
    a new event but you much refresh page in order to load the new event.
*/

moment.locale("en-US");
const localizer = momentLocalizer(moment);
// const URL = "http://127.0.0.1:8000/api/calendar/events/"
const URL = "/api/calendar/events/";

const MyCalendar = () => {
  const { user } = useAuthCtx();
  const [userEvents, setUserEvents] = useState({ userEventsList: [] });
  const [showEventbox, setShowEventbox] = useState(false);
  const [showDetailbox, setShowDetailbox] = useState(false);

  useEffect(() => {
    getEvents();
  }, []);

  const getEvents = async () => {
    const response = await axios
      .get(URL, {
        headers: {
          Authorization: `Token ${user.token}`,
        },
      })
      .then((json) => {
        console.log(json.data);
        const myEventsList = json.data.map((data) => {
          return {
            title: data.title,
            start: moment.utc(data.startDate).toDate(),
            end: moment.utc(data.endDate).toDate(),
            desc: data.description,
            id: data.id,
          };
        });
        console.log(myEventsList);
        setUserEvents({ userEventsList: myEventsList });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };

  const openEventbox = () => {
    setShowEventbox((prev) => !prev);
  };

  const openDetailbox = () => {
    setShowDetailbox((prev) => !prev);
  };

  return (
    <PrivateLayout>
      <ProfileNav />
      <div className="main-calendar">
        <Calendar
          className="calendar"
          localizer={localizer}
          events={userEvents.userEventsList}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
          // onSelectEvent = {event => Detailbox({event})}
          onSelectEvent={(event) =>
            alert(`Title: ${event.title} Description: ${event.desc}`)
          }
          // components = {{
          //     event: Detailbox
          // }}
        />
        <Button onClick={openEventbox}>Add Event</Button>
        <Link to="/events">
            <Button>Edit Events</Button>
        </Link>
        <Eventbox
          showEventbox={showEventbox}
          setShowEventbox={setShowEventbox}
        />
        {/* <Detailbox showDetailbox={showDetailbox} setShowDetailbox={setShowDetailbox}/> */}
      </div>
    </PrivateLayout>
  );
};

export default MyCalendar;
