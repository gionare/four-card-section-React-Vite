import "../shared/container.css";
import KarmaImage from "/images/icon-karma.svg";
import BulbImage from "/images/bulb.jpeg";
import { useState } from "react";

export default function Karma(props) {
  const [light, setLight] = useState(false);

  function handleChange() {
    setLight(true);
  }

  return (
    <div className="box yellow">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
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
