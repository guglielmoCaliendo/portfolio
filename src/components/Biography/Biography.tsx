import { Container } from './Biography.styled';
import BioEvent from '../BioEvent/BioEvent';
import chillImg from '../../assets/1673395497844.webp';
import sunny from '../../assets/sunny.png';
import { events } from '../../assets/data';
import { useInView } from 'react-intersection-observer';
import useTheme from '../../hooks/useTheme';
import useLanguage from '../../hooks/useLanguage';

export default function Biography() {
  const { ref: imgRef, inView: imgInView } = useInView();
  const { ref: divRef, inView: divInView } = useInView();

  const { theme } = useTheme();
  const { language } = useLanguage();

  const renderEvents = events.map((event) => (
    <BioEvent
      key={event.id}
      date={event.date}
      description={event.description}
      lang={language}
    />
  ));
  return (
    <Container myTheme={theme} id='bio'>
      <img
        ref={imgRef}
        className={`portrait ${imgInView ? 'show' : 'hidden'}`}
        src={chillImg}
        alt='guglielmo image'
      />
      <div>
        <div ref={divRef} className={`header ${divInView ? 'show' : 'hidden'}`}>
          <h3 className='title'>
            {language === 'ES' ? 'Biografía' : 'Biography'}
          </h3>
          <img className='sun' src={sunny} alt='sun icon' />
          <div className='birth'>
            <h3>
              13 <span>{language === 'ES' ? 'Dic' : 'Dec'}</span>
            </h3>
            <h3>1992</h3>
          </div>
        </div>
        <div className='bio-events-container'>{renderEvents}</div>
      </div>
    </Container>
  );
}
