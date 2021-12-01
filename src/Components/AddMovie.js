import '../App.css';
import { Button, Form, Modal } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';



function AddMovie({filmData,setFilmData}) {
const [show, setShow] = useState(false);
const [title,setTitle] = useState("");
const [category,setCategory] = useState("");
const [description,setDescription] = useState("");
const [srcPic,setSrcPic] = useState("");
const [rate,setRate] = useState(0);



const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
const handleSave = () => {
  let x = {
    id:filmData.length+1,
    name:title,
    category:category,
    description:description,
    srcPicture:srcPic,
    rate:rate
  }
  setFilmData([...filmData,x]);
  setShow(false);
};
    return ( 
        <div>
        <Button variant="secondary" size="lg" className="addBtn" onClick={handleShow}>
        add movie
      </Button>
      <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Add movie data</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" onChange={(e)=>setTitle(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Category</Form.Label>
        <Form.Control type="text" onChange={(e)=>setCategory(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" onChange={(e)=>setDescription(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Url picture </Form.Label>
        <Form.Control type="text" onChange={(e)=>setSrcPic(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Rating</Form.Label>
        <ReactStars count={5} size={30} activeColor="#ffd700" onChange={(e)=>setRate(e)} />
      </Form.Group>
    </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleSave}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
          </div>
     );
}

export default AddMovie;