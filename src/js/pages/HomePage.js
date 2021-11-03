import React from "react";
import HomepageCook from "../sections/HomepageCook";
import HomepageHeader from "../sections/HomepageHeader";
import HomepageMenu from "../sections/HomepageMenu";

function Home() {
  return (
    <div className="homepage">
      <HomepageHeader />
      <HomepageMenu />
      <HomepageCook />
    </div>
  );
}

export default Home;
