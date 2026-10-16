import Image from "react-bootstrap/Image";
import Stack from "react-bootstrap/Stack";

function RBAvatars() {
  const avatarImage =
    "https://randomuser.me/api/portraits/men/32.jpg";

  return (
    <div className="p-4">
      <h1 className="fw-bold">
        React Bootstrap <span className="text-primary">Components</span>
      </h1>

      <h2 className="mt-4">Avatars</h2>

      <div className="row mt-4 g-5">

        {/* Avatar With Name */}
        <div className="col-md-4">
          <h3>Avatar With Name</h3>

          <Stack gap={2} className="mt-3">
            <div className="d-flex align-items-center">
              <Image
                src={avatarImage}
                roundedCircle
                width={40}
                height={40}
                className="me-2"
              />
              <span>Radhika Parmar</span>
            </div>

            <div className="d-flex align-items-center">
              <Image
                src="https://randomuser.me/api/portraits/men/45.jpg"
                roundedCircle
                width={40}
                height={40}
                className="me-2"
              />
              <span>Rajkumar Jadeja</span>
            </div>
          </Stack>
        </div>

        {/* Avatar Sizes */}
        <div className="col-md-4">
          <h3>Avatar Sizes</h3>

          <div className="d-flex align-items-center gap-2 mt-4">
            <Image
              src={avatarImage}
              roundedCircle
              width={35}
              height={35}
            />

            <Image
              src={avatarImage}
              roundedCircle
              width={45}
              height={45}
            />

            <Image
              src={avatarImage}
              roundedCircle
              width={55}
              height={55}
            />

            <Image
              src={avatarImage}
              roundedCircle
              width={65}
              height={65}
            />

            <Image
              src={avatarImage}
              roundedCircle
              width={75}
              height={75}
            />

            <Image
              src={avatarImage}
              roundedCircle
              width={85}
              height={85}
            />
          </div>
        </div>

        {/* Avatar Group */}
        <div className="col-md-4">
          <h3>Avatar Group</h3>

          <div className="d-flex mt-3">
            <Image
              src="https://randomuser.me/api/portraits/men/32.jpg"
              roundedCircle
              width={40}
              height={40}
              className="border border-2 border-white"
            />

            <Image
              src="https://randomuser.me/api/portraits/women/44.jpg"
              roundedCircle
              width={40}
              height={40}
              className="border border-2 border-white ms-n2"
            />

            <Image
              src="https://randomuser.me/api/portraits/men/46.jpg"
              roundedCircle
              width={40}
              height={40}
              className="border border-2 border-white ms-n2"
            />

            <Image
              src="https://randomuser.me/api/portraits/women/65.jpg"
              roundedCircle
              width={40}
              height={40}
              className="border border-2 border-white ms-n2"
            />

            <Image
              src="https://randomuser.me/api/portraits/men/75.jpg"
              roundedCircle
              width={40}
              height={40}
              className="border border-2 border-white ms-n2"
            />
          </div>
        </div>

      </div>
    </div>
  );
}

export default RBAvatars;