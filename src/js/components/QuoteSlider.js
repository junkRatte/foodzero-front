import React, { useState } from "react";
import { QuoteData } from "./QuoteData";
import QuoteSymbol from "../../images/quote-symbol.svg";

function QuoteSlider({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      {QuoteData.map((quote, index) => (
        <div className="quote">
          <div
            className={index === current ? "slide-active" : "slide"}
            key={index}
          >
            {index === current && (
              <>
                <h4>{quote.quote}</h4>
                <img className="quote-symbol" src={QuoteSymbol} />
                <div className="quote-author">
                  <div className="author">
                    <img src={quote.image} />
                    <div>
                      <p className="name">{quote.name}</p>
                      <p className="job">{quote.job}</p>
                    </div>
                  </div>
                  <div className="counter">
                    <i
                      class="fas fa-long-arrow-alt-left"
                      onClick={prevSlide}
                    ></i>
                    <p className="quote-number">{quote.number}/2</p>
                    <i
                      class="fas fa-long-arrow-alt-right"
                      onClick={nextSlide}
                    ></i>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      ))}
    </section>
  );
}

export default QuoteSlider;
