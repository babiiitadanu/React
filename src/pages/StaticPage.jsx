import StaticProfileCard from "../components/StaticProfileCard";

function StaticPage() {
  return (
    <div>
      <h2>Static Component</h2>

      <StaticProfileCard
        name="John Doe"
        role="Frontend Development Student"
        description="I enjoy building clean and responsive user interfaces using React."
      />
    </div>
  );
}

export default StaticPage;