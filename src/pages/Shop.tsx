import ShopCard from '../components/Card';
import data from '../data/data.json';
import { Row, Col } from 'react-bootstrap';

const Shop = () => {

    return <Row xs={1} md={2} lg={3} className="g-3">
        {data.map(itemData => (
            <Col key={itemData.id}>
                <ShopCard {...itemData} />
            </Col>
        ))}
    </Row>;   
}
export default Shop;