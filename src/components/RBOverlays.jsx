import { useState } from "react";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import Tooltip from "react-bootstrap/Tooltip";
import Overlay from "react-bootstrap/Overlay";

function RBOverlays() {
  const [showPopover, setShowPopover] = useState(null);

  const popoverPositions = [
    { placement: "top", title: "Popover on top" },
    { placement: "right", title: "Popover on right" },
    { placement: "bottom", title: "Popover on bottom" },
    { placement: "left", title: "Popover on left" },
  ];

  const tooltipPositions = [
    { placement: "top", title: "Tooltip on top" },
    { placement: "right", title: "Tooltip on right" },
    { placement: "bottom", title: "Tooltip on bottom" },
    { placement: "left", title: "Tooltip on left" },
  ];

  return (
    <div className="container-fluid py-4 px-3 px-md-4">
      <h2 className="fw-bold mb-4">
        React Bootstrap{" "}
        <span className="text-primary fw-normal">
          Overlays and Tooltips
        </span>
      </h2>

      {/* Popover Buttons */}
      <div className="p-3 py-5">
        <div className="d-flex flex-wrap gap-2">
          {popoverPositions.map((item) => (
            <OverlayTrigger
              key={item.placement}
              trigger="click"
              placement={item.placement}
              rootClose
              overlay={
                <Popover>
                  <Popover.Header as="h3">
                    {item.title}
                  </Popover.Header>

                  <Popover.Body>
                    <strong>Holy guacamole!</strong>{" "}
                    Check this info.
                  </Popover.Body>
                </Popover>
              }
            >
              <Button variant="outline-secondary">
                {item.title}
              </Button>
            </OverlayTrigger>
          ))}
        </div>
      </div>

      <hr className="my-3" />

      {/* Tooltip Buttons */}
      <div className="p-3 py-4">
        <div className="d-flex flex-wrap gap-2">
          {tooltipPositions.map((item) => (
            <OverlayTrigger
              key={item.placement}
              placement={item.placement}
              overlay={
                <Tooltip>
                  {item.title}.
                </Tooltip>
              }
            >
              <Button variant="secondary">
                {item.title}
              </Button>
            </OverlayTrigger>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RBOverlays;
