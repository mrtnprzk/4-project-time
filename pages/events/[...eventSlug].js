import React from "react";
import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data";
import EventList from "../../components/events/EventList";
import ResultsTitle from "../../components/results-title/ResultsTitle"
import Button from "../../components/ui/Button";
import ErrorAlert from "../../components/ui/ErrorAlert";

const SlugPage = () => {

  const router = useRouter();
  const filteredData = router.query.eventSlug;
  
  if (!filteredData) {
    return <p className="center">Loading...</p>
  }

  const filteredYear = +filteredData[0];
  const filteredMonth = +filteredData[1];

  if (
    isNaN(filteredYear) ||
    isNaN(filteredMonth) ||
    filteredYear > 2030 ||
    filteredYear < 2021 ||
    filteredMonth < 1||
    filteredMonth > 12
  ) {
    return (
      <>
        <ErrorAlert>Invalid Filter. Please adjust your values!</ErrorAlert>
        <div className="center">
          <Button link="/events">Show All</Button>
        </div>
      </>
    );
  }

  const filteredEvents = getFilteredEvents({
    year: filteredYear,
    month: filteredMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        <ErrorAlert>No Events Found.</ErrorAlert>
        <div className="center">
          <Button link="/events">Show All</Button>
        </div>
      </>
    );
  }

  const date = new Date(filteredYear, filteredMonth -1 )

  return (
    <>
      <ResultsTitle date={date}/>
      <EventList items={filteredEvents} />
    </>
  );
};

export default SlugPage;