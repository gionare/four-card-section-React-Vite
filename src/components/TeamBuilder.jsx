import "../shared/container.css";
import TeamBuilderImage from "/images/icon-team-builder.svg";

export default function TeamBuilder() {
  return (
    <div className="box red">
      <h2>Team Builder</h2>
      <p>
        Scans our talent network to create the optimal team for your project
      </p>
      <img src={TeamBuilderImage} alt="team builder image" />
    </div>
  );
}
