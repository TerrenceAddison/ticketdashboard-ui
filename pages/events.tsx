import type { NextPage } from "next";
import { useAddress } from "@thirdweb-dev/react";
import EventComponent from "../components/Events/EventComponent";

const Events: NextPage = () => {
  const address = useAddress();
  return (
    <div className="px-9">
      <div className="h-screen flex justify-center content-center py-20 flex-wrap">
        <EventComponent title="Event1" id={1} />
        <EventComponent title="Event2" id={2} />
        <EventComponent title="Event3" id={3} />
        <EventComponent title="Event4" id={4} />
        <EventComponent title="Event5" id={5} />
      </div>
    </div>
  );
};

export default Events;
