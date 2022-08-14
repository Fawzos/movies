import React from 'react';
import Layout from '../components/Layout';
import { useSession, signIn, signOut } from 'next-auth/react';
import {
  Button,
  Grid,
  List,
  ListItem,
  TextField,
  Typography,
} from '@mui/material';
import { useRouter } from 'next/router';
import useStyles from '../utils/styles';
import NextLink from 'next/link';
import Link from 'next/link';

export default function login() {
  const classes = useStyles();
  const { data: session } = useSession();
  const router = useRouter();

  const handleBackToList = () => {
    router.push('/');
  };
  const handleSignIn = () => {
    signIn();
    router.push('/');
  };
  const handleSignOut = () => {
    () => signOut();
    router.push('/');
  };

  return (
    <Layout>
      <form className={classes.form}>
        <Typography component="h1" variant="h1">
          Login
        </Typography>
        <List>
          <ListItem>
            <TextField
              variant="outlined"
              fullWidth
              id="email"
              label="Email"
              inputProps={{ type: 'email' }}
            ></TextField>
          </ListItem>
          <ListItem>
            <TextField
              variant="outlined"
              fullWidth
              id="password"
              label="Password"
              inputProps={{ type: 'password' }}
            ></TextField>
          </ListItem>
          <ListItem>
            <Button variant="contained" type="submit" fullWidth>
              Sign In
            </Button>
          </ListItem>
          <ListItem>
            Dont't have an account, Sign in with{' '}
            <Button onClick={handleSignIn}>Google</Button>
          </ListItem>
        </List>
      </form>
    </Layout>
  );
  //   if (session) {
  //     return (
  //       <Layout>
  //         <Grid container spacing={1}>
  //           <Grid item md={4} lg={6}>
  //             <Typography style={{ marginTop: '30px' }}>
  //               Welcome, {session.user.name}
  //             </Typography>
  //             <Button onClick={handleSignOut}>Sign Out</Button>
  //             <Button onClick={handleBackToList}>Back to list movies</Button>
  //           </Grid>
  //         </Grid>
  //       </Layout>
  //     );
  //   } else {
  //     return (
  //       <Layout>
  //         <Typography>You are not signed in.</Typography>
  //         <Button onClick={() => signIn()}>Sign In</Button>
  //       </Layout>
  //     );
  //   }
}
