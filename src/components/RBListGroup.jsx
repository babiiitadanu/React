import React from "react";
import { Card, ListGroup } from "react-bootstrap";

function RBListGroup() {
  const socialMedia = [
    {
      name: "Facebook",
      icon: "f",
    },
    {
      name: "Instagram",
      icon: "◎",
    },
    {
      name: "YouTube",
      icon: "▶",
    },
    {
      name: "Twitter X",
      icon: "𝕏",
    },
    {
      name: "LinkedIn",
      icon: "in",
    },
  ];

  return (
    <Card style={{ width: "370px" }}>
      <Card.Body>
        <Card.Title>Social Media Traffic</Card.Title>

        <ListGroup variant="flush">
          {socialMedia.map((item, index) => (
            <ListGroup.Item
              key={index}
              className="d-flex justify-content-between align-items-center"
            >
              <span>
                <span className="me-2 text-primary fw-bold">
                  {item.icon}
                </span>
                {item.name}
              </span>

              <span>20%</span>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

export default RBListGroup;
