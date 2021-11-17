import React from "react";
import ReservationForm from "../components/ReservationForm";
import MenupageGrid from "../sections/menupage/MenupageGrid";
import MenupageHeader from "../sections/menupage/MenupageHeader";
import MenupageMenu from "../sections/menupage/MenupageMenu";

function Menu() {
  return (
    <div className="menupage">
      <MenupageHeader />
      <MenupageMenu />
      <MenupageGrid />
      <ReservationForm />
    </div>
  );
}

export default Menu;
