import Figure from "react-bootstrap/Figure";
import reactImage from "../assets/about.react.png";

function RBFigure() {
  return (
    <div className="p-4">

      <h2 className="mt-5">Figure</h2>

      <Figure className="mt-3">

        <Figure.Image
          width={700}
          src={reactImage}
          alt="React Features"
        />

        <Figure.Caption className="text-muted">
          Image Resource : Google.com
        </Figure.Caption>

      </Figure>

    </div>
  );
}

export default RBFigure;