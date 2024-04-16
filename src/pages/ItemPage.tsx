import { Button, Card, Image } from 'react-bootstrap';

import { useParams } from 'react-router-dom';
import storeItems from '../data/items.json';
import { useShoppingCart } from '../context/ShoppingCartContext';
import { formatCurrency } from '../utilities/formatCurrency';

const ItemPage = () => {
    const {
        id,
        name,
        price,
        imgUrl
    }: any = storeItems.find(item => item.id.toString() === useParams().id);

    const {
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart
    } = useShoppingCart();
    const quantity = getItemQuantity(id);

    return (

        <Card className='d-flex flex-row'>
            <Image className='h-50 w-50' src={imgUrl} />
            <div className='p-4'>
                <Card.Title className=''>
                    <span className='fs-2'>{name}</span>
                    <span className='ms-2 text-muted'>{formatCurrency(price)}</span>
                </Card.Title>

                <Card.Text>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos deserunt modi provident, voluptates blanditiis doloribus alias! Nam ea quibusdam recusandae nemo enim dolorum dolore cum tenetur! Aperiam, magnam perferendis quia itaque ipsum accusamus rem esse eaque quisquam, alias, quasi voluptas ad veritatis harum! Iste, autem unde. Odit fuga velit perferendis cupiditate tempore, quidem voluptatem. Magnam nesciunt vitae reprehenderit numquam cum! Minus qui corporis laborum quidem praesentium laboriosam nesciunt magnam! Veniam fuga, nam id quas voluptas ut ab nulla quidem illo reprehenderit eligendi cum voluptate eos ea soluta. Eveniet, sint labore molestias magnam laborum quos deleniti reiciendis asperiores aut doloremque nihil.
                </Card.Text>

                <div>
                    {quantity === 0 ?
                        (<Button className='w-100' onClick={() => increaseCartQuantity(id)}>
                            + Add To Cart
                        </Button>
                        ) : (
                            <div className='d-flex align-items-center flex-column' style={{ gap: '.5rem' }}>
                                <div className='d-flex align-items-center justify-content-center' style={{ gap: '.5rem' }}>
                                    <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                                    <div className="fs-2">
                                        <span>{quantity}</span>
                                    </div>
                                    <Button onClick={() => increaseCartQuantity(id)}>+</Button>
                                </div>
                                <Button
                                    variant='danger'
                                    size='sm'
                                    className='mb-2'
                                    onClick={() => removeFromCart(id)}
                                >
                                    Remove
                                </Button>
                            </div>
                        )}
                </div>
            </div>
        </Card>
    );
};
export default ItemPage;