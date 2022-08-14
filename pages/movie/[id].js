import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Link,
  List,
  ListItem,
  Typography,
} from '@mui/material';
import React from 'react';
import Layout from '../../components/Layout';
import NextLink from 'next/link';
import useStyles from '../../utils/styles';
import Image from 'next/image';
import { SwiperSlide, Swiper } from 'swiper/react';
import 'swiper/css';
export default function MovieScreen({ movie, image }) {
  const classes = useStyles();
  console.log(image);
  const imageBaseUrl = image.images.base_url;
  const width = 'w500';
  console.log(movie);
  const myLoader = ({ src }) => {
    return `${imageBaseUrl}${width}${movie.backdrop_path}`;
  };

  return (
    <Layout title={movie.original_title}>
      <div className={classes.section}>
        <NextLink href="/" passHref>
          <Link>Back to movies list</Link>
        </NextLink>
      </div>
      <Grid container spacing={1}>
        <Grid item md={6} xs={12}>
          <Image
            loader={myLoader}
            src={`http://image.tmdb.org/t/p/w300/${movie.backdrop_path}`}
            width={500}
            height={500}
            alt={movie.title}
          ></Image>
        </Grid>
        <Grid item md={3} xs={12}>
          <List>
            <ListItem>
              <Typography component="h1" variant="h1" className={classes.bold}>
                Title: {movie.title}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography className={classes.bold}>
                Vote Average: {movie.vote_average}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography className={classes.bold}>
                Release Date: {movie.release_date}
              </Typography>
            </ListItem>
          </List>
        </Grid>
        <Grid item md={3} xs={12}>
          <List>
            <ListItem>
              <Typography className={classes.bold}>
                Overview: {movie.overview}
              </Typography>
            </ListItem>
          </List>
        </Grid>
        {/* <Swiper
          spaceBetween={50}
          slidesPerView={4}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <NextLink href={`/movie/${movie.id}`} passHref>
              <Link>
                <Image
                  className={classes.swiper}
                  loader={myLoader}
                  src={`http://image.tmdb.org/t/p/w300/${movie.backdrop_path}`}
                  width={300}
                  height={300}
                />
              </Link>
            </NextLink>
          </SwiperSlide>
          {/* <SwiperSlide>slide 1</SwiperSlide>
          <SwiperSlide>slide2</SwiperSlide>
          <SwiperSlide>slide 3</SwiperSlide> */}
        {/* </Swiper> */}
      </Grid>
    </Layout>
  );
}

export async function getStaticPaths() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.APIKEY}`
  );
  const data = await res.json();
  const movies = data.results;
  const paths = movies.map((movie) => ({
    params: { id: movie.id.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.APIKEY}&language=en-US`
  );
  const movie = await res.json();

  const config = await fetch(
    `https://api.themoviedb.org/3/configuration?api_key=${process.env.APIKEY}`
  );
  const image = await config.json();
  return {
    props: {
      movie,
      image,
    },
  };
}
