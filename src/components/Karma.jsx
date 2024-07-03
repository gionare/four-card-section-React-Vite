import "../shared/container.css";
import KarmaImage from "/images/icon-karma.svg";

export default function Karma() {
  return (
    <div className="box yellow">
      <h2>Karma</h2>
      <p>Regularly evaluates our talent to ensure quality</p>
      <img src={KarmaImage} alt="karma image" />
    </div>
  );
}
