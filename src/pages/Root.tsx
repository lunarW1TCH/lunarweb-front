/** @jsxImportSource @emotion/react */
import { Outlet } from 'react-router-dom';
import Navigation from '../components/ui/Navigation';

import createStyles from '../styles/createStyles';

const RootLayout = () => {
  const styles = createStyles({
    rootContainer: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      color: 'white',
    },
    mainContainer: { width: '100%' },
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
        <Outlet />
      </main>
      <footer css={styles.footer}>
        Copyright 2023 &copy; Adrian Żegnałek{' '}
        <a href='	https://fontawesome.com/'>Icons by Font Awesome</a>
      </footer>
    </div>
  );
};

export default RootLayout;
