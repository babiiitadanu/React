import { useState } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";

function RBButtonGroups() {
  const [alignment, setAlignment] = useState("left");

  return (
    <div className="p-4">

      <h2 className="mb-5">Button Groups</h2>

      <ButtonGroup className="mb-2">

        <Button
          variant="primary"
          onClick={() => setAlignment("left")}
        >
          ☰ Left
        </Button>

        <Button
          variant="primary"
          onClick={() => setAlignment("center")}
        >
          ☰ Center
        </Button>

        <Button
          variant="primary"
          onClick={() => setAlignment("right")}
        >
          ☰ Right
        </Button>

      </ButtonGroup>

      <div
        className="border p-4"
        style={{
          textAlign: alignment,
          minHeight: "58px",
        }}
      >
        Here, the actions of the above buttons will be reflected.
      </div>

    </div>
  );
}

export default RBButtonGroups;