import React from "react";
import { NavLink } from "react-router-dom";
import { useSportsEvents } from "../../context/SportsEventsContext";
import EventCard from "../Base/EventCard";

const RegisteredEvents = () => {
  const {
    sportsEventsState: { registeredEvents },
  } = useSportsEvents();

  if (!registeredEvents.length) {
    return (
      <div className="w-full h-[700px] flex items-center justify-center flex-col">
        <p className="text-slate-500">
          You haven't registered to any events yet.
        </p>
        <p className="text-slate-500">
          We encourage you to participate in atleast one of the events
        </p>
        <NavLink
          to="/"
          className="font-heavy mt-5 bg-slate-700 p-4 rounded-lg text-slate-50"
        >
          Register events
        </NavLink>
      </div>
    );
  }
  return (
    <div className="p-10 ">
      <h1 className="text-xl font-extrabold">Registered events</h1>
      <div className="my-10 flex gap-x-10 gap-y-12 flex-wrap items-center justify-center md:justify-start">
        {registeredEvents.map((event) => {
          return <EventCard key={event.id} event={event} />;
        })}
      </div>
    </div>
  );
};

export default RegisteredEvents;
