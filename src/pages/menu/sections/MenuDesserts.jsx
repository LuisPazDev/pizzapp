import { Card, Button, Badge, Row, Col } from "react-bootstrap";

export const MenuDesserts = () => {
  return (
    <Row>
      <Row>
        <div className="text-center mt-4">
          <h3>
            <Badge pill bg="dark">
              <strong>
                <i>DESSERTS</i>
              </strong>
            </Badge>
          </h3>
          <p>
            <i>Choose your favorite dessert </i>
          </p>
        </div>
      </Row>
    </Row>
  );
};
