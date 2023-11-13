import { useEffect, useState } from "react";
import { getPetById } from "../services/petService";
import { Pet } from "../models/pet";
import {useParams } from "react-router-dom";
import {Alert, Button, Col, Form, Row} from "react-bootstrap"
import { updateForm } from "../models/updateform";
import { postUpdate} from "../services/updateService";
 
export function UpdateForm(){
    const[formSubmitted,setFormSubmitted] =useState<boolean>(false);
    const[pet,setPet]=useState<Pet| null>(null);
const[formValues, setFormValues]=useState<updateForm>({
    name:'',
    animalType:'',
    age:0 ,
    description: '',
    image: '',
    breed: '',
    Gender: '',
    Owner_name:'',
    Owner_number:'',
    location:''

});
const{id}=useParams();

    useEffect(()=> {
        if(id!==undefined){
            getPetById(Number(id)).then((pet)=>{setPet(pet)});
        }  
    },[id]);

const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
const{name,value,type}=e.target;
if(type ==='checkbox'){
setFormValues(prev=> ({
    ...prev,
    [name] : (e.target as HTMLInputElement).checked
}));
}
else{
setFormValues(prev=> ({
     ...prev,
    [name]: value
  
}));
}
}

function onSubmit(e: React.FormEvent<HTMLFormElement>){
e.preventDefault();
postUpdate(formValues);
setFormSubmitted(true);
}
return(
<div className="UpdateForm">
    <Row>
    <Col lg ={3}></Col>
    <Col lg={6}>
   {formSubmitted?<Alert>Form Submitted. We'll put up the pet for adoption after verification.</Alert>:
    <Form onSubmit={onSubmit}>
       
            <Form.Group controlId="name">
                        <Form.Label>Pet Name</Form.Label>
                        <Form.Control 
                            type="text"
                            name="name"
                            value={formValues.name}
                            onChange={handleChange} 
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="animalType">
                        <Form.Label>Animal Type</Form.Label>
                        <Form.Control 
                            type="text"
                            name="animalType"
                            value={formValues.animalType}
                            onChange={handleChange}
                            required 
                        />
                    </Form.Group>
                    <Form.Group controlId="age">
                        <Form.Label>Pet Age</Form.Label>
                        <Form.Control 
                            type="number"
                            name="age"
                            value={formValues.age}
                            onChange={handleChange}
                        />
                        
                    </Form.Group>
                    <Form.Group controlId="location">
                        <Form.Label>Pet Location</Form.Label>
                        <Form.Control 
                            type="text"
                            name="location"
                            value={formValues.location}
                            onChange={handleChange} 
                        />
                    </Form.Group>

                    <Form.Group controlId="description">
                        <Form.Label>Pet Description</Form.Label>
                        <Form.Control 
                             as="textarea"
                             rows={2}
                            name="description"
                            value={formValues.description}
                            onChange={handleChange}
                        />
                        
                    </Form.Group>

                    <Form.Group controlId="image">
                        <Form.Label>Image link</Form.Label>
                        <Form.Control 
                            type="text"
                            name="image"
                            value={formValues.image}
                            onChange={handleChange} 
                        />
                    </Form.Group>

                    <Form.Group controlId="breed">
                        <Form.Label>Pet Breed</Form.Label>
                        <Form.Control 
                            type="text"
                            name="breed"
                            value={formValues.breed}
                            onChange={handleChange} 
                        />
                    </Form.Group>

                    <Form.Group controlId="Gender">
                        <Form.Label>Pet Gender</Form.Label>
                        <Form.Control 
                            type="text"
                            name="Gender"
                            value={formValues.Gender}
                            onChange={handleChange} 
                        />
                    </Form.Group>
                    <Form.Group controlId="Owner_name">
                        <Form.Label>Name of Owner</Form.Label>
                        <Form.Control 
                            type="text"
                            name="Owner_name"
                            value={formValues.Owner_name}
                            onChange={handleChange} 
                        />
                    </Form.Group>
                    <Form.Group controlId="Owner_number">
                        <Form.Label>Contact No.</Form.Label>
                        <Form.Control 
                            type="text"
                            name="Owner_number"
                            value={formValues.Owner_number}
                            onChange={handleChange} 
                        />
                    </Form.Group>
                    

                    <Button variant="primary" className="button-p" type="submit">
                        Submit
                    </Button>

    </Form>
}
    </Col>
    <Col lg={3}></Col>
    </Row>
</div>
)
}