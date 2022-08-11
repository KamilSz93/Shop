import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCard } from "../context/ShopingCardContext";
import CartItem from './CartItem';
import storeItems from '../data/data.json';
import { formatCurrency } from '../utilities/formatCurrency'
 
type ShoppingCardProps = {
    isOpen: boolean
}

const ShoppingCard = ({ isOpen }: ShoppingCardProps) => {
    
    const { closeCart, cartItems } = useShoppingCard();

    return (
      <Offcanvas show={isOpen} onHide={closeCart} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Stack gap={3}>
            {cartItems.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
            <div className="ms-auto fw-bold fs-5">
                Total: { formatCurrency(cartItems.reduce((total, cartItem) => {
                    const item = storeItems.find( i => i.id === cartItem.id)
                    return total + (item?.price || 0 )* cartItem.quantity
                },0 ))}            
            </div>
          </Stack>
        </Offcanvas.Body>
      </Offcanvas>
    );
}

export default ShoppingCard;