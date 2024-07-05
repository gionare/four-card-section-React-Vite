import "../shared/container.css";
import KarmaImage from "/images/icon-karma.svg";
import BulbImage from "/images/bulb.jpeg";
import { useState } from "react";

export default function Karma() {
  const [light, setLight] = useState(false);

  function handleChange() {
    setLight(true);
  }

  return (
    <div className="box yellow">
      <h2>Karma</h2>
      <p>Regularly evaluates our talent to ensure quality</p>
      <button onClick={handleChange}>Click</button>
      <div>
        {!light ? (
          <img src={KarmaImage} alt="karma image" />
        ) : (
          <img width={80} src={BulbImage} alt="bulb image" />
        )}
      </div>
    </div>
  );
}
