import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Container } from './Contact.styled';
import { useInView } from 'react-intersection-observer';
import twitterLogo from '../../assets/twitter-sign.png';
import gitHubLogo from '../../assets/github-sign.png';
import linkedInLogo from '../../assets/linkedin.png';
import useTheme from '../../hooks/useTheme';
import useLanguage from '../../hooks/useLanguage';

type Input =
  | React.ChangeEvent<HTMLInputElement>
  | React.ChangeEvent<HTMLTextAreaElement>;

export default function Contact() {
  const initialValues = {
    user_name: '',
    user_email: '',
    message: '',
  };

  const initialMessages = {
    name: false,
    email: false,
    userMessage: false,
    gratefulMessage: false,
  };

  const [inputValues, setInputValues] = useState(initialValues);
  const [messages, setMessages] = useState(initialMessages);
  const form = useRef(null);
  const { ref, inView } = useInView();

  console.log(form.current);

  const { theme } = useTheme();
  const { language } = useLanguage();

  const handleChange = (e: Input) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
    setMessages(initialMessages);
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const regex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (inputValues.user_name.length === 0) {
      return setMessages({ ...messages, name: true });
    }

    if (!regex.test(inputValues.user_email)) {
      return setMessages({ ...messages, email: true });
    }

    if (inputValues.message.length === 0) {
      return setMessages({ ...messages, userMessage: true });
    }

    if (form.current) {
      emailjs
        .sendForm(
          'service_hc65hcq',
          'template_2hzoihr',
          form.current,
          'BFi2Mqc76xuApjOW-'
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }

    setInputValues(initialValues);

    setMessages({ ...messages, gratefulMessage: true });
    setTimeout(() => {
      setMessages({ ...messages, gratefulMessage: false });
    }, 5000);
  };

  return (
    <Container myTheme={theme} id='contact'>
      <div ref={ref} className={inView ? 'show' : 'hidden'}>
        <div className='title'>
          <h2>{language === 'ES' ? 'Contáctame!' : 'Get in touch!'}</h2>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            onChange={handleChange}
            type='text'
            name='user_name'
            placeholder={language === 'ES' ? 'Nombre' : 'Name'}
            value={inputValues.user_name}
          />
          <p className={`message ${messages.name ? 'show-message' : ''}`}>
            {language === 'ES'
              ? `Lo siento pero este campo no puede estar vacío, me gustaría saber quién eres. :)`
              : `I'm sorry, but this field cannot be empty, I would like to know who you are.  :)`}
          </p>

          <input
            onChange={handleChange}
            type='text'
            name='user_email'
            placeholder='Email'
            value={inputValues.user_email}
          />
          <p className={`message ${messages.email ? 'show-message' : ''}`}>
            {language === 'ES'
              ? 'Lo siento pero tienes que ingresar un email real, de lo contrario no podre contactarte. :('
              : `I'm sorry but you have to enter a real email, otherwise I won't be able to contact you. :(`}
          </p>

          <textarea
            placeholder={language === 'ES' ? 'Mensaje' : 'Message'}
            onChange={handleChange}
            name='message'
            value={inputValues.message}
          />
          <p
            className={`message ${messages.userMessage ? 'show-message' : ''}`}
          >
            {language === 'ES'
              ? `Lo siento pero este campo no puede estar vacío, realmente me gustaría saber que me quieres decir. :D`
              : `I'm sorry but this field cannot be empty, I would really like to know what you want to tell me. :D`}
          </p>

          <input
            className='button'
            type='submit'
            value={language === 'ES' ? 'Enviar' : 'Send'}
          />

          <p
            className={`grateful-message ${
              messages.gratefulMessage ? 'show-message' : ''
            }`}
          >
            {language === 'ES'
              ? `Muchas gracias por contactarme. Si es una pregunta me comunicare con usted lo mas rápido posible.`
              : `Thanks for contact me. If it is a question I will contact you as quickly as possible.`}
          </p>
        </form>

        <div className='logos-container'>
          <img
            onClick={() =>
              (window.location.href = `https://github.com/guglielmoCaliendo`)
            }
            src={gitHubLogo}
            alt='github logo'
          />

          <img
            onClick={() =>
              (window.location.href = `https://www.linkedin.com/in/guglielmocaliendosilva/`)
            }
            src={linkedInLogo}
            alt='linkedin logo'
          />

          <img
            onClick={() =>
              (window.location.href = `https://twitter.com/GuglielmoCS92`)
            }
            src={twitterLogo}
            alt='twitter logo'
          />
        </div>
      </div>
    </Container>
  );
}
