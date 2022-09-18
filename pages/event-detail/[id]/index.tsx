import type { NextPage } from "next";
import { useAddress } from "@thirdweb-dev/react";

const EventDetail: NextPage = () => {
  const address = useAddress();
  return (
    <div className="px-9">
      <div className="h-screen flex justify-center content-center py-20 flex-wrap"></div>
    </div>
  );
};

export default EventDetail;
