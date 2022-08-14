import {
  AppBar,
  Button,
  createTheme,
  CssBaseline,
  FormControlLabel,
  Link,
  Switch,
  ThemeProvider,
  Toolbar,
  Typography,
} from '@mui/material';
import { Container } from '@mui/system';
import Head from 'next/head';
import React, { useContext } from 'react';
import useStyles from '../utils/styles';
import NextLink from 'next/link';
import { Store } from '../utils/Store';
import Cookies from 'js-cookie';
import { signIn, signOut, useSession } from 'next-auth/react';

export default function Layout({ title, children }) {
  const { state, dispatch } = useContext(Store);
  const { data: session } = useSession();
  const { darkMode } = state;
  const classes = useStyles();
  const theme = createTheme({
    typography: {
      h1: {
        fontSize: '1.6rem',
        fontWeight: '400',
        margin: '1rem 0',
      },
      h2: {
        fontSize: '1.4rem',
        fontWeight: '400',
        margin: '1rem 0',
      },
    },
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: '#E24712',
      },
      secondary: {
        main: '#208080',
      },
    },
  });
  const handleDarkMode = () => {
    dispatch({ type: darkMode ? 'DARK_MODE_OFF' : 'DARK_MODE_ON' });
    // const newDarkMode = !darkMode;
    // Cookies.set('darkMode', newDarkMode ? 'ON' : 'OFF');
  };

  return (
    <div className={classes.html}>
      <Head>
        <title>{title ? `${title}` : 'Movies Star'}</title>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="static" className={classes.navbar}>
          <Toolbar>
            <NextLink href="/" passHref>
              <Link>
                <Typography>MovieStars</Typography>
              </Link>
            </NextLink>
            <div>
              <FormControlLabel
                control={
                  <Switch
                    checked={darkMode}
                    onChange={handleDarkMode}
                    color="warning"
                    size="small"
                  ></Switch>
                }
                label="Dark Mode"
              ></FormControlLabel>
              <div>
                {session ? (
                  <Typography>
                    Welcome {session.user.name}
                    <Button
                      style={{ color: '#ffffff', fontSize: 'bold' }}
                      onClick={() => signOut()}
                    >
                      Sign Out
                    </Button>
                  </Typography>
                ) : (
                  <NextLink href="/login" passHref>
                    <Link>Sign In</Link>
                  </NextLink>
                )}
              </div>
              {/* <NextLink href="/login" passHref>
                <Link>
                  {session ? `Welcome ${session.user.name}` : 'Sign In'}
                </Link>
              </NextLink> */}
            </div>
          </Toolbar>
        </AppBar>
        <Container className={classes.main}>{children}</Container>
        <footer className={classes.footer}>
          <Typography>All rights reserved@Fawzy 2022</Typography>
        </footer>
      </ThemeProvider>
    </div>
  );
}
