import React from "react";
import styles from "./TourCard.module.css"; // make sure this CSS file matches your styles

const TourCard = ({ background, logo, country }) => {
    
  return (
    <div className={styles.Card}>
      {/* Top image */}
      <div
        className={styles.CardImage}
        style={{ backgroundImage: `url(${background})` }}
      >
        <div
          className={styles.Country}
          style={{ backgroundImage: `url(${logo})` }}
        ></div>
      </div>

      {/* Days & People */}
      <div className={styles.PeoplesAndDays}>
        <div className={styles.DaysAndPeople}>
          <img
            src="https://cdn-icons-png.flaticon.com/128/747/747310.png"
            alt=""
            width="23"
            height="25"
          />
          <p>8 days</p>
        </div>
        <div className={styles.DaysAndPeople}>
          <img
            src="https://cdn-icons-png.flaticon.com/128/1077/1077063.png"
            alt=""
            width="23"
            height="25"
          />
          <p>25 Peoples Going</p>
        </div>
      </div>

      {/* Country & Reviews */}
      <div className={styles.CountryAndReviews}>
        <h1>{country}</h1>
        <div className={styles.Review}>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
        </div>
      </div>

      {/* Location */}
      <div className={styles.CountryLocation}>
        <i className="fa-solid fa-location-dot"></i>
        <p>Europe</p>
      </div>

      {/* Price */}
      <div className={styles.Price}>
        <p>1,000$</p>
        <span>1,200$</span>
      </div>

      {/* Description */}
      <div className={styles.AbouCountry}>
        Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia
        amet id quod eligendi. Et labore harum non nobis ipsum eum molestias
        mollitia et corporis praesentium a laudantium internos.
      </div>

      <button>Book now</button>
    </div>
  );
};

export default TourCard;
