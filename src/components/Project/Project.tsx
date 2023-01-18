import { Container } from './Project.styled';
import { useInView } from 'react-intersection-observer';
import useTheme from '../../hooks/useTheme';

type Project = {
  name: string;
  image: string;
  description: {
    ES: string;
    EN: string;
  };
  techs: string[];
  url: string;
  lang: string;
};

export default function Project(props: Project) {
  const { name, image, description, url, lang, techs } = props;
  const { ref, inView } = useInView();
  const { theme } = useTheme();

  return (
    <div onClick={() => (window.location.href = `${url}`)}>
      <Container ref={ref} myTheme={theme}>
        <div className={inView ? 'show' : 'hidden'}>
          <div className='img-gradient'>
            <img src={image} alt={`${name} project`} />
          </div>

          <div className='project-info'>
            <h3>{name}</h3>
            <p>{lang === 'ES' ? description.ES : description.EN}</p>
            <div className='techs'>
              {techs.map((tech) => (
                <p key={tech}>{tech}</p>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
