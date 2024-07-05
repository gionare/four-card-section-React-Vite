import "../shared/container.css";
import SupervisorImage from "/images/icon-supervisor.svg";

export default function Supervisor(props) {
  return (
    <div className="box cyan">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <img src={SupervisorImage} alt="supervisor image" />
    </div>
  );
}
