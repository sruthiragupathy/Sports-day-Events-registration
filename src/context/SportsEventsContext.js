import React, { createContext, useContext, useReducer } from "react";

import { mockData } from "../mockData/mockData";
import { sportsEventReducer } from "./SportsEventsReducer";

export const initialStates = {
  eventsList: mockData,
  registeredEvents: [],
};

const AppContext = createContext({});

export const SportsEventsProvider = ({ children }) => {
  const [sportsEventsState, sportsEventsDispatch] = useReducer(
    sportsEventReducer,
    initialStates
  );

  return (
    <AppContext.Provider value={{ sportsEventsState, sportsEventsDispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useSportsEvents = () => {
  return useContext(AppContext);
};
