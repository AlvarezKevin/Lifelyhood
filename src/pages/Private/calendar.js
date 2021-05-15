import React, { useLayoutEffect, Component } from "react";
// import { Link } from "react-router-dom";
// import { render } from "react-dom";
import ProfileNav from "../../components/ProfileNav";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import PrivateLayout from "../../Layout/Private";

moment.locale("en-US");
const localizer = momentLocalizer(moment)
const myEventsList = {}

const MyCalendar = () => {
    return (
        <PrivateLayout>
            <div className="main">
                <ProfileNav />
                <Calendar
                    localizer = { localizer }
                    events = {[]}
                    startAccessor = "start"
                    endAccessor = "end"
                    style = {{ height: 500 }}
                />
            </div>
        </PrivateLayout>
    );
};


export default MyCalendar;