import team1 from "../assets/team-1.jpg";

export function Avatar({
  image = team1,
  name = "John Doe",
}) {
  return (
    <img
      src={image}
      alt={name}
      className="avatar"
    />
  );
}
