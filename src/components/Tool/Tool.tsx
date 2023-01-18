import { Container } from './Tool.styled';
import { useInView } from 'react-intersection-observer';
import useTheme from '../../hooks/useTheme';

type Tool = {
  name: string;
  image: string;
  percentage: number;
};

export default function Tool(props: Tool) {
  const { name, image } = props;
  const { ref, inView } = useInView();

  const { theme } = useTheme();

  return (
    <Container ref={ref} myTheme={theme}>
      <div className={`main-container ${inView ? 'show' : 'hidden'}`}>
        <div className='img-container'>
          <img src={image} alt={`${name} logo`} />
        </div>

        <p>{name}</p>
      </div>
    </Container>
  );
}
