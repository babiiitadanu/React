import { DynamicAvatar } from "./DynamicAvatar";

function DynamicProfileCard({
  student = {
    name: "John Doe",
    role: "Frontend Development Student",
    description:
      "I enjoy building clean and responsive user interfaces using React.",
  },
}) {
  return (
    <div className="card profile-card">
      <DynamicAvatar
        avatar={student.avatar}
        name={student.name}
      />

      <h2>{student.name}</h2>

      <h3>{student.role}</h3>

      <p>{student.description}</p>
    </div>
  );
}

export default DynamicProfileCard;