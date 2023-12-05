import { useToast } from "@chakra-ui/react";
import moment from "moment";
import React, { useCallback } from "react";
import { EVENT_REGISTRATION_COUNT_LIMIT } from "../../constants";
import { useSportsEvents } from "../../context/SportsEventsContext";
import Button from "./Button";

const ERROR_MESSAGE = `Uh Oh! You are registered with ${EVENT_REGISTRATION_COUNT_LIMIT} events already`;

export const isRegistrationCountExceeded = (
  registeredEventsCount,
  registeredEventsCountLimit = EVENT_REGISTRATION_COUNT_LIMIT
) => {
  return registeredEventsCount >= registeredEventsCountLimit;
};

const EventCard = ({ event }) => {
  const { event_name, start_time, end_time, img_url, id } = event;

  const {
    sportsEventsState: { registeredEvents },
    sportsEventsDispatch,
  } = useSportsEvents();

  const toast = useToast();

  const onRegisterClick = () => {
    if (isRegistrationCountExceeded(registeredEvents.length)) {
      // if limit exceeded
      toast({
        title: ERROR_MESSAGE,
        status: "error",
        isClosable: true,
        duration: 3000,
      });
      return;
    }

    // if time of two events is conflicting

    const isTimeConflicting = !!registeredEvents.find((registeredEvent) => {
      const startTime = Date.parse(registeredEvent.start_time);
      const endTime = Date.parse(registeredEvent.end_time);
      const currentEventStartTime = Date.parse(event.start_time);
      return (
        currentEventStartTime >= startTime && currentEventStartTime < endTime
      );
    });
    if (isTimeConflicting) {
      toast({
        title: "Conflicting event time",
        description:
          "You've already registered an event in the same time. Try to register an event with different time",
        status: "info",
        isClosable: true,
        duration: 3000,
      });
      return;
    }
    sportsEventsDispatch({ type: "REGISTER_EVENT", payload: event });
  };

  const onUnregisterClick = () => {
    sportsEventsDispatch({ type: "UNREGISTER_EVENT", payload: event });
  };

  const isRegistered = useCallback(
    (id) => {
      return !!registeredEvents.find((event) => event.id === id);
    },
    [registeredEvents]
  );

  return (
    <div
      key={event.id}
      className="w-[375px] flex flex-col cursor-pointer hover:scale-105 border border-slate-200 rounded-lg"
    >
      <img src={img_url} alt={event_name} className="w-full" loading="lazy" />
      <div className="py-5 px-4 flex flex-col items-start gap-y-6">
        <h2 className="text-lg font-bold">{event_name}</h2>
        <div className="flex gap-x-10">
          <div>
            <p className="text-sm font-extrabold mb-2">Start time</p>
            <p>{moment(start_time).format("D MMM, h:mm A")}</p>
          </div>
          <div>
            <p className="text-sm font-extrabold mb-2">End time</p>
            <p>{moment(end_time).format("D MMM, h:mm A")}</p>
          </div>
        </div>
        {isRegistered(id) ? (
          <Button
            label="Unregister"
            className="w-full h-12"
            onClick={onUnregisterClick}
            type="SECONDARY"
          />
        ) : (
          <Button
            label="Register"
            className="w-full h-12"
            onClick={onRegisterClick}
          />
        )}
      </div>
    </div>
  );
};

export default EventCard;
