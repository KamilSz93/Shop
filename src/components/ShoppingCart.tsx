import { Offcanvas } from "react-bootstrap";
import { useShoppingCard } from "../context/ShopingCardContext";


type ShoppingCardProps = {
    isOpen: boolean
}


const ShoppingCard = ({ isOpen }: ShoppingCardProps) => {
    
    const { closeCart } = useShoppingCard();

    return (
        <Offcanvas show={isOpen} onHide={closeCart} placement='end' >
            <Offcanvas.Header closeButton >
                <Offcanvas.Title>Shop</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                Body Shop
            </Offcanvas.Body>

        </Offcanvas>
    )
}

export default ShoppingCard;