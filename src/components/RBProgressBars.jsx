import { useState } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function RBProgressBars() {
  const [progress, setProgress] = useState(5);

  const increaseProgress = () => {
    setProgress((prev) => Math.min(prev + 5, 100));
  };

  const decreaseProgress = () => {
    setProgress((prev) => Math.max(prev - 5, 0));
  };

  return (
    <div className="container-fluid p-4">
      <h2>Progress Bars</h2>

      {/* Buttons */}
      <div className="d-flex gap-2 mt-4">
        <Button onClick={increaseProgress}>
          Progress + 5%
        </Button>

        <Button onClick={decreaseProgress}>
          Progress - 5%
        </Button>
      </div>

      {/* Progress Bars */}
      <div className="mt-4" style={{ maxWidth: "710px" }}>
        <div className="mb-1">
          Completed {progress}%
        </div>

        <ProgressBar now={progress} />

        <ProgressBar
          now={progress}
          variant="danger"
          striped
          animated
          className="mt-2"
        />
      </div>

      <hr className="my-4" />

      {/* Dashboard Card */}
      <Card style={{ width: "230px" }}>

        <Card.Body>

          <Card.Title>
            Bootstrap Dashboard
            <br />
            Application
          </Card.Title>

          <Card.Subtitle className="mb-3 text-muted">
            Web Development
          </Card.Subtitle>

          <Card.Text>
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipisicing elit.
          </Card.Text>

          <div className="mb-1">
            <span className="badge bg-info">
              In Progress
            </span>
          </div>

          <ProgressBar
            now={progress}
            label={`${progress}%`}
          />

        </Card.Body>

        <Card.Footer className="d-flex p-0">

          <div className="p-2 w-50 border-end">
            <small>Due Date:</small>
            <br />
            1 Jan, 2022
          </div>

          <div className="p-2 w-50">
            <small>Budget:</small>
            <br />
            $123,000
          </div>

        </Card.Footer>

      </Card>

    </div>
  );
}

export default RBProgressBars;