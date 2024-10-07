import "./Header.css";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.png";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

function Header({ handleAddClick, weatherData }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
  /* console.log("Header Data:", weatherData.city); */

  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="logo" />

      <p className="header__date">
        {currentDate}, {weatherData.city}
      </p>
      <ToggleSwitch />
      <button
        type="button"
        onClick={handleAddClick}
        className="header__add-clothes-btn"
      >
        + Add Clothes
      </button>
      <div className="header__user-container">
        <p className="header__username">Terrance</p>
        <img className="header__avatar" src={avatar} alt="User"></img>
      </div>
    </header>
  );
}

export default Header;
