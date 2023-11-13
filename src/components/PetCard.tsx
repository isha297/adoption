import { Card } from "react-bootstrap";
import { Pet } from "../models/pet";
import '../components/petcard.css'
import { Link } from "react-router-dom";
interface PetCardProps{
    pet: Pet
}
export function PetCard(props:PetCardProps){
return (
    <div className="card-layout">
    <Card className="card-img-top"> 
        <Card.Img variant="top" src={`img/${props.pet.image}`}></Card.Img>
        
        <Card.Body className="card-body">
        <Card.Title >{props.pet.name} ({props.pet.breed})</Card.Title>
            {props.pet.description}
           
        </Card.Body>
        <Card.Footer className="card-footer-lay card-footer">
        <Link to={`/adoptions/${props.pet.id}`} className="btn btn-primary ml-2">Adopt Me</Link>
        <Link to={`/details/${props.pet.id}`} className="details-btn btn btn-secondary ml-2">Details</Link>
        </Card.Footer>
    </Card>
    </div>
)
}