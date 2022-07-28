import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";

const quantity = 0

const ShopCard = () => {
    return (
      <Card className="w-100">
        <Card.Img
          variant="top"
          src="/imgs/banana.jpg"
          style={{ objectFit: "cover", height: "150px" }}
        />
        <Card.Body className="d-flex flex-column">
          <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
            <span className="fs-2">Banan</span>
            <span className="ms-2 text-muted">20$</span>
                </Card.Title>
                <div className="mt-auto">
                    {quantity === 0 ? 
                    (<Button className="w-100">+ Add to card</Button>) : null}
                </div>
        </Card.Body>
      </Card>
    );
}

export default ShopCard;