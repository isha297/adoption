import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Pet } from "../models/pet";
import { getPetById } from "../services/petService";
import { Card, Col, Row } from "react-bootstrap";
import '../components/petcard.css'

export function PetDetails(){
    const {id}=useParams();
    const[pet,setPet]= useState<Pet|null>(null);
    
    useEffect(()=>{
        if(id!==undefined){
            getPetById(Number(id)).then((pet)=> {setPet(pet)})
        }
    },[id]);

    return(
        <div className="PetDetails">
            { pet && 
            <Row>
                <Col lg={2}></Col>
                <Col lg={8}>
                    <Card >
                        <Card.Body>
                            <Row>
                                <Col lg={4}></Col>
                                <img  src={`/img/${pet.image}`}></img>
                                <Col lg={8}>
                                <Card.Title>Name: {pet.name} </Card.Title>
                        <Card.Title>Breed: {pet.breed}</Card.Title>
                        <Card.Title> Gender: {pet.isBoy ? 'Boy' : 'Girl'}</Card.Title>
                        <Card.Title>Age: {pet.age} </Card.Title>
                            <Card.Title>{pet.description} </Card.Title>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                </Row>}
        </div>
    )
}

