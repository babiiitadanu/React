import { useState } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

function RBButtons() {
  // Toggle states
  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);
  const [underline, setUnderline] = useState(false);
  const [strike, setStrike] = useState(false);

  return (
    <div className="p-4">

      {/* ================= Button Styles ================= */}
      <h2 className="mb-3">Button Styles</h2>

      <div className="d-flex gap-2 mb-5">

        <Button variant="primary">
          Normal Button
        </Button>

        <Button variant="primary">
          ✎ Edit Record
        </Button>

        <Button variant="outline-primary">
          Outline Button
        </Button>

        <Button variant="primary" disabled>
          Disabled button
        </Button>

      </div>


      {/* ================= Button Types ================= */}
      <h2 className="mb-3">Button Types</h2>

      <div className="d-flex gap-2 mb-5">

        <Button variant="primary" href="#">
          Link
        </Button>

        <Button variant="primary">
          Button
        </Button>

        <Button
          variant="primary"
          as="input"
          type="button"
          value="Input"
        />

        <Button variant="primary" type="submit">
          Submit
        </Button>

        <Button variant="primary" type="reset">
          Reset
        </Button>

      </div>


      {/* ================= Toggle Buttons ================= */}
      <h2 className="mb-3">Toggle Buttons</h2>

      <ButtonGroup className="mb-3">

        {/* Bold */}
        <Button
          variant={bold ? "primary" : "outline-primary"}
          onClick={() => setBold(!bold)}
        >
          <strong>B</strong>
        </Button>

        {/* Italic */}
        <Button
          variant={italic ? "primary" : "outline-primary"}
          onClick={() => setItalic(!italic)}
        >
          <em>I</em>
        </Button>

        {/* Underline */}
        <Button
          variant={underline ? "primary" : "outline-primary"}
          onClick={() => setUnderline(!underline)}
        >
          <u>U</u>
        </Button>

        {/* Strike */}
        <Button
          variant={strike ? "primary" : "outline-primary"}
          onClick={() => setStrike(!strike)}
        >
          <s>S</s>
        </Button>

      </ButtonGroup>


      {/* ================= Result Text ================= */}
      <div
        className="border rounded p-3"
        style={{
          fontWeight: bold ? "bold" : "normal",
          fontStyle: italic ? "italic" : "normal",
          textDecoration: `${underline ? "underline" : ""} ${
            strike ? "line-through" : ""
          }`.trim(),
        }}
      >
        Here, the actions of the above buttons will be reflected.
      </div>

    </div>
  );
}

export default RBButtons;