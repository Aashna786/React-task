import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Fakestoreapi=(props)=> {

  return (
<div className="card" style={{ width: "450px" }}>
  <img src={props.image} className="card-img-top" height={350} />
  <div className="card-body">
    <h5 className="card-title">Title:{props.title}</h5> 
  
  <ul className="list-group list-group-flush">
    <li className="list-group-item"><b>Price:{props.price}</b></li>
    <li className="list-group-item"><b>Description:</b>{props.description}</li>
    <li className="list-group-item"><b>Category:</b>{props.category}</li>
  </ul>
  </div>
</div>
  
  );
}

export default Fakestoreapi;