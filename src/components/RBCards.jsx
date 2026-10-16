import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import boatBlack from "../assets/boat.black.webp";
import boatRed from "../assets/shopping.webp";
import boatImage from "../assets/images.jpg";

function RBCards() {
  const products = [
    {
      title: "Bluetooth Headphones",
      image: boatBlack,
      description:
        "Boult Newly Launched Flex On Ear Bluetooth Headphones with 80H Playtime, 40mm Bass Drivers, Zen™ ENC Mic, Type-C Fast Charging, Bluetooth 5.4, AUX Option, 60ms Low Latency, IPX5 Jet Black",
      price: "₹1,399",
      oldPrice: "MRP: ₹3,990",
    },
    {
      title: "The Ear Gaming Headphone",
      image: boatRed,
      description:
        "Newly Launched BTG Thunder Over The Ear Gaming Headphone with 70H of Playtime, 40mm Titanium Drivers, Dual Pairing Headset, Gaming Mode (40ms Latency) with RGB LEDs, Detachable Mic",
      price: "₹1,399",
      oldPrice: "MRP: ₹3,990",
    },
    {
      title: "boAt Rockerz 450",
      image: boatImage,
      description:
        "boAt Rockerz 450, 15 HRS Battery, 40mm Drivers, Padded Ear Cushions, Integrated Controls, Dual Modes, On Ear Bluetooth Headphones, Wireless Headphone with Mic",
      price: "₹1,399",
      oldPrice: "MRP: ₹3,990",
    },
  ];

  return (
    <div className="p-3">

      <h1 className="fw-bold">
        React Bootstrap <span className="text-primary">Components</span>
      </h1>

      <h2 className="mt-4">Cards</h2>

      <Row className="g-2 mt-3">
        {products.map((product, index) => (
          <Col md={4} key={index}>

            <Card
              className="h-100"
              style={{
                border: "1px solid #cdc4c4c3",
                borderRadius: "3px",
              }}
            >

              {/* Product Title */}
              <Card.Title
                className="px-2 pt-2 mb-0"
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                }}
              >
                {product.title}
              </Card.Title>

              {/* Product Image */}
              <Card.Img
                variant="top"
                src={product.image}
                alt={product.title}
                style={{
                  height: "250px",
                  objectFit: "contain",
                  padding: "5px",
                }}
              />

              <Card.Body className="p-2 d-flex flex-column">

                {/* Description */}
                <Card.Text
                  className="mb-2"
                  style={{
                    fontSize: "13px",
                    lineHeight: "1.4",
                    minHeight: "50px",
                  }}
                >
                  {product.description}
                </Card.Text>

                {/* Price */}
                <div
                  className="mb-2"
                  style={{
                    fontSize: "8px",
                  }}
                >
                  <span>{product.price}</span>

                  <del className="text-secondary ms-1">
                    {product.oldPrice}
                  </del>
                </div>

                {/* Buttons */}
                <div className="d-flex justify-content-between mt-auto">

                  <Button
                    variant="outline-primary"
                    size="sm"
                    style={{
                      fontSize: "9px",
                      padding: "6px 10px",
                    }}
                  >
                    Add To Cart
                  </Button>

                  <Button
                    variant="primary"
                    size="sm"
                    style={{
                      fontSize: "9px",
                      padding: "6px 10px",
                    }}
                  >
                    Buy Now
                  </Button>

                </div>

              </Card.Body>
            </Card>

          </Col>
        ))}
      </Row>

    </div>
  );
}

export default RBCards;