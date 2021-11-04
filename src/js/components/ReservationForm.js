import React from "react";

function ReservationForm() {
  return (
    <div className="reservation-form">
      <div className="layout-container">
        <form>
          <h2>Make a Reservation</h2>
          <p>Get in touch with our restaurant</p>
          <div className="reservation-row">
            <input name="date" type="date" />
            <select name="time">
              <option>12:00</option>
              <option>14:00</option>
              <option>16:00</option>
              <option>18:00</option>
              <option>20:00</option>
            </select>
            <select name="group-size">
              <option>2 People</option>
              <option>4 People</option>
              <option>6 People</option>
              <option>8 People</option>
            </select>
          </div>
          <button className="form-btn" type="submit">
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
}

export default ReservationForm;
