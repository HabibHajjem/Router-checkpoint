import MovieCard from "./MovieCard";

function MovieList({filmData,searchVal,searchStar}) {
    return ( 
        <div className="content">
        {(searchStar>0)?filmData.filter(el=>el.name.toLowerCase().trim().includes(searchVal.toLowerCase()) && el.rate===searchStar).map((el,i)=><MovieCard el={el} key={i} />):
        filmData.filter(el=>el.name.toLowerCase().trim().includes(searchVal.toLowerCase())).map((el,i)=><MovieCard el={el} key={i} />)}
        </div> 
     );
}

export default MovieList;