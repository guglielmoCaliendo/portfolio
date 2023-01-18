import { Container } from './ProjectContainer.styled';
import Project from '../Project/Project';
import { projects } from '../../assets/data';
import { useInView } from 'react-intersection-observer';
import useTheme from '../../hooks/useTheme';
import useLanguage from '../../hooks/useLanguage';

export default function Projects() {
  const { ref, inView } = useInView();
  const { theme } = useTheme();
  const { language } = useLanguage();

  const renderProjects = projects.map((project) => (
    <Project
      key={project.id}
      name={project.name}
      image={project.image}
      description={project.description}
      url={project.url}
      techs={project.technologies}
      lang={language}
    />
  ));

  return (
    <Container myTheme={theme} id='projects'>
      <div ref={ref} className={inView ? 'show' : 'hidden'}>
        <h3 className='title'>
          {language === 'ES' ? 'Proyectos' : `Projects`}
        </h3>
      </div>
      <div className='projects-container'>{renderProjects}</div>
    </Container>
  );
}
