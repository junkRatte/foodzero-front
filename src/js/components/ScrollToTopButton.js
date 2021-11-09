import React, { useEffect, useState } from 'react'

function ScrollToTopButton() {
    const [showToTopButton, setShowToTopButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 500) {
                setShowToTopButton(true);
            } else {
                setShowToTopButton(false);
            }
        });
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
      <>
        {showToTopButton && (
          <button className="scroll-button" onClick={scrollToTop}>
            <i class="fas fa-sort-up"></i>
          </button>
        )}
      </>
    );
}

export default ScrollToTopButton
