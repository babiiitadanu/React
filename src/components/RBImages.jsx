import Image from "react-bootstrap/Image";
import Stack from "react-bootstrap/Stack";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

import avatar1 from "../assets/avjjmdq8k.webp";
import avatar2 from "../assets/male-avatar-boy-face-man-user.svg";

function RBImages() {
  return (
    <div className="p-4">
      <div className="row g-5">

        {/* Avatar With Name */}
        <div className="col-md-4">
          <h3>Avatar With Name</h3>

          <Stack gap={2} className="mt-3">

            <div className="d-flex align-items-center">
              <Image
                src={avatar1}
                roundedCircle
                width={50}
                height={50}
                className="me-2"
              />
              <span>Radhika Parmar</span>
            </div>

            <div className="d-flex align-items-center">
              <Image
                src={avatar2}
                roundedCircle
                width={50}
                height={50}
                className="me-2"
              />
              <span>Rajkumar Jadeja</span>
            </div>

          </Stack>
        </div>

        {/* Avatar Sizes */}
        <div className="col-md-4">
          <h3>Avatar Sizes</h3>

          <div className="d-flex align-items-center mt-4">

            <Image
              src={avatar1}
              roundedCircle
              width={35}
              height={35}
            />

            <Image
              src={avatar2}
              roundedCircle
              width={45}
              height={45}
              className="ms-n1"
              style={{ marginLeft: "-5px" }}
            />

            <Image
              src={avatar1}
              roundedCircle
              width={55}
              height={55}
              style={{ marginLeft: "-5px" }}
            />

            <Image
              src={avatar2}
              roundedCircle
              width={65}
              height={65}
              style={{ marginLeft: "-5px" }}
            />

            <Image
              src={avatar1}
              roundedCircle
              width={75}
              height={75}
              style={{ marginLeft: "-5px" }}
            />

            <Image
              src={avatar2}
              roundedCircle
              width={85}
              height={85}
              style={{ marginLeft: "-5px" }}
            />

          </div>
        </div>

        {/* Avatar Group */}
        <div className="col-md-4">
          <h3>Avatar Group</h3>

          <div className="d-flex align-items-center mt-4">

            {/* Radhika */}
            <OverlayTrigger
              placement="bottom"
              overlay={
                <Tooltip id="tooltip-radhika">
                  Radhika Parmar
                </Tooltip>
              }
            >
              <Image
                src={avatar1}
                roundedCircle
                width={55}
                height={55}
                className="border border-3 border-white"
                style={{
                  cursor: "pointer",
                  marginLeft: "0",
                }}
              />
            </OverlayTrigger>

            {/* Rajkumar */}
            <OverlayTrigger
              placement="bottom"
              overlay={
                <Tooltip id="tooltip-rajkumar">
                  Rajkumar Jadeja
                </Tooltip>
              }
            >
              <Image
                src={avatar2}
                roundedCircle
                width={55}
                height={55}
                className="border border-3 border-white"
                style={{
                  cursor: "pointer",
                  marginLeft: "-10px",
                }}
              />
            </OverlayTrigger>

            {/* Priya */}
            <OverlayTrigger
              placement="bottom"
              overlay={
                <Tooltip id="tooltip-priya">
                  Priya Sharma
                </Tooltip>
              }
            >
              <Image
                src={avatar1}
                roundedCircle
                width={55}
                height={55}
                className="border border-3 border-white"
                style={{
                  cursor: "pointer",
                  marginLeft: "-10px",
                }}
              />
            </OverlayTrigger>

            {/* Rahul */}
            <OverlayTrigger
              placement="bottom"
              overlay={
                <Tooltip id="tooltip-rahul">
                  Rahul Verma
                </Tooltip>
              }
            >
              <Image
                src={avatar2}
                roundedCircle
                width={55}
                height={55}
                className="border border-3 border-white"
                style={{
                  cursor: "pointer",
                  marginLeft: "-10px",
                }}
              />
            </OverlayTrigger>

          </div>
        </div>

      </div>
    </div>
  );
}

export default RBImages;

