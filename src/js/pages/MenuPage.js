import React from "react";
import ReservationForm from "../components/ReservationForm";
import MenupageHeader from "../sections/menupage/MenupageHeader";
import MenupageMenu from "../sections/menupage/MenupageMenu";

function Menu() {
  return (
    <div className="menupage">
      <MenupageHeader />
      <MenupageMenu />
      <ReservationForm />
    </div>
  );
}

export default Menu;
