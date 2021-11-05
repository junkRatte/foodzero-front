import React from "react";
import { QuoteData } from "../../components/QuoteData";
import QuoteSlider from "../../components/QuoteSlider";

function HomepageQuotes() {
  return (
    <section className="homepage-quotes">
      <div className="layout-container">
        <QuoteSlider slides={QuoteData} />
      </div>
    </section>
  );
}

export default HomepageQuotes;
