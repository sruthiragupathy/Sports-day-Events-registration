import React, { useCallback, useEffect, useState } from "react";
import { useSportsEvents } from "../../context/SportsEventsContext";
import Button from "../Base/Button";

const CategoryList = ({ selectedCategory, onCategoryClicked }) => {
  const {
    sportsEventsState: { eventsList },
  } = useSportsEvents();

  const [categoryList, setCategoryList] = useState([]);

  const getUniqueCategoryList = useCallback(() => {
    const categories = eventsList.map(({ event_category }) => event_category);
    const uniqueCategories = categories.filter(
      (category, index) => categories.indexOf(category) === index
    );
    return uniqueCategories;
  }, [eventsList]);

  useEffect(() => {
    setCategoryList(getUniqueCategoryList());
  }, [getUniqueCategoryList]);

  return (
    <div className="flex gap-4 flex-wrap">
      {categoryList.map((category, index) => {
        return (
          <Button
            key={index}
            label={category}
            type={selectedCategory === category ? "PRIMARY" : "SECONDARY"}
            onClick={() => onCategoryClicked(category)}
          />
        );
      })}
    </div>
  );
};

export default CategoryList;
