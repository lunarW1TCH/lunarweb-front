/** @jsxImportSource @emotion/react */
import { useRouteError, isRouteErrorResponse } from 'react-router-dom';
import Navigation from '../components/ui/Navigation';

import createStyles from '../styles/createStyles';

const ErrorPage = () => {
  const error = useRouteError();

  let h1 = 'Something went wrong!';

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      h1 = 'This page does not exist';
    }
  }

  const styles = createStyles({
    rootContainer: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      color: 'white',
    },
    mainContainer: { width: '100%', textAlign: 'center' },
    footer: {
      backgroundColor: 'white',
      width: '100%',
      textAlign: 'center',
      fontSize: 12,
      padding: 10,
      position: 'sticky',
      color: 'black',
      a: {
        color: 'black',
        marginLeft: 30,
      },
    },
  });
  return (
    <div css={styles.rootContainer}>
      <Navigation />
      <main css={styles.mainContainer}>
        <h1>{h1}</h1>
      </main>
      <footer css={styles.footer}>
        Copyright 2023 &copy; Adrian Żegnałek{' '}
        <a href='	https://fontawesome.com/'>Icons by Font Awesome</a>
      </footer>
    </div>
  );
};

export default ErrorPage;
