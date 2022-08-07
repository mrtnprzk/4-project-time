import React from "react";
import EventList from "../components/events/EventList";
import { getFeaturedEvents } from "../dummy-data";

const MainPage = () => {

  const featuredEvents = getFeaturedEvents();

  return <EventList items={featuredEvents} />;
}

export default MainPage;