import { Burger } from './BurgerButton.styled';

type Props = { active: boolean };

export default function BurgerButton(props: Props) {
  return (
    <Burger>
      <div className={`icon nav-icon-6 ${props.active ? 'open' : ''}`}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </Burger>
  );
}
