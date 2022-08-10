import {useShoppingCard } from '../context/ShopingCardContext'
import storeItems from '../data/data.json'
import { Stack, Button } from 'react-bootstrap'
import { formatCurrency } from '../utilities/formatCurrency'

type CartItemProps = {
    id: number
    quantity: number
}

const CartItem = ({ id, quantity }: CartItemProps) => {

    const { removeFromCard } = useShoppingCard();
    const item = storeItems.find(i => i.id === id)
    if(item == null) return null
    
    return (
      <Stack
        direction="horizontal"
        gap={2}
        className={"d-flex text-align-center"}
      >
        <img
          src={item.imgUrl}
          style={{
            width: "125px",
            height: "75px",
            objectFit: "cover",
          }}
        />
        <div>
            <div className={"me-auto"}>
                {item.name}
                {quantity > 1 && (
                    <span className={'text-muted'} style={{ fontSize: '.75rem' }}>
                         x{quantity}
                    </span>
                )}</div>
                <div className={'text-muted'} style={{ fontSize: '.85rem' }}>
                    {formatCurrency(item.price)}
                </div>
            </div>
            <div className={'ms-auto'}>{ formatCurrency(quantity*item.price)}</div>
            <Button
                variant="outline-danger"
                size="sm"
                onClick={()=>removeFromCard(item.id)}>
                X
                </Button>
      </Stack>
    );  
}

export default CartItem;