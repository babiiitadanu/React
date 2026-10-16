import { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import ListGroup from "react-bootstrap/ListGroup";
import {
  FaRegCalendar,
  FaRegClock,
  FaRupeeSign,
  FaBullseye,
  FaUsers,
  FaTasks,
  FaComments,
} from "react-icons/fa";

function RBNavTabs() {
  const [activeTab, setActiveTab] = useState("overview");

  const projectDetails = [
    {
      icon: <FaRegCalendar />,
      label: "Start Date",
      value: "01 Jul, 2025",
    },
    {
      icon: <FaRegCalendar />,
      label: "End Date",
      value: "31 Dec, 2025",
    },
    {
      icon: <FaRegClock />,
      label: "Estimate Time",
      value: "5 Months",
    },
    {
      icon: <FaRupeeSign />,
      label: "Estimate Cost",
      value: "₹ 5,80,000",
    },
  ];

  const tabs = [
    { key: "overview", title: "Overview" },
    { key: "scope", title: "Project Scope", icon: <FaBullseye /> },
    { key: "team", title: "Team Members", icon: <FaUsers /> },
    { key: "tasks", title: "Tasks", icon: <FaTasks /> },
    { key: "chat", title: "Chat", icon: <FaComments /> },
  ];

  return (
    <div className="container-fluid px-3 px-md-4 py-4">
      <h2 className="fw-bold mb-4">
        React Bootstrap{" "}
        <span className="text-primary fw-normal">
          Navs and Tabs
        </span>
      </h2>

      <Tab.Container
        activeKey={activeTab}
        onSelect={(key) => key && setActiveTab(key)}
      >
        {/* Navigation Tabs */}
        <Nav className="flex-wrap border-bottom">
          {tabs.map((tab) => (
            <Nav.Item key={tab.key}>
              <Nav.Link
                eventKey={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`text-nowrap px-3 py-2 rounded-0 ${
                  activeTab === tab.key
                    ? "text-primary fw-medium"
                    : "text-dark"
                }`}
                style={{
                  border: "none",
                  borderBottom:
                    activeTab === tab.key
                      ? "3px solid #0d6efd"
                      : "3px solid transparent",
                  marginBottom: "-1px",
                  backgroundColor: "transparent",
                }}
              >
                {tab.title}
              </Nav.Link>
            </Nav.Item>
          ))}
        </Nav>

        {/* Tabs Content */}
        <Tab.Content className="px-2">
          <Tab.Pane eventKey="overview">
            <p className="mt-3 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Donec purus tellus, ultricies quis orci ac,
              volutpat rhoncus lacus. Sed tempor arcu vitae neque
              mollis rutrum ac a odio. Donec sit amet ex in est
              dictum imperdiet.
            </p>

            <ListGroup variant="flush">
              {projectDetails.map((item) => (
                <ListGroup.Item
                  key={item.label}
                  className="d-flex align-items-center justify-content-between gap-3 px-0 py-2"
                >
                  <span className="d-flex align-items-center gap-2">
                    <span className="text-primary">
                      {item.icon}
                    </span>
                    <span>{item.label}</span>
                  </span>

                  <span className="text-end text-nowrap">
                    {item.value}
                  </span>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Tab.Pane>

          <Tab.Pane eventKey="scope">
            <p className="mt-3 mb-4">
              This project includes planning, designing,
              development, testing and deployment.
            </p>

            <ListGroup variant="flush">
              <ListGroup.Item className="px-0 py-3">
                Planning and Requirements
              </ListGroup.Item>
              <ListGroup.Item className="px-0 py-3">
                UI Design and Development
              </ListGroup.Item>
              <ListGroup.Item className="px-0 py-3">
                Testing and Deployment
              </ListGroup.Item>
            </ListGroup>
          </Tab.Pane>

          <Tab.Pane eventKey="team">
            <ListGroup variant="flush" className="mt-3">
              <ListGroup.Item className="px-0 py-3">
                Alex Johnson — Project Manager
              </ListGroup.Item>
              <ListGroup.Item className="px-0 py-3">
                Sarah Smith — UI Designer
              </ListGroup.Item>
              <ListGroup.Item className="px-0 py-3">
                David Brown — Developer
              </ListGroup.Item>
            </ListGroup>
          </Tab.Pane>

          <Tab.Pane eventKey="tasks">
            <ListGroup variant="flush" className="mt-3">
              <ListGroup.Item className="px-0 py-3">
                Requirements Gathering
              </ListGroup.Item>
              <ListGroup.Item className="px-0 py-3">
                Design and Development
              </ListGroup.Item>
              <ListGroup.Item className="px-0 py-3">
                Testing and Review
              </ListGroup.Item>
            </ListGroup>
          </Tab.Pane>

          <Tab.Pane eventKey="chat">
            <p className="mt-3">
              Welcome to the project chat. Team discussions
              can be displayed here.
            </p>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </div>
  );
}

export default RBNavTabs;
