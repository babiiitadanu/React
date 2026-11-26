
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
              <li><Link to="/static">Static Component</Link></li>
              <li><Link to="/dynamic">Dynamic Component</Link></li>
              <li><Link to="/counters">Counters</Link></li>
              <li><Link to="/todo">TodoList</Link></li>
              <li><Link to="/accordion">Accordion</Link></li>
              <li><Link to="/carousel">Carousel</Link></li>
              <li><Link to="/dropdowns">Dropdowns</Link></li>
              <li><Link to="/modal">Modal</Link></li>
              <li><Link to="/navbaroffcanvas">Navbaroffcanvas</Link></li>
              <li><Link to="/navtabs">Navtabs</Link></li>
              <li><Link to="/overlays">Overlays</Link></li>
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
              <li><Link to="/badges">Badges</Link></li>
              <li><Link to="/breadcrumbs">Breadcrumbs</Link></li>
              <li><Link to="/buttons">Buttons</Link></li>
              <li><Link to="/buttongroup">Button Group</Link></li>
              <li><Link to="/cards">Cards</Link></li>
              <li><Link to="/images">Images</Link></li>
              <li><Link to="/listgroup">ListGroup</Link></li>
              <li><Link to="/figure">Figure</Link></li>
              <li><Link to="/pagination">Pagination</Link></li>
              <li><Link to="/progressbars">Progress Bars</Link></li>
              <li><Link to="/spinners">Spinners</Link></li>
              <li><Link to="/tables">Tables</Link></li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>

        {/* Forms */}

        <Accordion.Item eventKey="2">
          <Accordion.Header>
            Forms
          </Accordion.Header>

          <Accordion.Body>
            <ul>
              <li><Link to="/forms">Forms</Link></li>
              <li><Link to="/formikform">FormikForm</Link></li>
              <li><Link to="/rhfform">RHF Form</Link></li>
              <li><Link to="/rhfformyup">RHF Form Yup</Link></li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>

        {/* Blog */}

        <Accordion.Item eventKey="3">
          <Accordion.Header>
            Blog
          </Accordion.Header>

          <Accordion.Body>
            <ul>
              <li><Link to="/blog-listing">Blog Listing</Link></li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>

        {/* Shopping */}

        <Accordion.Item eventKey="4">
          <Accordion.Header>
            Shopping
          </Accordion.Header>

          <Accordion.Body>
            <ul>
              <li><Link to="/shop">Shop</Link></li>
              <li><Link to="/wishlist">Wishlist</Link></li>
              <li><Link to="/cart">Cart</Link></li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>

      </Accordion>

    </div>
  );
}

export default Sidebar;
