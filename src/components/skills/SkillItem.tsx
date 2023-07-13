/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import { FaStar, FaRegStar, FaCircle } from 'react-icons/fa';

import createStyles from '../../styles/createStyles';
import { mq } from '../../styles/globalStyles';
import { ITheme } from '../../styles/globalStyles';

export interface SkillItemProps {
  title: string;
  description: string;
  category: string;
}

const SkillItem = (props: SkillItemProps) => {
  const { title, description, category } = props;
  const theme = useTheme() as ITheme;

  let circleColor = '#008080';

  switch (category) {
    case 'Language':
      circleColor = '#008080';
      break;
    case 'Library/Framework':
      circleColor = '#ff85a2';
      break;
    case 'Tool/Other':
      circleColor = '#aaaaaa';
      break;
  }

  const styles = createStyles({
    skillContainer: {
      width: '95%',
      marginTop: 8,
      marginBottom: 8,
      padding: 8,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: 'white',
      borderRadius: 16,
      border: `2px solid ${theme.primary700}`,
      color: theme.primary900,
      WebkitBoxShadow: '5px 5px 8px -5px rgba(66, 68, 90, 1)',
      MozBoxShadow: '5px 5px 8px -5px rgba(66, 68, 90, 1)',
      boxShadow: '5px 5px 8px -5px rgba(66, 68, 90, 1)',
    },
    dataContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'left',
      alignItems: 'center',
      width: '66%',
      span: {
        width: '33%',
        textAlign: 'left',
      },
      [mq[1]]: {
        flexDirection: 'column',
        float: 'left',
        alignItems: 'flex-start',
        flexGrow: 1,
        span: {
          padding: 4,
          width: '100%',
        },
      },
    },
    icon: {
      marginRight: 8,
      verticalAlign: 'text-top',
    },
    skillTitle: {
      fontWeight: 'bolder',
      marginRight: 8,
    },
    skillDescription: {
      width: '50%',
      textAlign: 'left',
    },
  });

  return (
    <div css={styles.skillContainer}>
      <div css={styles.dataContainer}>
        <span css={styles.skillTitle}>{title}</span>
        <span>
          <FaCircle css={styles.icon} color={circleColor} size='18' />
          {category}
        </span>
      </div>
      <span css={styles.skillDescription}>{description}</span>
    </div>
  );
};

export default SkillItem;
