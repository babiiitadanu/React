import { Avatar } from "./Avatar";

function StaticProfileCard({
  name = "John Doe",
  role = "Frontend Development Student",
  description =
    "I enjoy building clean and responsive user interfaces using React.",
}) {
  return (
    <div className="card profile-card">
      <Avatar />

      <h2>{name}</h2>

      <h3>{role}</h3>

      <p>{description}</p>
    </div>
  );
}

export default StaticProfileCard;