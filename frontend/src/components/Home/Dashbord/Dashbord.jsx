import React from "react";
import "./Dashbord.css";
import { Link } from "react-router-dom";

const Dashbord = () => {
  return (
    <div className="dashboard">
      {/* Sidebar */}
      <div className="sidebar">
        <h2>TourAdmin</h2>
        <ul>
          <li>
            <i className="fa-solid fa-plane"></i> Bookings
          </li>
          <Link to="/AddBookings">
            <li>
              <i className="fa-solid fa-add"></i> Add Booking
            </li>
          </Link>
          <li>
            <i className="fa-solid fa-user"></i> user
          </li>
          <li>
            <i className="fa-solid fa-dollar-sign"></i> Revenue
          </li>
          <li>
            <i className="fa-solid fa-chart-line"></i> Analytics
          </li>
        </ul>
      </div>

      <div className="cards"></div>
    </div>
  );
};

export default Dashbord;
