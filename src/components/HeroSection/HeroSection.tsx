import { Container, HiWrapper } from './HeroSection.styled';
import useTheme from '../../hooks/useTheme';
import useLanguage from '../../hooks/useLanguage';

export default function HeroSection() {
  const { theme } = useTheme();
  const { language } = useLanguage();

  return (
    <Container myTheme={theme} id='hero'>
      <HiWrapper myTheme={theme} className='hi-wrapper'>
        <h2 className='hi-lineup'>
          {language === 'ES' ? 'Hola, soy Guglielmo' : `Hi, I'm Guglielmo`}
        </h2>
      </HiWrapper>
      <HiWrapper myTheme={theme} className='hi-wrapper'>
        <h2 className='hi-lineup'>
          {language === 'ES' ? 'el chico que necesitas' : `the guy you need`}
        </h2>
      </HiWrapper>
      <HiWrapper myTheme={theme} className='hi-wrapper'>
        <h2 className='hi-lineup'>
          {language === 'ES'
            ? 'para convertir tareas difíciles'
            : `to turn difficult tasks`}
        </h2>
      </HiWrapper>
      <HiWrapper myTheme={theme} className='hi-wrapper'>
        <h2 className='hi-lineup'>
          {language === 'ES' ? 'en tareas simples' : `in simpler ones.`}
        </h2>
      </HiWrapper>
      <div className='based'>
        <p>{language === 'ES' ? 'asentado en' : `based in`}</p>
        <p className='based-ubication'>{language === 'ES' ? 'España' : `Spain`}</p>
      </div>
    </Container>
  );
}
