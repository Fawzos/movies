import { useEffect } from 'react';
import '../styles/globals.css';
import { StoreProvider } from '../utils/Store';
import { SessionProvider } from 'next-auth/react';
function MyApp({ Component, pageProps, session }) {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
    <SessionProvider session={session}>
      <StoreProvider>
        <Component {...pageProps} />;
      </StoreProvider>
    </SessionProvider>
  );
}

export default MyApp;
