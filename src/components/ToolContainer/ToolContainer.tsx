import { Container } from './ToolContainer.styled';
import Tool from '../Tool/Tool';
import { skills } from '../../assets/data';
import { useInView } from 'react-intersection-observer';
import useTheme from '../../hooks/useTheme';
import useLanguage from '../../hooks/useLanguage';

export default function ToolContainer() {
  const { ref, inView } = useInView();

  const { theme } = useTheme();
  const { language } = useLanguage();

  const renderTools = skills.map((skill) => (
    <Tool
      key={skill.id}
      name={skill.name}
      image={skill.image}
      percentage={skill.percentage}
    />
  ));
  return (
    <Container myTheme={theme} id='tools'>
      <div ref={ref} className={inView ? 'show' : 'hidden'}>
        <h3 className='title'>
          {language === 'ES' ? 'Herramientas' : 'Tools'}
        </h3>
      </div>
      <div className='tools-container'>{renderTools}</div>
    </Container>
  );
}
