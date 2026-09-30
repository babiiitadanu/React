import team1 from "../assets/team-1.jpg";

export function DynamicAvatar({
  avatar = team1,
  name = "Student",
}) {
  return (
    <img
      src={avatar}
      alt={name}
      className="avatar"
    />
  );
}