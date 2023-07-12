/** @jsxImportSource @emotion/react */
import ProjectItem, {
  ProjectItemProps,
} from '../components/projects/ProjectItem';
import createStyles from '../styles/createStyles';

import projects from '../data/projects.json';

const ProjectsPage = () => {
  const projectsArray = projects as ProjectItemProps[];

  const styles = createStyles({
    projectsContainer: {
      height: '100%',
      width: '100%',
      marginTop: 20,
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      overflowY: 'auto',
      justifyContent: 'center',
    },
  });

  return (
    <div>
      <div css={styles.projectsContainer}>
        {projectsArray.map(project => (
          <ProjectItem key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
