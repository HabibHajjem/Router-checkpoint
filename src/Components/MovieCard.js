import { Card } from "react-bootstrap";
import React from 'react';
import ReactStars from 'react-rating-stars-component';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { Link } from "react-router-dom";

function MovieCard({el,match}) {
    return ( 
      <div>
        <Link to={`/movieDetails/${el.id}`} style={{textDecoration:'none',color:'black'}}>
        <Card style={{ width: '18rem',backgroundColor:'rgb(219, 218, 218)' }}  className="filmBloc">
    <Card.Img variant="top" src={el.srcPicture} alt="pic" className="img" />
    <Card.Body className="bodyDiv">
      <Card.Title className="title">{el.name}</Card.Title>
      <Card.Text>
        <h5>Gender: <span>{el.category} </span></h5>
        {el.description}
      </Card.Text>
      <div className="ratingBloc">
      <ReactStars
      count={5}
      edit={true}
    //   onChange={(e)=>setRate(e)}
      value={el.rate}
      size={30}
      activeColor="#ffd700"/>
      </div>
    </Card.Body>
  </Card>
  </Link>

  </div>
 
     );
}

export default MovieCard;