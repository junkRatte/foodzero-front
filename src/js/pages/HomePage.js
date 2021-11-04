import React from "react";
import HomepageHeader from "../sections/homepage/HomepageHeader";
import HomepageMenu from "../sections/homepage/HomepageMenu";
import HomepageCook from "../sections/homepage/HomepageCook";
import HomepageFeatures from "../sections/homepage/HomepageFeatures";
import HomepageBlog from "../sections/homepage/HomepageBlog";
import ReservationForm from "../components/ReservationForm";

function Home() {
  return (
    <div className="homepage">
      <HomepageHeader />
      <HomepageMenu />
      <HomepageCook />
      <HomepageFeatures />
      <HomepageBlog />
      <ReservationForm />
    </div>
  );
}

export default Home;
