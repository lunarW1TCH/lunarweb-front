/** @jsxImportSource @emotion/react */
import { FaLinkedin, FaGithub } from 'react-icons/fa';

import createStyles from '../../styles/createStyles';
import { useTheme } from '@emotion/react';
import { ITheme, mq } from '../../styles/globalStyles';

const ContactInfo = () => {
  const theme = useTheme() as ITheme;

  const styles = createStyles({
    infoContainer: {
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      minWidth: '50%',
      margin: 16,
      padding: 12,
      borderRadius: 8,
      backgroundColor: 'white',
      [mq[1]]: {
        width: '100%',
      },
    },
    link: {
      textDecoration: 'none',
      verticalAlign: 'bottom',
      color: theme.primary900,
    },
    icon: {
      marginRight: 8,
      verticalAlign: 'top',
    },
  });
  return (
    <div css={styles.infoContainer}>
      <a css={styles.link} href='https://github.com/lunarW1TCH'>
        <FaGithub color={theme.primary700} css={styles.icon} fontSize='18' />
        GitHub
      </a>
      <a css={styles.link} href='https://www.linkedin.com/in/adrian-zegnalek/'>
        <FaLinkedin color={theme.primary700} css={styles.icon} fontSize='18' />
        LinkedIn
      </a>
    </div>
  );
};

export default ContactInfo;
