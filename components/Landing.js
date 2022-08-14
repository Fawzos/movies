import Image from 'next/image';
import React from 'react';
import { Button, Link, Typography } from '@mui/material';
import Layout from './Layout';
import { SwiperSlide, Swiper } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import NextLink from 'next/link';
import useStyles from '../utils/styles';

export default function Landing({ movies, image }) {
  const classes = useStyles();
  const breakpoints = {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  };
  const topRated = movies
    .slice()
    .sort((a, b) => parseFloat(b.vote_average - a.vote_average));
  const popularity = movies
    .slice()
    .sort((a, b) => parseFloat(b.popularity - a.popularity));
  console.log('Top Rated', topRated);
  console.log('Moviessssss', movies);
  return (
    <div>
      <h2 className={classes.heading}>Popular Movies</h2>
      <Swiper
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        spaceBetween={17}
        slidesPerView={4}
        Navigation
        modules={[Navigation]}
      >
        {popularity.map((movie) => (
          <SwiperSlide key={movie.id}>
            <NextLink href={`/movie/${movie.id}`} passHref>
              <Link className={classes.swiperLink}>
                <Typography className={classes.vote}>
                  {movie.vote_average}
                </Typography>
                <img
                  className={classes.img}
                  src={`http://image.tmdb.org/t/p/w300/${movie.backdrop_path}`}
                />
                <h2>{movie.title}</h2>
              </Link>
            </NextLink>
          </SwiperSlide>
        ))}
      </Swiper>
      <h2 className={classes.heading}>Top Rated</h2>
      <Swiper spaceBetween={4} slidesPerView={4}>
        {topRated.map((movie) => (
          <SwiperSlide key={movie.id}>
            <NextLink href={`/movie/${movie.id}`} passHref>
              <Link className={classes.swiperLink}>
                <Typography className={classes.vote}>
                  {movie.vote_average}
                </Typography>
                <img
                  className={classes.img}
                  src={`http://image.tmdb.org/t/p/w300/${movie.backdrop_path}`}
                />
                <h2>{movie.title}</h2>
              </Link>
            </NextLink>
          </SwiperSlide>
        ))}
      </Swiper>
      <NextLink href="/movies" passHref>
        <Link className={classes.btn}>Show All Movies</Link>
      </NextLink>
    </div>
  );
}

export async function getStaticProps() {
  const config = await fetch(
    `https://api.themoviedb.org/3/configuration?api_key=${process.env.APIKEY}`
  );
  const image = await config.json();
  return {
    props: {
      image,
    },
  };
}
