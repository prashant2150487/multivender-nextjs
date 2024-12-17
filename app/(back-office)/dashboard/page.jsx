import Heading from "@/components/backoffice/Heading";
import LargeCards from "@/components/backoffice/LargeCards";
import React from "react";

const Page = () => {
  return (
    <div>
      <Heading title="Dashboard Overview" />
      <div>
        <LargeCards/>
      </div>
    </div>
  );
};

export default Page;
