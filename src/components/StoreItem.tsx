import { Link } from 'react-router-dom';

import { Button, Card } from 'react-bootstrap';
import { formatCurrency } from '../utilities/formatCurrency';
import { useShoppingCart } from '../context/ShoppingCartContext';

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

const StoreItem = ({ id, name, price, imgUrl }: StoreItemProps) => {

  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart
  } = useShoppingCart();
  const quantity = getItemQuantity(id);

  return (
    <Card className='h-100 shadow-sm' as={Link} to={`/item/${id}`} style={{ textDecoration: 'none' }}>
      <Card.Img
        variant='top'
        src={imgUrl}
        height='200px'
        style={{ objectFit: 'cover' }}
      />
      <Card.Body className='d-flex flex-column' />
      <Card.Title className='d-flex justify-content-between align-items-baseline mb-4 px-4'>
        <span className='fs-2'>{name}</span>
        <span className='ms-2 text-muted'>{formatCurrency(price)}</span>
      </Card.Title>
      <div className="mt-auto">
        {quantity === 0 ?
          (<Button className='w-100' onClick={(e) => {
            e.preventDefault();
            increaseCartQuantity(id);
          }}>
            + Add To Cart
          </Button>
          ) : (
            <div className='d-flex align-items-center flex-column' style={{ gap: '.5rem' }}>
              <div className='d-flex align-items-center justify-content-center' style={{ gap: '.5rem' }}>
                <Button onClick={(e) => {
                  e.preventDefault();
                  decreaseCartQuantity(id);
                }}>
                  -
                </Button>
                <div className="fs-2">
                  <span>{quantity}</span>
                </div>
                <Button onClick={(e) => {
                  e.preventDefault();
                  increaseCartQuantity(id);
                }}>
                  +
                </Button>
              </div>
              <Button
                variant='danger'
                size='sm'
                className='mb-2'
                onClick={(e) => {
                  e.preventDefault();
                  removeFromCart(id);
                }}
              >
                Remove
              </Button>
            </div>
          )}
      </div>
    </Card>
  );
};
export default StoreItem;