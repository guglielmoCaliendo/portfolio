import { Container } from './BioEvent.styled';
import { useInView } from 'react-intersection-observer';
import useTheme from '../../hooks/useTheme';

type BioEvents = {
  date: number | string;
  description: {
    EN: string;
    ES: string;
  };
  lang: string;
};

export default function BioEvent(props: BioEvents) {
  const { ref, inView } = useInView();

  const { date, description, lang } = props;

  const { theme } = useTheme();

  return (
    <Container myTheme={theme}>
      <div ref={ref} className={inView ? 'show' : 'hidden'}>
        <h4>
          {typeof date === 'string' ? (lang === 'ES' ? 'Ahora' : 'Now') : date}
        </h4>
        <p>{lang === 'ES' ? description.ES : description.EN}</p>
      </div>
    </Container>
  );
}
