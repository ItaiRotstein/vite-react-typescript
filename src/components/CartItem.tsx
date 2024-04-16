import { Button, Stack } from 'react-bootstrap';
import { useShoppingCart } from '../context/ShoppingCartContext';
import storeItems from '../data/items.json';
import { formatCurrency } from '../utilities/formatCurrency';
type ShoppingCartProps = {
    id: number;
    quantity: number;
};

const CartItem = ({ id, quantity }: ShoppingCartProps) => {

    const { removeFromCart } = useShoppingCart();
    const item = storeItems.find(item => item.id === id);
    if (item == null) return null;

    return (
        <div>
            <Stack direction='horizontal' gap={2} className='d-flex align-items-center'>
                <img
                    src={item.imgUrl}
                    style={{ width: '125px', height: '75px', objectFit: 'cover' }}
                />
                <div className="me-auto">
                    <div>
                        {item.name} {quantity > 1 &&
                            <span
                                className='text-muted'
                                style={{ fontSize: '.65rem' }}
                            >
                                x{quantity}
                            </span>}
                    </div>
                    <div className="text-muted" style={{ fontSize: '.75rem' }}>
                        {formatCurrency(item.price)}
                    </div>
                </div>
                <div className='text-muted'>{formatCurrency(item.price * quantity)}</div>
                <Button
                    variant='outline-danger'
                    size='sm'
                    onClick={() => removeFromCart(item.id)}
                >
                    &times;
                </Button>
            </Stack>
        </div>
    );
};
export default CartItem;