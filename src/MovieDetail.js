// import React, { useState, useEffect } from "react";
// import { Container, Row, Col, Card } from "react-bootstrap";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// function MovieDetail() {
//   const { id } = useParams();
//   const [movie, setMovie] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     axios
//       .get(
//         `https://api.themoviedb.org/3/movie/${id}?api_key=YOUR_API_KEY&language=en-US`
//       )
//       .then((response) => {
//         setMovie(response.data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, [id]);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <Container className="my-4">
//       <Row>
//         <Col md={4}>
//           <Card>
//             <Card.Img
//               variant="top"
//               src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
//             />
//             <Card.Body>
//               <Card.Title>{movie.title}</Card.Title>
//               <Card.Text>{movie.overview}</Card.Text>
//               <Card.Text>
//                 <strong>Release Date:</strong> {movie.release_date}
//               </Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col md={8}>
//           <h2>Cast</h2>
//           <Row>
//             {movie.credits.cast.slice(0, 6).map((cast) => (
//               <Col xs={6} sm={4} md={3} key={cast.id}>
//                 <Card>
//                   <Card.Img
//                     variant="top"
//                     src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
//                   />
//                   <Card.Body>
//                     <Card.Title>{cast.name}</Card.Title>
//                     <Card.Text>{cast.character}</Card.Text>
//                   </Card.Body>
//                 </Card>
//               </Col>
//             ))}
//           </Row>
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default MovieDetail;
