import React, { useEffect, setState, useState } from "react";
import ProfileNav from "../../components/ProfileNav";
import PrivateLayout from "../../Layout/Private";
import "../../styles/Events.css";
import EventModal from "../../components/Eventbox/EventModal";
import axios from "axios";
import { useAuthCtx } from "../../Hooks/useAuthContext";
import moment from "moment";

const URL = "/api/calendar/events/";

/*
    Here all the events would be listed in order for you to edit and
    delete events. Uses a component to render each different event in its
    own clickable box.
*/

const MyCalendarEvents = () => {
    // const myEventsList = events
    const { user } = useAuthCtx();
    // const [showDetailbox, setShowDetailbox] = useState(false);
    const [userEvents, setUserEvents] = useState({ userEventsList: [] });

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
            // console.log(json.data);
            const myEventsList = json.data.map((data) => {
              return {
                title: data.title,
                start: moment.utc(data.startDate).toDate(),
                end: moment.utc(data.endDate).toDate(),
                desc: data.description,
                id: data.id,
              };
            });
            // console.log(myEventsList);
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

    // console.log(events)

    return (
        <PrivateLayout>
            <ProfileNav />
            <div className="main-events">
                {Object.keys(userEvents.userEventsList).map((key, index) => {
                    console.log(key, index)
                    {/* console.log(myEventsList[key]) */}
                    return (
                            <EventModal props={userEvents.userEventsList[key]} id={key}/>
                        )
                    })
                }
            </div>
        </PrivateLayout>
    );
};

export default MyCalendarEvents;