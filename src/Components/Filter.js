import React from 'react'
import ReactStars from 'react-rating-stars-component'
import '../App.css'

function Filter({setSearchval,setSearchStar}) {
    
    return (
        <div className="searchBloc">
      <input onChange={(e)=>setSearchval(e.target.value)} className="input">
      </input>
      <ReactStars
      count={5}
      edit={true}
      onChange={(e)=>setSearchStar(e)}
      value={0}
      size={30}
      activeColor="#ffd700"/>
      </div>
    )
}

export default Filter
