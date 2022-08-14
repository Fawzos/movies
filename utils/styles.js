import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  // html: {
  //   backgroundColor: '#ddd',
  // },
  navbar: {
    backgroundColor: '#E24712',
    '& a': {
      marginLeft: 10,
      color: '#ffffff',
      cursor: 'pointer',
      textDecoration: 'none',
    },
    '& p': {
      fontSize: '1.5rem',
      fontWeight: 'bold',
    },
    '& div': {
      display: 'flex',
      justifyContent: 'space-between',
    },
  },
  section: {
    marginTop: 20,
    marginBottom: 20,
  },
  main: {
    minHeight: '90vh',
  },
  footer: {
    textAlign: 'center',
    padding: 20,
    backgroundColor: '#E24712',
    color: '#eeeeee',
    marginTop: 20,
    '& p': {
      fontSize: 20,
    },
  },
  bold: {
    fontWeight: 'bold',
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    transition: '1s',
    borderRadius: '20px',

    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
  colorTitle: {
    color: '#E87D49',
  },
  overview: {
    color: '#777',
  },
  form: {
    maxWidth: 800,
    margin: '0 auto',
  },
  swiper: {
    marginTop: '30px',
    borderRadius: '20px',
    height: '300px',
    backgroundColor: 'transparent',
  },
  vote: {
    position: 'absolute',
    left: '6px',
    top: '6px',
    backgroundColor: 'orangered',
    padding: '4px 10px',
    borderRadius: '2px',
    color: '#fff',
    fontSize: '14px',
  },
  swiperLink: {
    height: '200px',
    width: '100%',
    position: 'relative',
    display: 'inline-block',
    transition: '1s',
    overflow: 'visible',
    '&:hover': {
      transform: 'scale(0.9)',
    },
    '& img': {
      width: '100%',
      height: '100%',
      backgroundSize: 'cover',
      borderRadius: '7px',
    },
    '& h3': {
      textDecoration: 'none',
    },
  },
  heading: {
    color: '#E24712',
  },
  btn: {
    fontSize: '25px',
  },
});

export default useStyles;
