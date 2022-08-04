import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import { formatCurrency } from '../utilities/formatCurrency';
import { useShoppingCard } from '../context/ShopingCardContext';


type ItemProps = {
  id: number
  name: string
  price: number
  imgUrl: string  
}

const ShopCard = ({ id, name, price, imgUrl }: ItemProps) => {
  const { getItemQuantity, increaseCardQuantity, decreaseCardQuantity, removeFromCard } = useShoppingCard();
  const quantity = getItemQuantity(id)  
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
          <span className="ms-2 text-muted">{ formatCurrency(price) }</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button className="w-100" onClick={()=>increaseCardQuantity(id)}>+ Add to card</Button>
          ) : (
            <div className="d-flex flex-column  align-items-center">
              <div className="d-flex align-items-center justify-content-center">
                <Button onClick={()=>increaseCardQuantity(id)}>+</Button>
                <div>
                  <span className="ms-2 me-2">{quantity} in Card</span>
                </div>
                  <Button onClick={() => decreaseCardQuantity(id)}>-</Button>
              </div>
                <Button onClick={()=>removeFromCard(id) } className="mt-2" size="sm" variant="danger">
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