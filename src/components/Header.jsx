export function Header({
  title = "Student Profile Card",
  subtitle = "Static React Component Assignment",
}) {
  return (
    <header>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </header>
  );
}