import React from "react";
import { MenuData } from "./MenuData";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { fadeAnimation, transition } from "./FramerAnimations";

function MealDescriptionPage({ match }) {
  const mealName = match.params.name;
  return (
    <motion.div
      className="homepage"
      initial="out"
      animate="in"
      exit="out"
      variants={fadeAnimation}
      transition={transition}>
      {MenuData.filter((meal) => meal.name == mealName).map((meal) => (
        <div className="mealdescription">
          <div
            className="mealdescription-header"
            style={{
              backgroundImage: `url(${meal.image})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
              paddingBottom: "20rem",
              boxShadow: "inset 0 0 0 200rem rgba(0, 0, 0, 0.3)",
            }}
          >
            <Navbar />
            <header className="layout-container">
              <div className="mealdescription-header-title">
                <h1>{meal.name}</h1>
              </div>
            </header>
          </div>
          <section className="mealdescription-description layout-container">
            <div className="mealdescription-description-summary">
              <div className="summary">
                <div>
                  <p>{meal.summary}</p>
                  <ul>
                    {meal.ingredients.map((ingredient) => (
                      <li>{ingredient}</li>
                    ))}
                  </ul>
                </div>
                <img src={meal.image} />
              </div>
            </div>
            <div className="mealdescription-description-description">
              <p>{meal.description}</p>
              <img src={meal.image} />
            </div>
          </section>
        </div>
      ))}
    </motion.div>
  );
}

export default MealDescriptionPage;
