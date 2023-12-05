import React, { useState } from "react";
import { useSportsEvents } from "../../context/SportsEventsContext";
import EventCard from "../Base/EventCard";
import CategoryList from "./CategoryList";

const SportsDayEventsList = () => {
  const {
    sportsEventsState: { eventsList },
  } = useSportsEvents();
  const [selectedCategory, setSelectedCategory] = useState(
    eventsList[0].event_category
  );

  const onCategoryClicked = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  return (
    <div className="p-10">
      <CategoryList
        selectedCategory={selectedCategory}
        onCategoryClicked={onCategoryClicked}
      />
      <div className="my-12 flex gap-x-10 gap-y-12 flex-wrap items-center justify-center md:justify-start">
        {eventsList
          .filter((event) => event.event_category === selectedCategory)
          .map((event) => {
            return <EventCard key={event.id} event={event} />;
          })}
      </div>
    </div>
  );
};

export default SportsDayEventsList;
