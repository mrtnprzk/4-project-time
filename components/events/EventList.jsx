import React from "react";
import EventItem from "./EventItem";
import classes from "./EventItem.module.css"

const EventList = (props) => {

    const { items } = props;

  return (
    <ul className={classes.list}>
      {items.map((item) => (
        <EventItem
          key={item.id}
          id={item.id}
          title={item.title}
          image={item.image}
          date={item.date}
          location={item.location}
        />
      ))}
    </ul>
  );
}

export default EventList;