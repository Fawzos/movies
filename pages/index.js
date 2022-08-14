import Landing from '../components/Landing';
import Layout from '../components/Layout';
import ListMovies from '../components/ListMovies';
import useStyles from '../utils/styles';

export default function Home({ movies, image }) {
  return (
    <Layout>
      {/* <ListMovies movies={movies} /> */}
      <Landing movies={movies} image={image} />
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.APIKEY}`
  );
  const data = await res.json();
  const movies = data.results;

  const config = await fetch(
    `https://api.themoviedb.org/3/configuration?api_key=${process.env.APIKEY}`
  );
  const image = await config.json();
  return {
    props: {
      movies,
      image,
    },
  };
}
