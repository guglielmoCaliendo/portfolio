import dark from '../../assets/night-mode.png';
import light from '../../assets/solid-black-sun-symbol.png';
import portrait from '../../assets/1669139885380.jpg';
import BurgerButton from '../BurgerButton/BurgerButton';
import { Container } from './NavBar.styled';
import { useState } from 'react';
import useTheme from '../../hooks/useTheme';
import useLanguage from '../../hooks/useLanguage';
import { Link } from 'react-scroll';

export default function NavBar() {
  const [isActive, setIsActive] = useState(false);
  const { theme, changeTheme } = useTheme();
  const { language, changeLanguage } = useLanguage();

  return (
    <Container myTheme={theme}>
      <div>
        <img src={portrait} alt='guglielmo portrait' />
        <h1>
          <span>Guglielmo</span> Caliendo
        </h1>
      </div>

      <nav className={isActive ? 'links active' : 'links'}>
        <Link
          activeClass='active'
          to='hero'
          spy={true}
          smooth={true}
          duration={700}
        >
          {language === 'ES' ? 'Hola' : 'Hi'}
        </Link>

        <Link
          activeClass='active'
          to='projects'
          spy={true}
          smooth={true}
          duration={700}
        >
          {language === 'ES' ? 'Proyectos' : 'Projects'}
        </Link>

        <Link
          activeClass='active'
          to='tools'
          spy={true}
          smooth={true}
          duration={700}
        >
          {language === 'ES' ? 'Herramientas' : 'Tools'}
        </Link>

        <Link
          activeClass='active'
          to='bio'
          spy={true}
          smooth={true}
          duration={700}
        >
          {language === 'ES' ? 'Biografía' : 'Bio'}
        </Link>

        <Link
          activeClass='active'
          to='contact'
          spy={true}
          smooth={true}
          duration={700}
        >
          {language === 'ES' ? 'Contacto' : 'Contact'}
        </Link>

        <div className='buttons-container'>
          <img
            onClick={() => changeTheme()}
            className='theme'
            src={theme === 'dark' ? light : dark}
            alt=''
          />

          <div onClick={() => changeLanguage()} className='language'>
            {language === 'ES' ? 'EN' : 'ES'}
          </div>
        </div>
      </nav>

      <div onClick={() => setIsActive(!isActive)} className='burger-button'>
        <BurgerButton active={isActive} />
      </div>
    </Container>
  );
}
