import React from "react";
import ReservationForm from "../components/ReservationForm";
import MenupageHeader from "../sections/menupage/MenupageHeader";

function Menu() {
  return (
    <div className="menupage">
      <MenupageHeader />
      <ReservationForm />
    </div>
  );
}

export default Menu;
