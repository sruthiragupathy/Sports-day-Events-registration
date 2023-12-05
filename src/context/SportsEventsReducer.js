export const sportsEventReducer = (state, action) => {
  switch (action.type) {
    case "REGISTER_EVENT": {
      return {
        ...state,
        registeredEvents: [...state.registeredEvents, action.payload],
      };
    }
    case "UNREGISTER_EVENT": {
      return {
        ...state,
        registeredEvents: state.registeredEvents.filter(
          (event) => event.id !== action.payload.id
        ),
      };
    }
    default:
      return state;
  }
};
