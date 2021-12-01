import './App.css';
import React,{useState} from 'react';
import MovieList from './Components/MovieList'
import 'bootstrap/dist/css/bootstrap.min.css';
import AddMovie from './Components/AddMovie';
import Filter from './Components/Filter';
import { Route, Router } from 'react-router';
import MovieDetail from './Components/MovieDetail';


function App() {
  const [filmData, setFilmData] = useState([
    {id:0,name:"Taken",category:"Action",description:"lorem lorem lorem",srcPicture:"https://fr.web.img6.acsta.net/medias/nmedia/18/65/13/27/18899329.jpg",rate:3,trailer:"https://www.youtube.com/embed/uPJVJBm9TPA"},
    {id:1,name:"L'immortale",category:"Action",description:"lorem lorem lorem",srcPicture:"https://fr.web.img4.acsta.net/pictures/19/11/26/11/39/1349252.jpg",rate:3,trailer:"https://www.youtube.com/embed/mNz2Y0RHZBc"},
    {id:2,name:"Taxi 5",category:"Comedy",description:"lorem lorem lorem",srcPicture:"https://m.media-amazon.com/images/M/MV5BZTVhMTcyMmItOTBiNC00MGZhLThkYmQtOGFhNjAyNmYzYTQ1XkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg",rate:3,trailer:"https://www.youtube.com/embed/xWUgeP58r4w"},
    {id:3,name:"Love hard",category:"Comedy",description:"lorem lorem lorem",srcPicture:"https://fr.web.img5.acsta.net/c_310_420/pictures/21/10/11/09/53/1970566.jpg",rate:3,trailer:"https://www.youtube.com/embed/3boMRfx6cjE"},
    {id:4,name:"Army of the dead",category:"Horror",description:"lorem lorem lorem",srcPicture:"https://fr.web.img5.acsta.net/pictures/21/04/15/12/40/4834460.jpg",rate:3,trailer:"https://www.youtube.com/embed/tI1JGPhYBS8"},
    {id:5,name:"The silence",category:"Horror",description:"lorem lorem lorem",srcPicture:"https://fr.web.img3.acsta.net/pictures/19/03/29/16/48/1697689.jpg",rate:3,trailer:"https://www.youtube.com/embed/Y-ufZuqTd5c"},
    {id:6,name:"The holiday",category:"Romantic",description:"lorem lorem lorem",srcPicture:"https://fr.web.img6.acsta.net/medias/nmedia/18/62/83/50/18689023.jpg",rate:3,trailer:"https://www.youtube.com/embed/BDi5zH18vxU"},
    {id:7,name:"Forrest gump",category:"Romantic",description:"lorem lorem lorem",srcPicture:"https://fr.web.img4.acsta.net/pictures/15/10/13/15/12/514297.jpg",rate:3,trailer:"https://www.youtube.com/embed/bLvqoHBptjg"},
    {id:8,name:"The old guard",category:"Fantasy",description:"lorem lorem lorem",srcPicture:"https://fr.web.img4.acsta.net/pictures/20/05/26/09/44/5988886.jpg",rate:3,trailer:"https://www.youtube.com/embed/aK-X2d0lJ_s"},
    {id:9,name:"Venom",category:"Fantasy",description:"lorem lorem lorem",srcPicture:"https://fr.web.img2.acsta.net/pictures/21/09/01/11/19/0900123.jpg",rate:2,trailer:"https://www.youtube.com/embed/u9Mv98Gr5pY"}
  ]);
  const [searchVal,setSearchval] = useState("");
  const [searchStar, setSearchStar] = useState(0);
  

 
  return (
    <div className="App">
     

      <Route  exact path='/' >
      <Filter setSearchval={setSearchval} setSearchStar={setSearchStar} />
      <AddMovie filmData={filmData} setFilmData={setFilmData} />
      <MovieList filmData={filmData} searchVal={searchVal} searchStar={searchStar} />
      </Route>
      <Route path='/movieDetails/:id' render={(props)=><MovieDetail filmData={filmData} {...props} />} />
    </div>
  );
}

export default App;
