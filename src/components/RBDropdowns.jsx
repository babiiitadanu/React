import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Image from "react-bootstrap/Image";
import {
  FaUser,
  FaTachometerAlt,
  FaBell,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

function RBDropdowns() {
  const [selected, setSelected] = useState("Profile");

  const menuItems = [
    {
      name: "Dashboard",
      icon: <FaTachometerAlt />,
    },
    {
      name: "Notification",
      icon: <FaBell />,
    },
    {
      name: "Settings",
      icon: <FaCog />,
    },
    {
      name: "Logout",
      icon: <FaSignOutAlt />,
    },
  ];

  const handleSelect = (eventKey) => {
    setSelected(eventKey);
  };

  const ProfileMenu = ({ variant = "primary" }) => (
    <Dropdown onSelect={handleSelect}>
      <Dropdown.Toggle
        variant={variant}
        className="d-flex align-items-center gap-2"
      >
        <FaUser />
        Profile
      </Dropdown.Toggle>

      <Dropdown.Menu className="shadow-sm">
        {menuItems.map((item) => (
          <Dropdown.Item
            eventKey={item.name}
            key={item.name}
            className="d-flex align-items-center gap-2 py-2"
          >
            {item.icon}
            <span>{item.name}</span>
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );

  return (
    <div className="container py-4">
      <h1 className="fw-bold mb-4">
        React Bootstrap{" "}
        <span className="text-primary fw-normal">
          Components
        </span>
      </h1>

      {/* Three dropdown styles */}
      <div className="border p-4 mb-4">
        <div className="row align-items-start">
          {/* First: Primary button */}
          <div className="col-4">
            <ProfileMenu />
          </div>

          {/* Second: Outline button */}
          <div className="col-4 d-flex justify-content-center">
            <ProfileMenu variant="outline-primary" />
          </div>

          {/* Third: Profile image */}
          <div className="col-4 d-flex justify-content-end">
            <Dropdown onSelect={handleSelect}>
              <Dropdown.Toggle
                variant="light"
                className="rounded-circle p-1 border shadow-sm"
                aria-label="Open profile menu"
                bsPrefix=" "
              >
                <Image
                  src="src/assets/team-3.jpg"
                  roundedCircle
                  width={36}
                  height={36}
                  alt="Profile"
                />
              </Dropdown.Toggle>

              <Dropdown.Menu align="end" className="shadow-sm">
                {menuItems.map((item) => (
                  <Dropdown.Item
                    eventKey={item.name}
                    key={item.name}
                    className="d-flex align-items-center gap-2 py-2 " 
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>

      <p className="mt-3">
        Selected option: <strong>{selected}</strong>
      </p>
    </div>
  );
}

export default RBDropdowns;