import "../shared/container.css";
import TeamBuilderImage from "/images/icon-team-builder.svg";

export default function TeamBuilder({ title, description }) {
  return (
    <div className="box red">
      <h2>{title}</h2>
      <p>{description}</p>
      <img src={TeamBuilderImage} alt="team builder image" />
    </div>
  );
}
