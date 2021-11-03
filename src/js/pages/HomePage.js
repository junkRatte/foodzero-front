import React from "react";
import HomepageHeader from "../sections/homepage/HomepageHeader";
import HomepageMenu from "../sections/homepage/HomepageMenu";
import HomepageCook from "../sections/homepage/HomepageCook";
import HomepageFeatures from "../sections/homepage/HomepageFeatures";
import HomepageBlog from "../sections/homepage/HomepageBlog";

function Home() {
  return (
    <div className="homepage">
      <HomepageHeader />
      <HomepageMenu />
      <HomepageCook />
      <HomepageFeatures />
      <HomepageBlog />
    </div>
  );
}

export default Home;
