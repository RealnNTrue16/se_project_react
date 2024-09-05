import { useState } from "react";
import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import { defaultClothingItems } from "../../utils/constants";
import ItemCard from "../ItemCard/ItemCard";

function Main({ weatherData, handleCardClick }) {
  return (
    <>
      <main>
        <WeatherCard weatherData={weatherData} />
        <section className="cards">
          <p className="card__text">
            Today is {weatherData.temp}&deg; F / You may want to wear:
          </p>
          <ul className="cards__list">
            {defaultClothingItems
              .filter((item) => {
                //filter item based on weather type, hot cold etc.
                return item.weather === weatherData.type; //item.weather should equal weatherData.type value
              })
              .map((item) => {
                return (
                  <ItemCard
                    key={item._id}
                    item={item}
                    onCardClick={handleCardClick} //passed from App componenet to Main Then to ItemCard while renaming to 'onCardClick'
                  />
                );
              })}
          </ul>
        </section>
      </main>
    </>
  );
}

export default Main;
