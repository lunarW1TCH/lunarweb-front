/** @jsxImportSource @emotion/react */
import createStyles from '../styles/createStyles';

import skills from '../data/skills.json';
import SkillItem, { SkillItemProps } from '../components/skills/SkillItem';

const SkillsPage = () => {
  const skillsArray = skills as SkillItemProps[];

  const styles = createStyles({
    skillsContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '80%',
      height: '70%',
      minHeight: 100,
      maxHeight: 800,
      margin: 'auto',
      marginTop: 50,
      paddingTop: 25,
      paddingBottom: 25,
      backgroundColor: 'white',
      borderRadius: 8,
      overflowY: 'auto',
    },
  });

  return (
    <div css={styles.skillsContainer}>
      {skillsArray
        .filter(skill => skill.category === 'Language')
        .map(skill => (
          <SkillItem key={skill.title} {...skill} />
        ))}
      {skillsArray
        .filter(skill => skill.category === 'Library/Framework')
        .map(skill => (
          <SkillItem key={skill.title} {...skill} />
        ))}
      {skillsArray
        .filter(skill => skill.category === 'Tool/Other')
        .map(skill => (
          <SkillItem key={skill.title} {...skill} />
        ))}
    </div>
  );
};

export default SkillsPage;
