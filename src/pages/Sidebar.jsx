import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <h3>React Project</h3>

      <Accordion>

        {/* Interactive Components */}
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            Interactive Components
          </Accordion.Header>

          <Accordion.Body>
            <ul>
              <li>
                <Link to="/static">Static Component</Link>
              </li>

              <li>
                <Link to="/dynamic">Dynamic Component</Link>
              </li>

              <li>
                <Link to="/counters">Counters</Link>
              </li>

              <li>
                <Link to="/todo">TodoList</Link>
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>


        {/* Non Interactive Components */}
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            Non Interactive Components
          </Accordion.Header>

          <Accordion.Body>
            <ul>
              <li>
                <Link to="/badges">Badges</Link>
              </li>

              <li>
                <Link to="/breadcrumbs">Breadcrumbs</Link>
              </li>

              <li>
                <Link to="/buttons">Buttons</Link>
              </li>

              <li>
                <Link to="/buttongroup">Button Group</Link>
              </li>

              <li>
                <Link to="/cards">Cards</Link>
              </li>

              <li>
                <Link to="/images">Images</Link>
              </li>
              
              <li>
                <Link to="/pagination">Pagination</Link>
              </li>

              <li>
                <Link to="/prgressbars">Prgress Bars</Link>
              </li>

            </ul>
          </Accordion.Body>
        </Accordion.Item>

      </Accordion>
    </div>
  );
}

export default Sidebar;