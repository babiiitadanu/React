import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">

      <h3>React Project</h3>

      <ul>
        <li>
          <Link to="/static">
            Static Component
          </Link>
        </li>

        <li>
          <Link to="/dynamic">
            Dynamic Component
          </Link>
        </li>

        <li>
          <Link to="/counters">
            Counters
          </Link>
        </li>

        <li>
          <Link to="/todo">
            TodoList
          </Link>
        </li>
      </ul>

    </div>
  );
}

export default Sidebar;