/** @jsxImportSource @emotion/react */
import { NavLink } from 'react-router-dom';
import { useTheme } from '@emotion/react';

import { ITheme } from '../../styles/globalStyles';
import createStyles from '../../styles/createStyles';

const Navigation = () => {
  const theme = useTheme() as ITheme;

  const styles = createStyles({
    navContainer: {
      width: '100%',
      padding: 10,
      backgroundColor: 'white',
      position: 'sticky',
    },
    navList: {
      listStyle: 'none',
      width: '100%',
      display: 'flex',
      fontSize: 18,
      fontWeight: 'bold',
      justifyContent: 'space-around',
      a: {
        textDecoration: 'none',
        textAlign: 'center',
        flexGrow: 1,
        margin: 0,
        color: theme.primary600,
        '&:hover': {
          color: theme.primary900,
        },
      },
    },
    active: {
      color: theme.primary900,
    },
    inactive: {},
  });

  return (
    <nav css={styles.navContainer}>
      <ul css={styles.navList}>
        <NavLink
          style={({ isActive }) => (isActive ? styles.active : styles.inactive)}
          to=''
        >
          Home
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? styles.active : styles.inactive)}
          to='projects'
        >
          Projects
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? styles.active : styles.inactive)}
          to='skills'
        >
          Skills
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? styles.active : styles.inactive)}
          to='contact'
        >
          Contact
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navigation;
