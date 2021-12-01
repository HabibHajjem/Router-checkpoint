import React from 'react'
import {Button} from 'react-bootstrap'

function MovieDetail(props) {
    var movie=props.filmData.find(el=>el.id == props.match.params.id)
    return (
        <div style={{textAlign:'center',marginTop:'30px'}} >
            <h1>{movie.name}</h1>
            <iframe width="560" height="315" src={movie.trailer} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <h2>Description</h2>
            <p>{movie.description}</p>
            <Button variant="secondary" onClick={()=>props.history.goBack()} >Go back</Button>

        </div>
    )
}

export default MovieDetail
