import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ImageComponent from '../image';

function CardExample(props) {

  console.log(props)
const{title,description,image}=props.product

  return (
    <Card style={{ width: 400 }}>

      <ImageComponent src={image}/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default CardExample;