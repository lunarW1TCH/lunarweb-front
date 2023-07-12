/** @jsxImportSource @emotion/react */
import createStyles from '../../styles/createStyles';
import { ITheme, mq } from '../../styles/globalStyles';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { useTheme } from '@emotion/react';

const Introduction = () => {
  const theme = useTheme() as ITheme;

  const styles = createStyles({
    outerContainer: {
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
    },
    innerContainer: {
      backgroundColor: 'white',
      width: 500,

      padding: 30,
      borderRadius: 8,
      color: 'black',
      [mq[1]]: {
        width: '90%',
      },
    },
    header: {
      padding: 40,
      fontSize: 40,
      [mq[0]]: {
        fontSize: 28,
      },
      [mq[1]]: {
        fontSize: 32,
      },
    },
    paragraph: {
      textAlign: 'justify',
      a: {
        color: theme.primary900,
      },
    },
    links: {
      marginTop: 16,
      width: '100%',
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: 'center',
    },
    link: {
      paddingTop: 8,
      textDecoration: 'none',
      verticalAlign: 'bottom',
      color: theme.primary900,
    },
    icon: {
      marginRight: 8,
      verticalAlign: 'top',
    },
    catCredit: {
      marginTop: 100,
      fontStyle: 'italic',
    },
  });

  return (
    <div css={styles.outerContainer}>
      <h1 css={styles.header}>
        Hello, I am Adrian Żegnałek <br /> a self-taught software developer
      </h1>
      <div css={styles.innerContainer}>
        <p css={styles.paragraph}>
          You can see some of my projects <a href='projects'>here</a> and on my
          GitHub account. Head on over to the <a href='skills'>skills</a> page
          to see the list of skills I have and technologies I worked with.
        </p>
        <div css={styles.links}>
          <span>
            <a css={styles.link} href='https://github.com/lunarW1TCH'>
              <FaGithub
                color={theme.primary700}
                css={styles.icon}
                fontSize='18'
              />
              GitHub
            </a>
          </span>
          <span>
            <a
              css={styles.link}
              href='https://www.linkedin.com/in/adrian-zegnalek/'
            >
              <FaLinkedin
                color={theme.primary700}
                css={styles.icon}
                fontSize='18'
              />
              LinkedIn
            </a>
          </span>
        </div>
      </div>
      <p css={styles.catCredit}>The cat name&apos;s Freja</p>
    </div>
  );
};

export default Introduction;
