import logo from './logo.svg';
import './App.css';
import { Button } from './components/Button';


export const App = ()=>{
  return(
<>
    <h2>
    Mern Stack 
    </h2>
   <Button>
submit
   </Button>
 </>

  )
    

}

export default App;

// import React, { useState, useEffect } from "react";
// import { Container, Row } from "react-bootstrap";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import axios from "axios";
// import MovieCard from "./MovieCard";
// import MovieDetail from "./MovieDetail";

// function App() {
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     axios
//       .get(
//         "https://api.themoviedb.org/3/movie/popular?api_key=YOUR_API_KEY&language=en-US&page=1"
//       )
//       .then((response) => {
//         setMovies(response.data.results);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   return (
//     <Router>
//       <Container className="my-4">
//         <Row>
//           {movies.map((movie) => (
//             <MovieCard key={movie.id} movie={movie} />
//           ))}
//         </Row>
//         <Route path="/movie/:id" component={MovieDetail} />
//       </Container>
//     </Router>
//   );
// }

// export default App;

