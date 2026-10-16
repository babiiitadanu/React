import { useState } from "react";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

function RBSpinners() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = () => {
    setIsSubmitting(true);
  };

  const handleCancel = () => {
    setIsSubmitting(false);
  };

  return (
    <div className="container-fluid p-4">
         <h2 className="fw-bold mb-4">Spinners</h2>

      <h5 className="fw-bold mt-5">
        Default UI
      </h5>

      <div className="d-flex gap-2 mt-3">

        {/* Submit Button */}
        <Button
          variant="primary"
          onClick={handleSubmit}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Spinner
                animation="border"
                size="sm"
                className="me-1"
              />
              Submitting
            </>
          ) : (
            "Submit"
          )}
        </Button>

        {/* Cancel Button */}
        <Button
          variant="danger"
          onClick={handleCancel}
        >
          Cancel
        </Button>

      </div>
         </div>
  );
}

export default RBSpinners;