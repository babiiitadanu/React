import DynamicProfileCard from "../components/DynamicProfileCard";
import students from "../data/students";

function DynamicPage() {
  return (
    <div>
      <h2>Dynamic Component</h2>

      <div className="cards">
        {students.map((student) => (
          <DynamicProfileCard
            key={student.id}
            student={student}
          />
        ))}
      </div>
    </div>
  );
}

export default DynamicPage;