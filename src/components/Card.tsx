import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";

const quantity = 0;

type ItemProps = {
  id: number
  name: string
  price: number
  imgUrl: string  
}

const ShopCard = ({ id, name, price, imgUrl }:ItemProps) => {
  return (
    
    <Card className="w-100">
      <Card.Img
        variant="top"
        src={imgUrl}
        style={{ objectFit: "cover", height: "150px" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{ name }</span>
          <span className="ms-2 text-muted">{ price }</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity ? (
            <Button className="w-100">+ Add to card</Button>
          ) : (
            <div className="d-flex flex-column  align-items-center">
              <div className="d-flex align-items-center justify-content-center">
                <Button>+</Button>
                <div>
                  <span className="ms-2 me-2">1 in Card</span>
                </div>
                <Button>-</Button>
              </div>
              <Button className="mt-2" size="sm" variant="danger">
                {" "}
                Remove{" "}
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default ShopCard;