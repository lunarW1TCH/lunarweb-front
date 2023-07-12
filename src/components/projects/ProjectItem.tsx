/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import createStyles from '../../styles/createStyles';
import { ITheme } from '../../styles/globalStyles';

export interface ProjectItemProps {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link: string;
}

const ProjectItem = (props: ProjectItemProps) => {
  const { title, description, image, technologies, link } = props;
  const theme = useTheme() as ITheme;

  const styles = createStyles({
    projectContainer: {
      margin: 10,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: 'white',
      borderRadius: 16,
      width: 350,
      color: theme.primary900,
    },
    projectImg: {
      width: 300,
      height: 300,
      objectFit: 'cover',
      transition: 'all .1s ease-in-out',
      '&:hover': {
        transform: 'scale(1.2)',
      },
    },
    imgContainer: {
      width: 300,
      height: 300,
      overflow: 'hidden',
      border: `2px solid ${theme.primary700}`,
      borderRadius: 8,
    },
    infoContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'top',
      alignItems: 'center',
      width: '100%',
      height: '100%',
    },
    projectTitle: {
      color: theme.primary700,
      marginTop: 25,
      marginBottom: 25,
    },
    projectDescription: {
      padding: 20,
      textAlign: 'justify',
    },
    projectTechnologies: {
      marginBottom: 20,
    },
  });

  return (
    <div css={styles.projectContainer}>
      <div>
        {link !== '' ? (
          <a css={{ textDecoration: 'none' }} href={link}>
            <h2 css={styles.projectTitle}>{title}</h2>
          </a>
        ) : (
          <h2 css={styles.projectTitle}>{title}</h2>
        )}
        <div css={styles.imgContainer}>
          {link !== '' ? (
            <a href={link}>
              <img css={styles.projectImg} src={image} />
            </a>
          ) : (
            <img css={styles.projectImg} src={image} />
          )}
        </div>
      </div>
      <div css={styles.infoContainer}>
        <span css={styles.projectDescription}>{description}</span>
        <ul css={styles.projectTechnologies}>
          {technologies.map(tech => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectItem;
