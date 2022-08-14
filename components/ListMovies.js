// import {
//   Badge,
//   Button,
//   Card,
//   CardActionArea,
//   CardActions,
//   CardContent,
//   CardMedia,
//   Grid,
//   Link,
//   Typography,
// } from '@mui/material';
// import React from 'react';
// import NextLink from 'next/link';
// import useStyles from '../utils/styles';
// export default function ListMovies({ movies }) {
//   const classes = useStyles();
//   return (
//     <div>
//       <h1>Movies List</h1>
//       <Grid container spacing={3} alignItems="stretch">
//         {movies.map((movie) => (
//           <Grid item lg={4} md={4} key={movie.id}>
//             {/* <Badge
//               anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
//               badgeContent={movie.vote_average}
//               color="warning"
//               className={classes.badge}
//             > */}
//             <Card className={classes.card} raised>
//               <NextLink href={`/movie/${movie.id}`} passHref>
//                 <CardActionArea>
//                   <CardMedia
//                     component="img"
//                     image={`http://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
//                     title={movie.title}
//                   ></CardMedia>
//                   <CardContent>
//                     <h2 className={classes.colorTitle}>{movie.title}</h2>
//                     <Typography className={classes.overview}>
//                       {movie.overview}
//                     </Typography>
//                   </CardContent>
//                 </CardActionArea>
//               </NextLink>
//               <CardActions>
//                 <Typography className={classes.overview}>
//                   Release Date On: {movie.release_date}
//                 </Typography>
//                 <Button size="small" color="warning">
//                   <NextLink href={`/movie/${movie.id}`} passHref>
//                     Show Movie Details
//                   </NextLink>
//                 </Button>
//               </CardActions>
//             </Card>
//             {/* </Badge> */}
//           </Grid>
//         ))}
//       </Grid>
//     </div>
//   );
// }
